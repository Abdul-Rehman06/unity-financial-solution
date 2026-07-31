const baseUrl = import.meta?.env?.BASE_URL || '/';
const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
const defaultApiBase = `${normalizedBaseUrl}/server/api`;
const API_BASE = import.meta?.env?.VITE_PORTAL_API_BASE || defaultApiBase;

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

async function parseJsonResponse(res) {
  const contentType = res.headers.get('content-type') || '';
  const text = await res.text();
  if (!contentType.includes('application/json')) {
    const msg = !res.ok
      ? `Request failed (${res.status})`
      : 'Invalid API response (expected JSON). Check that the API base path points to /server/api (or your site subfolder + /server/api).';
    throw new Error(msg);
  }
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = { raw: text };
  }
  if (!res.ok) {
    const message = data?.error || data?.message || `Request failed (${res.status})`;
    throw new Error(message);
  }
  return data;
}

export async function adminLogin({ username, password }) {
  const res = await fetch(`${API_BASE}/admin/login.php`, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify({ username, password }),
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export async function adminLogout() {
  const res = await fetch(`${API_BASE}/admin/logout.php`, {
    method: 'POST',
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export async function adminMe() {
  const res = await fetch(`${API_BASE}/admin/me.php`, {
    method: 'GET',
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export async function fetchClients({ q = '', status = '' } = {}) {
  const params = new URLSearchParams();
  if (q) params.set('q', q);
  if (status) params.set('status', status);
  const res = await fetch(`${API_BASE}/admin/clients.php?${params.toString()}`, {
    method: 'GET',
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export async function fetchClient(client_uuid) {
  const params = new URLSearchParams({ client_uuid });
  const res = await fetch(`${API_BASE}/admin/client.php?${params.toString()}`, {
    method: 'GET',
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export function adminDownloadUrl(docId) {
  return `${API_BASE}/admin/download.php?id=${encodeURIComponent(docId)}`;
}

export function adminExportClientsCsvUrl() {
  return `${API_BASE}/admin/export-clients.csv.php`;
}

export function adminExportClientZipUrl(client_uuid) {
  return `${API_BASE}/admin/export-client.zip.php?client_uuid=${encodeURIComponent(client_uuid)}`;
}
