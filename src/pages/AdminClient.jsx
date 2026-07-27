import React, { useEffect, useMemo, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Download, FileText, ShieldCheck, Printer } from 'lucide-react';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import Button from '../components/Button';
import { adminDownloadUrl, adminExportClientZipUrl, adminMe, fetchClient } from '../lib/adminApi';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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
  const [pdfGenerating, setPdfGenerating] = useState(false);
  const contractRef = useRef(null);

  const zipUrl = useMemo(() => adminExportClientZipUrl(client_uuid), [client_uuid]);

  const downloadContractPDF = async () => {
    if (!contractRef.current) return;
    setPdfGenerating(true);
    try {
      const canvas = await html2canvas(contractRef.current, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${client?.first_name || 'Client'}_${client?.last_name || 'POA'}.pdf`);
    } catch (e) {
      console.error(e);
      alert('Failed to generate PDF');
    } finally {
      setPdfGenerating(false);
    }
  };

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

  if (loading && !client) {
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

              <div className="bg-white rounded-[2rem] shadow-xl border border-border-gray p-8 mt-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                  <h2 className="text-2xl font-heading font-bold text-primary-navy">Power of Attorney Agreement</h2>
                  <button
                    onClick={downloadContractPDF}
                    disabled={pdfGenerating}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-gold to-[#B38A36] text-white font-heading font-semibold hover:shadow-lg transition-all shrink-0 disabled:opacity-50"
                  >
                    <Printer className="w-5 h-5" />
                    {pdfGenerating ? 'Generating...' : 'Export PDF'}
                  </button>
                </div>

                <div className="rounded-2xl border border-border-gray bg-bg-light p-8 overflow-hidden relative">
                  <div ref={contractRef} className="bg-white p-10 text-sm text-primary-navy leading-relaxed max-w-4xl mx-auto shadow-sm border border-border-gray">
                    <h3 className="text-xl font-bold text-center mb-6">POWER OF ATTORNEY</h3>
                    <p className="mb-4">
                      I, <strong>{client.first_name} {client.last_name}</strong>, hereby appoint The Siegel Professional Group LLC of 8403 Colesville Rd, Suite 1100, Silver Spring, MD 20902 as my attorney-in-fact (“Agent”) to exercise the powers and discretions described below.
                    </p>
                    <p className="mb-4">I hereby revoke any and all general powers of attorney and special powers of attorney that previously have been signed by me.</p>
                    <p className="mb-4">However, the preceding sentence shall not have the effect of revoking any powers of attorney that are directly related to my health care that previously have been signed by me.</p>
                    <p className="mb-4">
                      My Agent shall have full power and authority to act on my behalf. This power and authority shall authorize my Agent to manage and conduct all of my affairs and to exercise all of my legal rights and powers, including all rights and powers that I may acquire in the future. My Agent’s powers shall include, but not be limited to, the power to:
                    </p>
                    <p className="mb-4">1. Conduct any and all banking transactions, including opening or closing any type of account with any financial institution.</p>
                    <p className="mb-4">
                      This Power of Attorney shall be construed broadly as a General Power of Attorney. The listing of specific powers is not intended to limit or restrict the general powers granted in this Power of Attorney in any manner.
                    </p>
                    <p className="mb-4">
                      Any power or authority granted to my Agent under this document shall be limited to the extent necessary to prevent this Power of Attorney from causing, (i) my income to be taxable to my Agent, (ii) my assets to be subject to a general power of appointment by my Agent, or (iii) my Agent to have any incidents of ownership with respect to any life insurance policies that I may own on the life of my Agent.
                    </p>
                    <p className="mb-4">
                      My Agent shall not be liable for any loss that results from a judgment error that was made in good faith. However, my Agent shall be liable for willful misconduct or the failure to act in good faith while acting under the authority of this Power of Attorney. A Successor Agent shall not be liable for acts of a prior Agent.
                    </p>
                    <p className="mb-4">
                      No person who relies in good faith on the authority of my Agent under this instrument shall incur any liability to me, my estate or my personal representative. I authorize my Agent to indemnify and hold harmless any third party who accepts and acts under this document.
                    </p>
                    <p className="mb-4">
                      If any part of any provision of this instrument shall be invalid or unenforceable under applicable law, such part shall be ineffective to the extent of such invalidity only, without in any way affecting the remaining parts of such provision or the remaining provisions of this instrument.
                    </p>
                    <p className="mb-4">
                      My Agent shall be entitled to reasonable compensation for any services provided as my Agent as specified in my client agreement. My Agent shall be entitled to reimbursement of all reasonable expenses incurred as a result of carrying out any provision of this Power of Attorney.
                    </p>
                    <p className="mb-4">
                      My Agent shall provide an accounting for all funds handled and all acts performed as my Agent as required under state law or upon my request or the request of any authorized personal representative, fiduciary or court of record acting on my behalf.
                    </p>
                    <p className="mb-4">
                      This Power of Attorney shall become effective immediately, and shall not be affected by my disability or lack of mental competence, except as may be provided otherwise by an applicable state statute. This is a Durable Power of Attorney. This Power of Attorney shall continue effective until my death or until sixty (60) days after issuance of final payment receipt, whichever comes first. This Power of Attorney may be revoked by me at any time by providing written notice to my Agent.
                    </p>
                    <div className="mt-10 pt-8 border-t border-border-gray">
                      <div className="grid grid-cols-2 gap-8">
                        <div>
                          <div className="text-xs font-bold text-text-soft uppercase mb-2">Signature</div>
                          {client.signature ? (
                            <img src={client.signature} alt="Client Signature" className="h-20 object-contain mix-blend-multiply" />
                          ) : (
                            <div className="h-20 flex items-center text-text-soft italic">No signature provided</div>
                          )}
                          <div className="border-t border-black mt-2 pt-2 text-sm font-semibold">{client.first_name} {client.last_name}</div>
                        </div>
                        <div>
                          <div className="text-xs font-bold text-text-soft uppercase mb-2">Date Signed</div>
                          <div className="h-20 flex items-end pb-2">
                            <span className="text-lg">{new Date(client.submitted_at || client.created_at).toLocaleDateString()}</span>
                          </div>
                          <div className="border-t border-black mt-2 pt-2 text-sm font-semibold">Date</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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

