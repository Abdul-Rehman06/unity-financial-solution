const API_BASE = import.meta?.env?.VITE_PORTAL_API_BASE || '/api';

const jsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const portalSession = {
  get() {
    try {
      const raw = localStorage.getItem('ufs_portal_session');
      return raw ? JSON.parse(raw) : null;
    } catch {
      return null;
    }
  },
  set(session) {
    localStorage.setItem('ufs_portal_session', JSON.stringify(session));
  },
  clear() {
    localStorage.removeItem('ufs_portal_session');
  },
};

async function parseJsonResponse(res) {
  const text = await res.text();
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

async function postJson(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(body),
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

async function postForm(path, formData) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'POST',
    body: formData,
    credentials: 'include',
  });
  return parseJsonResponse(res);
}

export async function savePersonal(payload) {
  return postJson('/savePersonal.php', payload);
}

export async function saveAddress(payload) {
  return postJson('/saveAddress.php', payload);
}

export async function savePhone(payload) {
  return postJson('/savePhone.php', payload);
}

export async function saveEmail(payload) {
  return postJson('/saveEmail.php', payload);
}

export async function saveExperian(payload) {
  return postJson('/saveExperian.php', payload);
}

export async function saveMyFreeScore(payload) {
  return postJson('/saveMyFreeScore.php', payload);
}

export async function saveNav(payload) {
  return postJson('/saveNav.php', payload);
}

export async function saveReferral(payload) {
  return postJson('/saveReferral.php', payload);
}

export async function saveSignature(payload) {
  return postJson('/saveSignature.php', payload);
}

export async function uploadDocument({ client_uuid, type, file }) {
  const form = new FormData();
  form.append('client_uuid', client_uuid);
  form.append('type', type);
  form.append('file', file);
  return postForm('/upload.php', form);
}

export async function submitPortal(payload) {
  return postJson('/submit.php', payload);
}

