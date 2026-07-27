import React, { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Download, ExternalLink, LogOut, Search, ShieldCheck, Users } from 'lucide-react';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import Button from '../components/Button';
import { adminExportClientsCsvUrl, adminLogout, adminMe, fetchClients } from '../lib/adminApi';

function fmtDate(v) {
  if (!v) return '';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleString();
}

function statusPill(status) {
  if (status === 'submitted') return 'bg-primary-green/10 text-primary-green border-primary-green/20';
  if (status === 'draft') return 'bg-accent-gold/10 text-[#B38A36] border-accent-gold/20';
  return 'bg-primary-navy/5 text-primary-navy border-primary-navy/10';
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('');
  const [clients, setClients] = useState([]);

  const exportUrl = useMemo(() => adminExportClientsCsvUrl(), []);

  const load = async () => {
    setError('');
    setLoading(true);
    try {
      const me = await adminMe();
      setUser(me?.user || '');
      const res = await fetchClients({ q, status });
      setClients(res?.clients || []);
    } catch (e) {
      if (String(e?.message || '').toLowerCase().includes('unauthorized')) {
        navigate('/admin/login', { replace: true });
        return;
      }
      setError(e.message || 'Failed to load clients.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const signOut = async () => {
    try {
      await adminLogout();
    } catch {}
    navigate('/admin/login', { replace: true });
  };

  if (loading && !user) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center px-6">
        <div className="text-primary-navy font-heading font-semibold">Verifying secure access…</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="bg-primary-navy pt-36 pb-32 px-6 sm:px-8 text-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-2">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Admin Dashboard</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Client Submissions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Signed in as <span className="text-white font-semibold">{user || 'admin'}</span>
          </p>

          <div className="max-w-3xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={exportUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-primary-navy font-heading font-semibold hover:bg-bg-light transition-all"
            >
              <Download className="w-5 h-5" />
              Export CSV
            </a>
            <Button variant="gold" onClick={signOut} className="px-7 py-4 justify-center">
              <LogOut className="w-5 h-5" />
              Sign Out
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 -mt-20 pb-24 flex-grow flex flex-col items-center">
        <div className="w-full max-w-7xl mx-auto bg-white rounded-[2rem] shadow-xl border border-border-gray relative z-20 overflow-hidden">
          <div className="p-6 sm:p-8 border-b border-border-gray bg-white">
            <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:justify-between">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-primary-navy" />
                <div className="text-lg font-heading font-bold text-primary-navy">Clients</div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                <div className="relative w-full sm:w-80">
                  <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search name, email, phone, uuid"
                    className="w-full bg-bg-light border border-border-gray rounded-xl pl-12 pr-4 py-3 text-primary-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy/30 transition-all"
                  />
                </div>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full sm:w-56 bg-bg-light border border-border-gray rounded-xl px-4 py-3 text-primary-navy focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy/30 transition-all"
                >
                  <option value="">All Status</option>
                  <option value="draft">Draft</option>
                  <option value="submitted">Submitted</option>
                </select>
                <button
                  onClick={load}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-navy text-white font-heading font-semibold hover:bg-primary-navy/90 transition-all"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>

          {error ? (
            <div className="p-6 sm:p-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          ) : null}

          <div className="overflow-x-auto w-full">
            <table className="w-full text-left whitespace-nowrap">
              <thead className="bg-bg-light border-b border-border-gray">
                <tr>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy">Client</th>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy">Contact</th>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy">Status</th>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy">Created</th>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy">Submitted</th>
                  <th className="px-6 py-4 text-xs font-bold tracking-widest uppercase text-primary-navy text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-text-soft text-center">
                      Loading…
                    </td>
                  </tr>
                ) : clients.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-10 text-text-soft text-center">
                      No clients found.
                    </td>
                  </tr>
                ) : (
                  clients.map((c) => {
                    const name = `${c.first_name || ''} ${c.last_name || ''}`.trim() || 'Unnamed';
                    return (
                      <tr key={c.client_uuid} className="border-b border-border-gray/60 hover:bg-bg-light/50 transition-colors">
                        <td className="px-6 py-5">
                          <div className="font-semibold text-primary-navy">{name}</div>
                          <div className="text-xs text-text-soft mt-1 max-w-[150px] truncate" title={c.client_uuid}>{c.client_uuid}</div>
                        </td>
                        <td className="px-6 py-5">
                          <div className="text-sm text-primary-navy">{c.email || '-'}</div>
                          <div className="text-sm text-text-soft mt-1">{c.phone || '-'}</div>
                        </td>
                        <td className="px-6 py-5">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-bold tracking-wide ${statusPill(c.status)}`}>
                            {c.status}
                          </span>
                        </td>
                        <td className="px-6 py-5 text-sm text-text-soft">{fmtDate(c.created_at)}</td>
                        <td className="px-6 py-5 text-sm text-text-soft">{fmtDate(c.submitted_at)}</td>
                        <td className="px-6 py-5 text-right">
                          <Link
                            to={`/admin/clients/${c.client_uuid}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-navy text-white font-heading font-semibold text-sm hover:bg-primary-navy/90 transition-all"
                          >
                            View
                            <ExternalLink className="w-4 h-4" />
                          </Link>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

