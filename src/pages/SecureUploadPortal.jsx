import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle2, ChevronLeft, ChevronRight, FileText, ShieldCheck } from 'lucide-react';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import {
  portalSession,
  saveAddress,
  saveEmail,
  saveExperian,
  saveMyFreeScore,
  saveNav,
  savePersonal,
  savePhone,
  saveReferral,
  saveSignature,
  submitPortal,
  uploadDocument,
} from '../lib/portalApi';

const inputClass =
  'w-full bg-white border border-border-gray rounded-xl px-5 py-4 text-primary-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy/30 transition-all';

const labelClass = 'block text-sm font-semibold text-primary-navy mb-2';

const stepTitles = [
  'Welcome',
  'Personal Information',
  'Address',
  'Phone',
  'Email',
  'Experian Account',
  'MyFreeScoreNow',
  'Nav.com',
  'Government ID',
  'Social Security Card',
  'Address Verification',
  'EIN Letter',
  'Articles of Incorporation',
  'Additional Documents',
  'Referral Source',
  'Power of Attorney',
];

function clampStep(step) {
  if (Number.isNaN(step)) return 0;
  return Math.max(0, Math.min(15, step));
}

function formatPercent(step) {
  const max = 15;
  return Math.round((step / max) * 100);
}

function extOk(file) {
  const ok = ['application/pdf', 'image/png', 'image/jpeg'];
  return ok.includes(file.type);
}

function sizeOk(file) {
  const maxBytes = 20 * 1024 * 1024;
  return file.size <= maxBytes;
}

function UploadCard({ title, subtitle, accepted, value, onPick }) {
  const inputRef = useRef(null);
  const [drag, setDrag] = useState(false);

  const choose = () => inputRef.current?.click();

  return (
    <div
      className={`rounded-2xl border p-8 transition-all ${
        drag ? 'border-accent-gold bg-accent-gold/5' : 'border-border-gray bg-white'
      }`}
      onDragEnter={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(true);
      }}
      onDragOver={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);
      }}
      onDrop={(e) => {
        e.preventDefault();
        e.stopPropagation();
        setDrag(false);
        const file = e.dataTransfer.files?.[0];
        if (file) onPick(file);
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-5 h-5 text-primary-navy" />
            <h3 className="text-xl font-heading font-bold text-primary-navy">{title}</h3>
          </div>
          {subtitle ? <p className="text-text-soft">{subtitle}</p> : null}
          <p className="text-sm text-text-soft mt-4">{accepted}</p>
        </div>

        <button
          type="button"
          onClick={choose}
          className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary-navy text-white font-heading font-semibold transition-all hover:bg-primary-navy/90 hover:shadow-[0_10px_24px_rgba(13,27,61,0.25)]"
        >
          Choose File
        </button>
      </div>

      <input
        ref={inputRef}
        type="file"
        className="hidden"
        accept={accepted.includes('PDF') ? '.pdf,.png,.jpg,.jpeg' : undefined}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) onPick(file);
        }}
      />

      <div className="mt-6 rounded-xl border border-border-gray bg-bg-light p-4 flex items-start gap-3">
        {value ? (
          <>
            <CheckCircle2 className="w-5 h-5 text-primary-green mt-0.5" />
            <div className="min-w-0">
              <div className="text-sm font-semibold text-primary-navy truncate">{value}</div>
              <div className="text-xs text-text-soft">Uploaded successfully</div>
            </div>
          </>
        ) : (
          <>
            <div className="w-5 h-5 rounded-full border border-border-gray bg-white mt-0.5" />
            <div className="text-sm text-text-soft">
              Drop file here or click “Choose File”. No page reload.
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function SignaturePad({ value, onChange }) {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastRef = useRef({ x: 0, y: 0 });

  const resize = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ratio = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * ratio);
    canvas.height = Math.floor(rect.height * ratio);
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(ratio, ratio);
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#0D1B3D';
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    if (value) {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, rect.width, rect.height);
      };
      img.src = value;
    }
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const getPoint = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const start = (e) => {
    drawingRef.current = true;
    lastRef.current = getPoint(e);
  };

  const move = (e) => {
    if (!drawingRef.current) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const p = getPoint(e);
    ctx.beginPath();
    ctx.moveTo(lastRef.current.x, lastRef.current.y);
    ctx.lineTo(p.x, p.y);
    ctx.stroke();
    lastRef.current = p;
  };

  const end = () => {
    drawingRef.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dataUrl = canvas.toDataURL('image/png');
    onChange(dataUrl);
  };

  const clear = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, rect.width, rect.height);
    onChange('');
  };

  return (
    <div className="rounded-2xl border border-border-gray bg-white p-6">
      <div className="flex items-center justify-between gap-4 mb-4">
        <div className="text-sm font-semibold text-primary-navy">Signature</div>
        <button
          type="button"
          onClick={clear}
          className="text-sm font-semibold text-primary-navy/70 hover:text-primary-navy transition-colors"
        >
          Clear
        </button>
      </div>
      <div className="rounded-xl border border-border-gray bg-white overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-48 touch-none"
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
          onPointerLeave={end}
        />
      </div>
      <p className="text-xs text-text-soft mt-3">Draw your signature above.</p>
    </div>
  );
}

export default function SecureUploadPortal() {
  const navigate = useNavigate();
  const existingSession = useMemo(() => portalSession.get(), []);
  const [step, setStep] = useState(() => clampStep(existingSession?.step ?? 0));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [clientUuid, setClientUuid] = useState(() => existingSession?.client_uuid || '');

  const [form, setForm] = useState(() => ({
    first_name: existingSession?.first_name || '',
    last_name: existingSession?.last_name || '',
    street: existingSession?.street || '',
    street2: existingSession?.street2 || '',
    city: existingSession?.city || '',
    state: existingSession?.state || '',
    zip: existingSession?.zip || '',
    phone: existingSession?.phone || '',
    email: existingSession?.email || '',
    experian: existingSession?.experian || '',
    myfreescore: existingSession?.myfreescore || '',
    nav: existingSession?.nav || '',
    referral: existingSession?.referral || '',
    signature: existingSession?.signature || '',
  }));

  const [uploads, setUploads] = useState(() => ({
    government_id: existingSession?.uploads?.government_id || '',
    ss_card: existingSession?.uploads?.ss_card || '',
    address_verification: existingSession?.uploads?.address_verification || '',
    ein: existingSession?.uploads?.ein || '',
    articles: existingSession?.uploads?.articles || '',
    additional: existingSession?.uploads?.additional || '',
  }));

  const percent = formatPercent(step);

  const persist = (next) => {
    const session = {
      ...(portalSession.get() || {}),
      client_uuid: clientUuid,
      ...form,
      uploads,
      step: next,
    };
    portalSession.set(session);
  };

  useEffect(() => {
    persist(step);
  }, [step]);

  const onField = (key) => (e) => setForm((p) => ({ ...p, [key]: e.target.value }));

  const validateStep = () => {
    if (step === 1) return Boolean(form.first_name.trim() && form.last_name.trim());
    if (step === 2) return Boolean(form.street.trim() && form.city.trim() && form.state.trim() && form.zip.trim());
    if (step === 3) return Boolean(form.phone.trim());
    if (step === 4) return Boolean(form.email.trim());
    if (step === 8) return Boolean(uploads.government_id);
    if (step === 9) return Boolean(uploads.ss_card);
    if (step === 10) return Boolean(uploads.address_verification);
    if (step === 11) return Boolean(uploads.ein);
    if (step === 12) return Boolean(uploads.articles);
    if (step === 15) return Boolean(form.signature);
    return true;
  };

  const upload = async (type, file) => {
    setError('');
    if (!clientUuid) {
      setError('Please complete Step 1 first so we can create your secure portal session.');
      return;
    }
    if (!extOk(file)) {
      setError('Invalid file type. Please upload PDF, PNG, JPG, or JPEG.');
      return;
    }
    if (!sizeOk(file)) {
      setError('File too large. Please upload files under 20MB.');
      return;
    }
    setSaving(true);
    try {
      const res = await uploadDocument({ client_uuid: clientUuid, type, file });
      setUploads((p) => ({ ...p, [type]: res?.filename || file.name }));
      const session = portalSession.get() || {};
      portalSession.set({ ...session, uploads: { ...(session.uploads || {}), [type]: res?.filename || file.name } });
    } catch (e) {
      setError(e.message || 'Upload failed.');
    } finally {
      setSaving(false);
    }
  };

  const go = (next) => {
    const s = clampStep(next);
    setStep(s);
    persist(s);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const back = () => go(step - 1);

  const next = async () => {
    setError('');
    if (!validateStep()) {
      setError('Please complete the required fields before continuing.');
      return;
    }

    if (step === 0) {
      go(1);
      return;
    }

    setSaving(true);
    try {
      const session = portalSession.get() || {};

      if (step === 1) {
        const res = await savePersonal({ client_uuid: clientUuid, first_name: form.first_name, last_name: form.last_name });
        const resolvedUuid = res?.client_uuid || clientUuid;
        setClientUuid(resolvedUuid);
        const nextSession = { ...session, client_uuid: resolvedUuid, first_name: form.first_name, last_name: form.last_name };
        portalSession.set(nextSession);
      }

      if (step === 2) {
        await saveAddress({
          client_uuid: clientUuid,
          street: form.street,
          street2: form.street2,
          city: form.city,
          state: form.state,
          zip: form.zip,
        });
      }

      if (step === 3) {
        await savePhone({ client_uuid: clientUuid, phone: form.phone });
      }

      if (step === 4) {
        await saveEmail({ client_uuid: clientUuid, email: form.email });
      }

      if (step === 5) {
        await saveExperian({ client_uuid: clientUuid, experian: form.experian });
      }

      if (step === 6) {
        await saveMyFreeScore({ client_uuid: clientUuid, myfreescore: form.myfreescore });
      }

      if (step === 7) {
        await saveNav({ client_uuid: clientUuid, nav: form.nav });
      }

      if (step === 14) {
        await saveReferral({ client_uuid: clientUuid, referral: form.referral });
      }

      if (step === 15) {
        await saveSignature({ client_uuid: clientUuid, signature: form.signature });
        await submitPortal({ client_uuid: clientUuid });
        portalSession.clear();
        navigate('/thank-you');
        return;
      }

      go(step + 1);
    } catch (e) {
      setError(e.message || 'Something went wrong.');
    } finally {
      setSaving(false);
    }
  };

  const StepBadge = () => (
    <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-full px-6 py-2">
      <ShieldCheck className="w-4 h-4 text-accent-gold" />
      <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">
        Step {step} of 15
      </span>
    </div>
  );

  return (
    <div className="flex flex-col w-full bg-bg-light min-h-screen">
      <section className="bg-primary-navy pt-36 pb-32 px-6 sm:px-8 text-center relative overflow-hidden flex-shrink-0">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply pointer-events-none">
          <MeshGradient speed={6} intensity={1.2} grain={0.3} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center justify-center mb-10">
            <StepBadge />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Funding Secure Upload Portal
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {step === 0
              ? 'Start your secure onboarding. Complete each step to submit your information and documents for review.'
              : `${stepTitles[step]} — progress is saved as you go.`}
          </p>

          <div className="max-w-3xl mx-auto mt-14">
            <div className="flex items-center justify-between text-sm text-gray-300 mb-3">
              <span className="font-semibold tracking-wide">{percent}% Complete</span>
              <span className="font-semibold tracking-wide">
                Step {step} of 15
              </span>
            </div>
            <div className="h-3 rounded-full bg-white/10 overflow-hidden border border-white/10">
              <div className="h-full bg-gradient-to-r from-accent-gold to-[#B38A36]" style={{ width: `${percent}%` }} />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 sm:px-8 -mt-20 pb-24 flex-grow flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto bg-white p-8 sm:p-10 md:p-12 rounded-[2rem] shadow-xl border border-border-gray relative overflow-hidden">
          <div className="flex items-start justify-between gap-6 mb-10">
            <div className="min-w-0">
              <div className="text-sm font-bold tracking-widest uppercase text-primary-green mb-2">
                {step === 0 ? 'Step 0 — Welcome' : `Step ${step} of 15`}
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy">
                {stepTitles[step]}
              </h2>
            </div>
          </div>

          {error ? (
            <div className="mb-10 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          ) : null}

          {step === 0 ? (
            <div className="space-y-8">
              <div className="bg-bg-light p-8 rounded-2xl border border-border-gray">
                <div className="text-xl font-heading font-bold text-primary-navy mb-3">Welcome</div>
                <p className="text-text-soft leading-relaxed">
                  This secure portal helps us collect the information and documents required to review your funding profile.
                  Progress is saved at each step.
                </p>
              </div>
            </div>
          ) : null}

          {step === 1 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClass}>First Name</label>
                <input value={form.first_name} onChange={onField('first_name')} className={inputClass} placeholder="Enter first name" />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input value={form.last_name} onChange={onField('last_name')} className={inputClass} placeholder="Enter last name" />
              </div>
            </div>
          ) : null}

          {step === 2 ? (
            <div className="space-y-8">
              <div>
                <label className={labelClass}>Street Address</label>
                <input value={form.street} onChange={onField('street')} className={inputClass} placeholder="Street address" />
              </div>
              <div>
                <label className={labelClass}>Address Line 2</label>
                <input value={form.street2} onChange={onField('street2')} className={inputClass} placeholder="Apt, suite, etc. (optional)" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className={labelClass}>City</label>
                  <input value={form.city} onChange={onField('city')} className={inputClass} placeholder="City" />
                </div>
                <div>
                  <label className={labelClass}>State</label>
                  <input value={form.state} onChange={onField('state')} className={inputClass} placeholder="State" />
                </div>
                <div>
                  <label className={labelClass}>ZIP Code</label>
                  <input value={form.zip} onChange={onField('zip')} className={inputClass} placeholder="ZIP" />
                </div>
              </div>
            </div>
          ) : null}

          {step === 3 ? (
            <div>
              <label className={labelClass}>Phone Number</label>
              <input value={form.phone} onChange={onField('phone')} className={inputClass} placeholder="Enter phone number" />
            </div>
          ) : null}

          {step === 4 ? (
            <div>
              <label className={labelClass}>Email Address</label>
              <input value={form.email} onChange={onField('email')} className={inputClass} placeholder="Enter email address" />
            </div>
          ) : null}

          {step === 5 ? (
            <div className="space-y-6">
              <div className="text-text-soft">
                Enter your Experian account details in the format below:
              </div>
              <textarea
                value={form.experian}
                onChange={onField('experian')}
                rows={8}
                className={`${inputClass} resize-none`}
                placeholder={`Username:\nPassword:\nSecurity Question:\nSecurity Answer:`}
              />
              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                <p className="text-red-700 font-medium">
                  Do not submit passwords or unnecessary sensitive information anywhere else in the portal. Only submit what is requested.
                </p>
              </div>
            </div>
          ) : null}

          {step === 6 ? (
            <div className="space-y-6">
              <div className="text-text-soft">Paste any required MyFreeScoreNow details below.</div>
              <textarea
                value={form.myfreescore}
                onChange={onField('myfreescore')}
                rows={8}
                className={`${inputClass} resize-none`}
                placeholder="Enter MyFreeScoreNow information here"
              />
            </div>
          ) : null}

          {step === 7 ? (
            <div className="space-y-6">
              <div className="text-text-soft">Paste any required Nav.com details below.</div>
              <textarea
                value={form.nav}
                onChange={onField('nav')}
                rows={8}
                className={`${inputClass} resize-none`}
                placeholder="Enter Nav.com information here"
              />
            </div>
          ) : null}

          {step === 8 ? (
            <UploadCard
              title="Government-Issued Photo ID"
              subtitle="Driver License, Passport, or State ID"
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.government_id}
              onPick={(file) => upload('government_id', file)}
            />
          ) : null}

          {step === 9 ? (
            <UploadCard
              title="Social Security Card"
              subtitle=""
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.ss_card}
              onPick={(file) => upload('ss_card', file)}
            />
          ) : null}

          {step === 10 ? (
            <UploadCard
              title="Address Verification"
              subtitle="Utility bill, mortgage statement, or bank statement"
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.address_verification}
              onPick={(file) => upload('address_verification', file)}
            />
          ) : null}

          {step === 11 ? (
            <UploadCard
              title="EIN Letter"
              subtitle="IRS CP575"
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.ein}
              onPick={(file) => upload('ein', file)}
            />
          ) : null}

          {step === 12 ? (
            <UploadCard
              title="Articles of Incorporation"
              subtitle=""
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.articles}
              onPick={(file) => upload('articles', file)}
            />
          ) : null}

          {step === 13 ? (
            <UploadCard
              title="Additional Documents (Optional)"
              subtitle="Tax returns, financial statements, bank statements, or any supporting documents"
              accepted="Accepted: PDF, PNG, JPG"
              value={uploads.additional}
              onPick={(file) => upload('additional', file)}
            />
          ) : null}

          {step === 14 ? (
            <div>
              <label className={labelClass}>Who referred you?</label>
              <input value={form.referral} onChange={onField('referral')} className={inputClass} placeholder="Referral source" />
            </div>
          ) : null}

          {step === 15 ? (
            <div className="space-y-8">
              <div className="rounded-2xl border border-border-gray bg-bg-light p-8">
                <div className="text-xl font-heading font-bold text-primary-navy mb-4">Power of Attorney Agreement</div>
                <div className="h-48 overflow-y-auto rounded-xl bg-white border border-border-gray p-6 text-sm text-text-soft leading-relaxed">
                  <div className="space-y-4">
                    <p>
                      Here is our lovely power of attorney. If you agree to it, kindly sign on the signature line and then click submit to get the good times rollin'.*This field is required.
                    </p>
                    <p>
                      I hereby appoint The Siegel Professional Group LLC of 8403 Colesville Rd, Suite 1100, Silver Spring, MD 20902 as my attorney-in-fact (“Agent”) to exercise the powers and discretions described below.
                    </p>
                    <p>I hereby revoke any and all general powers of attorney and special powers of attorney that previously have been signed by me.</p>
                    <p>However, the preceding sentence shall not have the effect of revoking any powers of attorney that are directly related to my health care that previously have been signed by me.</p>
                    <p>
                      My Agent shall have full power and authority to act on my behalf. This power and authority shall authorize my Agent to manage and conduct all of my affairs and to exercise all of my legal rights and powers, including all rights and powers that I may acquire in the future. My Agent’s powers shall include, but not be limited to, the power to:
                    </p>
                    <p>1. Conduct any and all banking transactions, including opening or closing any type of account with any financial institution.</p>
                    <p>
                      This Power of Attorney shall be construed broadly as a General Power of Attorney. The listing of specific powers is not intended to limit or restrict the general powers granted in this Power of Attorney in any manner.
                    </p>
                    <p>
                      Any power or authority granted to my Agent under this document shall be limited to the extent necessary to prevent this Power of Attorney from causing, (i) my income to be taxable to my Agent, (ii) my assets to be subject to a general power of appointment by my Agent, or (iii) my Agent to have any incidents of ownership with respect to any life insurance policies that I may own on the life of my Agent.
                    </p>
                    <p>
                      My Agent shall not be liable for any loss that results from a judgment error that was made in good faith. However, my Agent shall be liable for willful misconduct or the failure to act in good faith while acting under the authority of this Power of Attorney. A Successor Agent shall not be liable for acts of a prior Agent.
                    </p>
                    <p>
                      No person who relies in good faith on the authority of my Agent under this instrument shall incur any liability to me, my estate or my personal representative. I authorize my Agent to indemnify and hold harmless any third party who accepts and acts under this document.
                    </p>
                    <p>
                      If any part of any provision of this instrument shall be invalid or unenforceable under applicable law, such part shall be ineffective to the extent of such invalidity only, without in any way affecting the remaining parts of such provision or the remaining provisions of this instrument.
                    </p>
                    <p>
                      My Agent shall be entitled to reasonable compensation for any services provided as my Agent as specified in my client agreement. My Agent shall be entitled to reimbursement of all reasonable expenses incurred as a result of carrying out any provision of this Power of Attorney.
                    </p>
                    <p>
                      My Agent shall provide an accounting for all funds handled and all acts performed as my Agent as required under state law or upon my request or the request of any authorized personal representative, fiduciary or court of record acting on my behalf.
                    </p>
                    <p>
                      This Power of Attorney shall become effective immediately, and shall not be affected by my disability or lack of mental competence, except as may be provided otherwise by an applicable state statute. This is a Durable Power of Attorney. This Power of Attorney shall continue effective until my death or until sixty (60) days after issuance of final payment receipt, whichever comes first. This Power of Attorney may be revoked by me at any time by providing written notice to my Agent
                    </p>
                    <p>[SIGNATURE PAGE FOLLOWS]</p>
                  </div>
                </div>
              </div>

              <SignaturePad value={form.signature} onChange={(v) => setForm((p) => ({ ...p, signature: v }))} />

              <div className="rounded-2xl border border-border-gray bg-bg-light p-6 text-sm text-text-soft leading-relaxed">
                Submission does not guarantee approval, funding amount, credit limit, interest rate, repayment terms, lender offer, or funding timeline.
              </div>
            </div>
          ) : null}

          <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={back}
              disabled={step === 0 || saving}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-heading font-semibold transition-all ${
                step === 0 || saving
                  ? 'bg-bg-light text-gray-400 border border-border-gray cursor-not-allowed'
                  : 'bg-white text-primary-navy border border-border-gray hover:border-primary-navy/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.05)]'
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
              Back
            </button>

            <button
              type="button"
              onClick={next}
              disabled={saving}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full font-heading font-semibold transition-all ${
                saving
                  ? 'bg-primary-navy/60 text-white cursor-wait'
                  : 'bg-gradient-to-r from-accent-gold to-[#B38A36] text-white hover:shadow-[0_10px_30px_rgba(200,157,60,0.35)] hover:-translate-y-0.5'
              }`}
            >
              {step === 15 ? 'Submit' : 'Continue'}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
