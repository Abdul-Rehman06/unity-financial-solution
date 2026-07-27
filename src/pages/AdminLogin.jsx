import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LockKeyhole, ShieldCheck } from 'lucide-react';
import MeshGradient from '../components/ui/mesh-gradient-shader';
import Button from '../components/Button';
import { adminLogin, adminMe } from '../lib/adminApi';

const inputClass =
  'w-full bg-white border border-border-gray rounded-xl px-5 py-4 text-primary-navy placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-navy/20 focus:border-primary-navy/30 transition-all';

const labelClass = 'block text-sm font-semibold text-primary-navy mb-2';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [form, setForm] = useState({ username: '', password: '' });

  useEffect(() => {
    let mounted = true;
    adminMe()
      .then(() => {
        if (!mounted) return;
        navigate('/admin', { replace: true });
      })
      .catch(() => {})
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.username.trim() || !form.password) {
      setError('Enter username and password.');
      return;
    }
    setSaving(true);
    try {
      await adminLogin({ username: form.username.trim(), password: form.password });
      navigate('/admin', { replace: true });
    } catch (err) {
      setError(err.message || 'Login failed.');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-light flex items-center justify-center px-6">
        <div className="text-primary-navy font-heading font-semibold">Loading…</div>
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
              <span className="text-accent-gold font-bold tracking-widest text-sm uppercase">Admin Access</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Secure Dashboard Login
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-14">
            Sign in to review client files, download documents, and export submissions.
          </p>
        </div>
      </section>

      <section className="px-6 sm:px-8 -mt-20 pb-24 flex-grow flex flex-col items-center">
        <div className="w-full max-w-xl mx-auto bg-white p-8 sm:p-10 md:p-12 rounded-[2rem] shadow-xl border border-border-gray relative z-20 overflow-hidden">
          {error ? (
            <div className="mb-8 bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
              <p className="text-red-700 font-medium">{error}</p>
            </div>
          ) : null}

          <form onSubmit={submit} className="space-y-6">
            <div>
              <label className={labelClass}>Username</label>
              <input
                className={inputClass}
                value={form.username}
                onChange={(e) => setForm((p) => ({ ...p, username: e.target.value }))}
                placeholder="Enter username"
                autoComplete="username"
              />
            </div>
            <div>
              <label className={labelClass}>Password</label>
              <input
                className={inputClass}
                value={form.password}
                onChange={(e) => setForm((p) => ({ ...p, password: e.target.value }))}
                placeholder="Enter password"
                type="password"
                autoComplete="current-password"
              />
            </div>

            <Button
              variant="gold"
              className="w-full justify-center py-5 text-lg"
              onClick={submit}
            >
              <LockKeyhole className="w-5 h-5" />
              {saving ? 'Signing in…' : 'Sign In'}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

