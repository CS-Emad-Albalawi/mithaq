// About.tsx — repositioned for the portfolio framing: an active
// data-governance project in development, not a registered company.
// Stats and "we" / "MENA leader" language reworked to be honest about
// the project's status while still confident about its design.
import {
  Fingerprint,
  Brain,
  Languages,
  Sparkles,
  Palette,
  Layers,
  ShieldAlert,
  GitBranch,
  Server,
  Cpu,
  UserCheck,
  FileCheck,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslation } from "@/i18n";
import { usePageTitle } from "@/hooks/usePageTitle";

// 9 strategic capabilities (5 core pillars + 4 supporting). Moved
// here from CommonSections so /about acts as the single page that
// covers the whole project — Home is now reserved for the sector
// picker and sector-specific previews only.
const FEATURES: ReadonlyArray<{ key: string; Icon: LucideIcon }> = [
  { key: "fingerprint",    Icon: Fingerprint  },
  { key: "patterns",       Icon: Brain        },
  { key: "translator",     Icon: Languages    },
  { key: "ameen",          Icon: Sparkles     },
  { key: "colorDashboard", Icon: Palette      },
  { key: "classification", Icon: Layers       },
  { key: "pii",            Icon: ShieldAlert  },
  { key: "lineage",        Icon: GitBranch    },
  { key: "onprem",         Icon: Server       },
] as const;

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const TargetIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
const EyeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--navy-light)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
  </svg>
);

export default function About() {
  const { t, isAr } = useTranslation();
  usePageTitle("عن ميثاق", "About Mithaq");

  // Frameworks the operational Program is designed to cover — these
  // describe scope, not certifications the platform has been audited
  // against.
  const frameworkBadges = [
    { label: "PDPL", desc: isAr ? "نظام حماية البيانات الشخصية" : "Personal Data Protection Law" },
    { label: "NDMO", desc: isAr ? "الإطار الوطني لإدارة البيانات" : "National Data Management Framework" },
    { label: "NCA ECC", desc: isAr ? "الضوابط الأساسية للأمن السيبراني" : "Essential Cybersecurity Controls" },
    { label: "SDAIA AI", desc: isAr ? "أخلاقيات الذكاء الاصطناعي" : "AI Ethics Reference" },
  ];

  // Honest design-derived numbers — no fabricated test counts or
  // marketing percentages.
  const stats = [
    { value: "4", label: isAr ? "أُطر تنظيمية مُغطّاة" : "Frameworks Covered" },
    { value: "5", label: isAr ? "قطاعات سعودية" : "Saudi Sectors" },
    { value: "5", label: isAr ? "محاور قدرات أساسية" : "Core Capability Pillars" },
    { value: "On-Prem", label: isAr ? "تشغيل محلي بالكامل" : "Fully On-Premise" },
  ];

  // Design principles, not feature claims — phrased so they describe
  // what the operational Program is built around, not what has shipped.
  const principles = [
    {
      icon: <ShieldIcon />,
      title: isAr ? "بنية تحتية للجهة" : "Entity-Owned Infrastructure",
      desc: isAr
        ? "البرنامج مُصمَّم للعمل على موارد الجهة بالكامل — البيانات لا تغادر بيئتها الداخلية في أي مرحلة."
        : "The Program is designed to run entirely on the entity's resources — data never leaves its internal environment at any stage.",
    },
    {
      icon: <GlobeIcon />,
      title: isAr ? "ذكاء اصطناعي محلي" : "Local AI",
      desc: isAr
        ? "نماذج تعمل محلياً بدون أي اتصال خارجي، مع تركيز على دعم اللغة العربية كأولوية."
        : "Models run locally with no external connectivity required, with Arabic-language support as a first-class priority.",
    },
    {
      icon: <TargetIcon />,
      title: isAr ? "تصميم وفق الأُطر السعودية" : "Saudi-Frameworks-Native Design",
      desc: isAr
        ? "مُصمَّم منذ البداية وفق متطلبات NDMO و PDPL و NCA ECC، لا مكيَّفاً لها لاحقاً."
        : "Designed from the start to the requirements of NDMO, PDPL, and NCA ECC — not retrofitted to them.",
    },
    {
      icon: <EyeIcon />,
      title: isAr ? "واجهة عربية أولاً" : "Arabic-First Interface",
      desc: isAr
        ? "RTL كامل، نمذجة لغوية للنصوص العربية السعودية، وتقارير بصياغة عربية احترافية."
        : "Full RTL, language models fine-tuned for Saudi Arabic content, and reports in professional Arabic prose.",
    },
    {
      icon: <ShieldIcon />,
      title: isAr ? "نشر مرن" : "Flexible Deployment",
      desc: isAr
        ? "مُهيَّأ ليتدرّج مع حجم الجهة، من إعدادات أقل تعقيداً إلى بنية موزَّعة."
        : "Built to scale from low-complexity setups to a fully distributed footprint, sized to the entity.",
    },
  ];

  return (
    <div className="min-h-screen text-[var(--text-primary)]" dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 pt-28 pb-16">
        {/* Hero — the small "عن ميثاق" pill above the title was dropped
            because the title underneath says exactly the same thing.
            The title now carries the layered text-shadow that hugs the
            wordmark next to the logo: bright white inner edge + mid
            navy halo + outer soft glow. Reads as one cohesive brand
            voice across the navbar logo, the homepage hero, and here. */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[var(--text-primary)] heading-glow">
            {isAr ? "عن ميثاق" : "About Mithaq"}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? "ميثاق مشروع تقني سعودي قيد التطوير النشط، متخصص في حوكمة البيانات للجهات الخاضعة لأُطر NDMO و PDPL و NCA ECC. مصمَّم ليُلبّي احتياجات القطاع الحكومي وشبه الحكومي والمالي والصحي والأكاديمي في المملكة العربية السعودية."
              : "Mithaq is a Saudi technical project in active development, focused on data governance for entities subject to the NDMO, PDPL, and NCA ECC frameworks. It is designed to serve the needs of the public, semi-government, financial, healthcare, and academic sectors in Saudi Arabia."}
          </p>
        </div>

        {/* Stats — design-derived, not fabricated */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14 p-6 rounded-2xl border border-[var(--border-color)] bg-[var(--bg-surface)]">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-bold text-[var(--navy-light)] mb-1">{s.value}</div>
              <div className="text-sm text-[var(--text-secondary)]">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-14">
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--border-color)]/50"><TargetIcon /></div>
              <h2 className="text-xl font-bold heading-glow">{isAr ? "المهمّة" : "Mission"}</h2>
            </div>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              {isAr
                ? "يهدف ميثاق إلى تمكين الجهات السعودية من حوكمة بياناتها وفق أُطر NDMO و PDPL و NCA ECC، بحلول تشغيلية محلية بالكامل تحافظ على سيادة البيانات وتُلائم الواقع السعودي لا تستورده."
                : "Mithaq aims to enable Saudi entities to govern their data under the NDMO, PDPL, and NCA ECC frameworks through fully on-premise operational solutions that preserve data sovereignty and are designed for — not retrofitted to — the Saudi context."}
            </p>
          </div>
          <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--border-color)]/50"><EyeIcon /></div>
              <h2 className="text-xl font-bold heading-glow">{isAr ? "الرؤية" : "Vision"}</h2>
            </div>
            <p className="leading-relaxed text-[var(--text-secondary)]">
              {isAr
                ? "أن يكون ميثاق نموذجاً عملياً لكيفية بناء حلول حوكمة بيانات أصيلة للبيئة السعودية، بما يخدم أهداف رؤية 2030 في الاقتصاد الرقمي وسيادة البيانات الوطنية."
                : "For Mithaq to serve as a practical reference for what native Saudi data-governance solutions look like — supporting Vision 2030 goals in the digital economy and national data sovereignty."}
            </p>
          </div>
        </div>

        {/* Capabilities — 9 strategic pillars (5 core + 4 supporting).
            Used to live on every page via CommonSections; now lives
            here so /about is the single, comprehensive overview and
            Home keeps its focus on the sector picker. */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-center mb-2 heading-glow">
            {t("features.title")}
          </h2>
          <p className="text-sm text-[var(--text-secondary)] text-center mb-8">
            {isAr
              ? "تسعة محاور تختصر ما يقدِّمه البرنامج التشغيلي عند اكتمال التطوير"
              : "Nine pillars that distil what the operational Program will deliver"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURES.map(({ key, Icon }) => (
              <Card
                key={key}
                className="bg-[var(--bg-surface)] border-[var(--border-color)] hover:border-[var(--navy-primary)] transition-colors"
              >
                <CardContent className="p-5 space-y-2">
                  <Icon className="w-7 h-7 text-[var(--navy-light)]" strokeWidth={1.5} />
                  <h3 className="text-base font-semibold text-[var(--text-primary)]">
                    {t(`features.${key}.title`)}
                  </h3>
                  <p className="text-xs text-[var(--navy-light)] font-medium">
                    {t(`features.${key}.subtitle`)}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    {t(`features.${key}.desc`)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Frameworks Covered — equal-width pills in a 4-column grid.
            flex-wrap left the orphan SDAIA AI badge alone in row 2
            with a different width from the others, so the grid
            (which forces uniform cell widths regardless of content)
            reads more deliberate. */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 heading-glow">{isAr ? "الأُطر المُغطّاة" : "Frameworks Covered"}</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              {isAr
                ? "البرنامج مُصمَّم ليتوافق مع الأُطر التنظيمية السعودية الرئيسية"
                : "The Program is designed to align with the principal Saudi regulatory frameworks"}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {frameworkBadges.map((b) => (
              <div
                key={b.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs border border-[var(--border-color)] bg-[var(--bg-surface)] text-[var(--text-secondary)]"
              >
                <ShieldIcon />
                <span className="font-semibold text-[var(--text-primary)] shrink-0">{b.label}</span>
                <span className="truncate">— {b.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Design Principles — flex-wrap with fixed half-width cards
            and justify-center, so when there are 5 items (odd count)
            the trailing card is centred alone on the last row
            instead of sitting orphaned on the left. */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold text-center mb-8 heading-glow">{isAr ? "مبادئ التصميم" : "Design Principles"}</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            {principles.map((p) => (
              <div
                key={p.title}
                className="flex gap-4 p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] w-full md:w-[calc(50%-12px)]"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[var(--border-color)]/50 shrink-0">{p.icon}</div>
                <div>
                  <h3 className="font-semibold mb-2">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Authorship & Tooling — explicit AI disclosure. Saudi
            regulatory frameworks (especially SDAIA AI Ethics) place
            a strong emphasis on transparency about AI involvement.
            Surfacing this proactively isn't just honest — it's
            aligned with the very governance principles the Program
            is designed to enforce. Three short cards: human author,
            AI tooling, the boundary between them. */}
        <section className="mb-14">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2 heading-glow">
              {isAr ? "التأليف والأدوات" : "Authorship & Tooling"}
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
              {isAr
                ? "إفصاح صريح: كيف بُنيت هذه المنصة، ومن المسؤول عن كل قرار فيها. الأمانة الفكرية مبدأ تصميمي قبل أن تكون متطلَّباً تنظيمياً."
                : "An explicit disclosure: how this platform was built and who is responsible for every decision in it. Intellectual honesty is a design principle here, not just a regulatory requirement."}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            <div className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
              <UserCheck className="w-7 h-7 text-[var(--navy-light)] mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold mb-2 text-[var(--text-primary)]">
                {isAr ? "المؤلف البشري" : "Human Author"}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {isAr
                  ? "عماد البلوي — بكالوريوس علوم حاسب، جامعة الأمير فهد بن سلطان. مسؤول عن الرؤية، والمعمارية، والقرارات التصميمية، ومراجعة كل سطر شيفرة قبل دمجه."
                  : "Emad Albalawi — BSc Computer Science, Prince Fahd bin Sultan University. Responsible for the vision, architecture, design decisions, and review of every line of code before it is merged."}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
              <Cpu className="w-7 h-7 text-[var(--navy-light)] mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold mb-2 text-[var(--text-primary)]">
                {isAr ? "أدوات الذكاء الاصطناعي" : "AI Tooling"}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {isAr
                  ? "Claude Code من Anthropic أداة برمجة استخدمها المؤلف لتسريع كتابة شيفرة الواجهة الأمامية واختبارها وتنسيق وثائق التصميم — تحت إشراف بشري كامل في كل خطوة."
                  : "Anthropic's Claude Code is a coding assistant the author used to accelerate front-end implementation, testing, and design-doc formatting — under full human supervision at every step."}
              </p>
            </div>
            <div className="p-6 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)]">
              <FileCheck className="w-7 h-7 text-[var(--navy-light)] mb-3" strokeWidth={1.5} />
              <h3 className="font-semibold mb-2 text-[var(--text-primary)]">
                {isAr ? "حدود المسؤولية" : "Responsibility Boundary"}
              </h3>
              <p className="text-xs leading-relaxed text-[var(--text-secondary)]">
                {isAr
                  ? "كل قرار معماري، وكل تفصيل تنظيمي، وكل صياغة عربية، مرَّت بمراجعة المؤلف وتدقيقه. المسؤولية النهائية عن أي مخرج تقع على المؤلف، لا على الأداة."
                  : "Every architectural decision, every regulatory detail, and every Arabic phrasing was reviewed and approved by the author. Final responsibility for any output sits with the author — not with the tool."}
              </p>
            </div>
          </div>
          <p className="text-xs text-[var(--text-muted)] text-center mt-6 max-w-3xl mx-auto leading-relaxed">
            {isAr
              ? "هذا الإفصاح متوافق مع المبادئ التوجيهية لـ SDAIA لأخلاقيات الذكاء الاصطناعي — تحديداً مبدأ الشفافية (Transparency) ومبدأ المساءلة (Accountability)."
              : "This disclosure aligns with the SDAIA AI Ethics Guidelines — specifically the Transparency and Accountability principles."}
          </p>
        </section>

        {/* Contact block removed — the Navbar exposes /contact on
            every page and the Contact page itself carries the email
            + WhatsApp affordance. Duplicating those here pushed the
            About page to surface the operator's contact details
            three times in three different places. */}
      </div>

      <Footer />
    </div>
  );
}
