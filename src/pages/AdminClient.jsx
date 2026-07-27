import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Download, FileText, ShieldCheck } from 'lucide-react';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import Button from '../components/Button';
import { adminDownloadUrl, adminExportClientZipUrl, adminMe, fetchClient } from '../lib/adminApi';

function fmtDate(v) {
  if (!v) return '';
  const d = new Date(v);
  if (Number.isNaN(d.getTime())) return v;
  return d.toLocaleString();
}

function Field({ label, value }) {
  return (
    <div className="rounded-2xl border border-border-gray bg-white p-6">
      <div className="text-xs font-bold tracking-widest uppercase text-primary-navy/70">{label}</div>
      <div className="text-primary-navy font-semibold mt-2 break-words">{value || '-'}</div>
    </div>
  );
}

export default function AdminClient() {
  const navigate = useNavigate();
  const { client_uuid } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [client, setClient] = useState(null);
  const [docs, setDocs] = useState([]);

  const zipUrl = useMemo(() => adminExportClientZipUrl(client_uuid), [client_uuid]);

  useEffect(() => {
    let mounted = true;
    adminMe()
      .then(() => fetchClient(client_uuid))
      .then((res) => {
        if (!mounted) return;
        setClient(res?.client || null);
        setDocs(res?.documents || []);
      })
      .catch((e) => {
        if (!mounted) return;
        if (String(e?.message || '').toLowerCase().includes('unauthorized')) {
          navigate('/admin/login', { replace: true });
          return;
        }
        setError(e.message || 'Unable to load client.');
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, [client_uuid]);

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
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Client File</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            {client ? `${client.first_name || ''} ${client.last_name || ''}`.trim() || 'Client' : 'Client'}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed break-all">
            {client_uuid}
          </p>

          <div className="max-w-3xl mx-auto mt-14 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={zipUrl}
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white text-primary-navy font-heading font-semibold hover:bg-bg-light transition-all"
            >
              <Download className="w-5 h-5" />
              Export ZIP
            </a>
            <Button to="/admin" variant="gold" className="px-7 py-4 justify-center">
              Back to Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 -mt-20 pb-24 flex-grow flex flex-col items-center w-full">
        <div className="w-full max-w-7xl mx-auto relative z-20">
          {error ? (
            <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8 mb-8">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          ) : null}

          {loading ? (
            <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8 text-text-soft">
              Loading…
            </div>
          ) : client ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                <Field label="Status" value={client.status} />
                <Field label="Created" value={fmtDate(client.created_at)} />
                <Field label="Submitted" value={fmtDate(client.submitted_at)} />
                <Field label="Email" value={client.email} />
                <Field label="Phone" value={client.phone} />
                <Field label="Referral" value={client.referral} />
                <Field label="Address" value={[client.street, client.street2, client.city, client.state, client.zip].filter(Boolean).join(', ')} />
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8 mb-8 overflow-hidden">
                <h2 className="text-2xl font-heading font-bold text-primary-navy mb-6">Credit Accounts</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="rounded-2xl border border-border-gray bg-bg-light p-6 overflow-hidden">
                    <div className="text-xs font-bold tracking-widest uppercase text-primary-navy/70 mb-3">Experian</div>
                    <pre className="whitespace-pre-wrap text-sm text-primary-navy font-sans break-words">{client.experian || '-'}</pre>
                  </div>
                  <div className="rounded-2xl border border-border-gray bg-bg-light p-6 overflow-hidden">
                    <div className="text-xs font-bold tracking-widest uppercase text-primary-navy/70 mb-3">MyFreeScoreNow</div>
                    <pre className="whitespace-pre-wrap text-sm text-primary-navy font-sans break-words">{client.myfreescore || '-'}</pre>
                  </div>
                  <div className="rounded-2xl border border-border-gray bg-bg-light p-6 overflow-hidden">
                    <div className="text-xs font-bold tracking-widest uppercase text-primary-navy/70 mb-3">Nav.com</div>
                    <pre className="whitespace-pre-wrap text-sm text-primary-navy font-sans break-words">{client.nav || '-'}</pre>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <h2 className="text-2xl font-heading font-bold text-primary-navy">Documents</h2>
                  <div className="text-sm text-text-soft">{docs.length} file(s)</div>
                </div>

                {docs.length === 0 ? (
                  <div className="text-text-soft">No documents uploaded.</div>
                ) : (
                  <div className="space-y-4">
                    {docs.map((d) => (
                      <div
                        key={d.id}
                        className="rounded-2xl border border-border-gray bg-bg-light p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="min-w-0">
                          <div className="flex items-center gap-3">
                            <FileText className="w-5 h-5 text-primary-navy" />
                            <div className="font-semibold text-primary-navy truncate">{d.original_filename}</div>
                          </div>
                          <div className="text-sm text-text-soft mt-2">
                            <span className="font-semibold text-primary-navy/70">Type:</span> {d.type} ·{' '}
                            <span className="font-semibold text-primary-navy/70">Uploaded:</span> {fmtDate(d.uploaded_at)}
                          </div>
                        </div>
                        <a
                          href={adminDownloadUrl(d.id)}
                          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-navy text-white font-heading font-semibold hover:bg-primary-navy/90 transition-all shrink-0"
                        >
                          <Download className="w-5 h-5" />
                          Download
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8 text-text-soft">
              Client not found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

