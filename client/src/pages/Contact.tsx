// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
/**
 * Contact — simplified brochure contact form.
 *
 * Form fields: Full name, Email, Phone (optional), Message.
 * On submit, a modal asks the visitor to choose Email or WhatsApp;
 * each option opens a pre-filled `mailto:` or `wa.me` URL so the
 * message arrives in the operator's actual inbox / WhatsApp.
 *
 * No server-side handling, no organization-type dropdown, no
 * organization name field, no Turnstile, no DB writes. Pure
 * mailto:/wa.me client-side compose.
 */
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/i18n";
import { usePageTitle } from "@/hooks/usePageTitle";

// ── Static contact destinations ──────────────────────────────────────
const CONTACT_EMAIL = "emad.cs.albalawi@gmail.com";
const CONTACT_PHONE_DISPLAY = "+966 57 030 3869";
const CONTACT_PHONE_E164 = "966570303869"; // wa.me wants digits only

// ── Icons ────────────────────────────────────────────────────────────
const MailIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 7l-10 7L2 7" />
  </svg>
);
const PhoneIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
const CloseIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
const CheckCircleIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

// ── Helpers: compose mailto: and wa.me URLs from form data ───────────
function composeEmailUrl(form: { name: string; email: string; phone: string; message: string }, isAr: boolean): string {
  const subject = isAr
    ? `رسالة من موقع ميثاق — ${form.name}`
    : `Message from Mithaq website — ${form.name}`;
  const lines = isAr
    ? [
        form.message,
        "",
        "—",
        `من: ${form.name}`,
        `البريد: ${form.email}`,
        form.phone ? `الهاتف: ${form.phone}` : null,
      ]
    : [
        form.message,
        "",
        "—",
        `From: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
      ];
  const body = lines.filter(Boolean).join("\n");
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function composeWhatsAppUrl(form: { name: string; email: string; phone: string; message: string }, isAr: boolean): string {
  const lines = isAr
    ? [
        `مرحباً، أنا ${form.name}`,
        form.email ? `البريد: ${form.email}` : null,
        form.phone ? `الهاتف: ${form.phone}` : null,
        "",
        form.message,
      ]
    : [
        `Hi, I'm ${form.name}`,
        form.email ? `Email: ${form.email}` : null,
        form.phone ? `Phone: ${form.phone}` : null,
        "",
        form.message,
      ];
  const text = lines.filter((l) => l !== null).join("\n");
  return `https://wa.me/${CONTACT_PHONE_E164}?text=${encodeURIComponent(text)}`;
}

// ── Component ────────────────────────────────────────────────────────
export default function Contact() {
  const { isAr } = useTranslation();
  usePageTitle("تواصل معنا", "Contact Us");

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [showChannelModal, setShowChannelModal] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleField = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((errs) => { const { [field]: _, ...rest } = errs; return rest; });
  };

  const validate = (): boolean => {
    const nextErrors: Record<string, string> = {};
    if (form.name.trim().length < 2) nextErrors.name = isAr ? "يرجى إدخال اسمك" : "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) nextErrors.email = isAr ? "بريد إلكتروني غير صالح" : "Invalid email";
    if (form.message.trim().length < 5) nextErrors.message = isAr ? "الرسالة قصيرة جداً" : "Message is too short";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setShowChannelModal(true);
  };

  const sendVia = (channel: "email" | "whatsapp") => {
    const url = channel === "email"
      ? composeEmailUrl(form, isAr)
      : composeWhatsAppUrl(form, isAr);
    // Open in new tab so the visitor keeps the brochure tab.
    window.open(url, "_blank", "noopener,noreferrer");
    setShowChannelModal(false);
    setSent(true);
  };

  // ── Contact-info cards (right column) ──────────────────────────────
  const contactInfo = [
    {
      icon: <MailIcon />,
      label: isAr ? "البريد الإلكتروني" : "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
    },
    {
      icon: <WhatsAppIcon size={18} />,
      label: isAr ? "واتساب" : "WhatsApp",
      value: CONTACT_PHONE_DISPLAY,
      href: `https://wa.me/${CONTACT_PHONE_E164}`,
      external: true,
    },
  ];

  const inputCls = "w-full rounded-lg border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] px-3 py-2.5 text-sm placeholder-[var(--text-secondary)] focus:outline-none focus:border-[var(--btn-primary-bg)]";

  return (
    <div className="min-h-screen text-[var(--text-primary)]" dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 pt-28 pb-16">
        {/* Header — single line, no marketing copy */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold heading-glow">{isAr ? "تواصل معنا" : "Contact Us"}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Right column on RTL / Left column on LTR — contact info cards */}
          <div className="space-y-4">
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="block p-5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--navy-light)] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[var(--border-color)]/50 text-[var(--navy-light)] shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-[var(--text-secondary)] mb-1">{item.label}</p>
                    <p className="font-medium text-[var(--text-primary)] break-all" dir="ltr">{item.value}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {sent ? (
              <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-center space-y-5">
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-[var(--btn-primary-bg)]/20">
                  <CheckCircleIcon />
                </div>
                <h2 className="text-xl font-bold">{isAr ? "تم فتح تطبيق الإرسال" : "Send App Opened"}</h2>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {isAr
                    ? "أكمل الإرسال من التطبيق الذي فُتح في علامة التبويب الجديدة. إذا لم يفتح شيء، استخدم البطاقات على الجانب للتواصل مباشرة."
                    : "Finish sending from the app that opened in the new tab. If nothing opened, use the cards on the side to reach out directly."}
                </p>
                <button
                  type="button"
                  onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="text-sm font-medium text-[var(--navy-light)] hover:underline"
                >
                  {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] space-y-5">
                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1.5">
                    {isAr ? "الاسم" : "Name"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={handleField("name")}
                    className={inputCls}
                    placeholder={isAr ? "اسمك الكامل" : "Your full name"}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1.5">
                    {isAr ? "البريد الإلكتروني" : "Email"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={handleField("email")}
                    className={inputCls}
                    placeholder="name@example.com"
                    dir="ltr"
                  />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1.5">
                    {isAr ? "رقم الجوال" : "Phone"} <span className="text-[var(--text-muted)]">({isAr ? "اختياري" : "optional"})</span>
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={handleField("phone")}
                    className={inputCls}
                    placeholder="+966 5x xxx xxxx"
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[var(--text-secondary)] mb-1.5">
                    {isAr ? "الرسالة" : "Message"} <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={handleField("message")}
                    className={`${inputCls} resize-y min-h-[140px]`}
                    rows={6}
                    placeholder={isAr ? "اكتب رسالتك هنا…" : "Write your message here…"}
                  />
                  {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-lg font-semibold bg-[var(--btn-primary-bg)] text-white hover:brightness-110 transition-all"
                >
                  {isAr ? "إرسال الرسالة" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Channel-choice modal */}
      {showChannelModal && (
        <div
          onClick={() => setShowChannelModal(false)}
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="channel-modal-title"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] p-6 shadow-2xl"
            dir={isAr ? "rtl" : "ltr"}
          >
            <button
              type="button"
              onClick={() => setShowChannelModal(false)}
              className="absolute top-4 end-4 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              aria-label={isAr ? "إغلاق" : "Close"}
            >
              <CloseIcon />
            </button>

            <h2 id="channel-modal-title" className="text-lg font-bold mb-2 text-center">
              {isAr ? "كيف تريد إرسال الرسالة؟" : "How would you like to send?"}
            </h2>
            <p className="text-xs text-[var(--text-secondary)] text-center mb-6">
              {isAr
                ? "اختر الطريقة المناسبة لك — ستفتح في تبويب جديد."
                : "Pick the channel that suits you — it opens in a new tab."}
            </p>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => sendVia("email")}
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold border border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--text-primary)] hover:border-[var(--navy-light)] transition-colors"
              >
                <MailIcon size={20} />
                {isAr ? "إرسال عبر البريد الإلكتروني" : "Send via Email"}
              </button>
              <button
                type="button"
                onClick={() => sendVia("whatsapp")}
                className="w-full inline-flex items-center justify-center gap-3 py-3.5 rounded-xl font-semibold text-white bg-[#25D366] hover:bg-[#1eb957] transition-colors"
              >
                <WhatsAppIcon size={20} />
                {isAr ? "إرسال عبر واتساب" : "Send via WhatsApp"}
              </button>
            </div>

            <p className="text-[10px] text-center text-[var(--text-muted)] mt-5">
              {isAr
                ? `الإيميل سيُرسَل إلى ${CONTACT_EMAIL} — واتساب إلى ${CONTACT_PHONE_DISPLAY}`
                : `Email goes to ${CONTACT_EMAIL} — WhatsApp to ${CONTACT_PHONE_DISPLAY}`}
            </p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
