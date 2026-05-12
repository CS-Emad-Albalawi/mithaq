// © 2026 Mithaq Technology. All Rights Reserved. | ميثاق للتقنية
// 5 categories that frame the project for the SDAIA / Tabuk Health
// Cluster / LinkedIn audience: About, Capabilities, Technical Approach,
// Development, and Engagement. Tone is confident and concrete — this is
// an active project, not a passive vision.
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useTranslation } from "@/i18n";
import { usePageTitle } from "@/hooks/usePageTitle";

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const categories = [
  {
    id: "about",
    labelAr: "عن ميثاق",
    labelEn: "About Mithaq",
    color: "#2E5A9E",
    questions: [
      {
        q: { ar: "ما هي منصة ميثاق؟", en: "What is the Mithaq platform?" },
        a: {
          ar: "ميثاق منصة لحوكمة البيانات السعودية مصمَّمة للجهات الخاضعة لأُطر NDMO و PDPL و NCA ECC وأخلاقيات SDAIA للذكاء الاصطناعي. تستهدف القطاعات الحكومية وشبه الحكومية والمالية والصحية والأكاديمية. ما تراه الآن عرضٌ تفصيلي للرؤية والقدرات؛ المنتج التشغيلي قيد التطوير النشط.",
          en: "Mithaq is a data governance platform purpose-built for Saudi entities subject to NDMO, PDPL, NCA ECC, and SDAIA AI-ethics frameworks. It targets the public, semi-government, financial, healthcare, and academic sectors. What you see now is a detailed presentation of the vision and capabilities; the operational product is in active development.",
        },
      },
      {
        q: { ar: "لمن صُمِّم ميثاق؟", en: "Who is Mithaq designed for?" },
        a: {
          ar: "أيّ جهة سعودية تحتاج إلى حوكمة بياناتها وفق الأُطر الوطنية: مؤسسات حكومية، جهات شبه حكومية، بنوك ومؤسسات مالية، تجمعات صحية، جامعات ومراكز أبحاث. التصميم يعتمد على قوالب القطاعات التي تكيِّف العرض حسب احتياجات الجهة، بما يدعم التعدُّد دون فقدان التخصيص.",
          en: "Any Saudi entity that needs to govern its data under national frameworks: government institutions, semi-government bodies, banks and financial institutions, healthcare clusters, universities, and research centres. The design uses Sector Templates that tailor the experience to each entity's needs, supporting breadth without losing specificity.",
        },
      },
      {
        q: { ar: "ما الفرق بين \"المنصة\" و\"البرنامج\"؟", en: "What is the difference between 'Platform' and 'Program'?" },
        a: {
          ar: "المنصة هي صفحة العرض الحالية التي تشرح الرؤية والقدرات بتصاميم تفصيلية. البرنامج هو المنتج التشغيلي الذي يُبنى الآن. الفصل واضح حتى يفهم كل زائر بدقّة ما هو متاح اليوم وما هو خارطة طريق عملية ملموسة.",
          en: "The Platform is this presentation page that explains the vision and capabilities through detailed mockups. The Program is the operational product being built right now. The split is deliberate so every visitor understands precisely what is available today vs what is on the concrete roadmap.",
        },
      },
    ],
  },
  {
    id: "capabilities",
    labelAr: "القدرات",
    labelEn: "Capabilities",
    color: "#3B82F6",
    questions: [
      {
        q: { ar: "ما الذي يقدّمه البرنامج التشغيلي؟", en: "What does the operational Program deliver?" },
        a: {
          ar: "خمسة محاور أساسية: (1) البصمة التنظيمية السعودية — تختصر وضع الجهة في سلسلة قابلة للقراءة آلياً، (2) ذاكرة الأنماط — تتعلَّم سلوك بياناتك مع الوقت، (3) المترجم التنظيمي الذكي — يربط بين الأُطر تلقائياً، (4) أمين — رفيق ذكاء اصطناعي للحوكمة، (5) لوحة الحوكمة بخمسة ألوان لإدارة المخاطر والامتثال. لكل محور صفحة تفصيلية ضمن قسم القدرات.",
          en: "Five core pillars: (1) Saudi Regulatory Fingerprint — condenses an entity's compliance posture into a machine-readable string, (2) Pattern Memory — learns your data behaviour over time, (3) Smart Regulatory Translator — bridges frameworks automatically, (4) Ameen — an AI governance companion, (5) Five-Colour Governance Dashboard for risk and compliance. Each pillar has its own deep page in the Capabilities section.",
        },
      },
      {
        q: { ar: "ما الأُطر التنظيمية التي يدعمها ميثاق؟", en: "Which regulatory frameworks does Mithaq support?" },
        a: {
          ar: "يدعم البرنامج التشغيلي الأُطر السعودية الرئيسية: NDMO (الهيئة الوطنية لإدارة البيانات)، PDPL (نظام حماية البيانات الشخصية)، NCA ECC (ضوابط الأمن السيبراني الأساسية)، إضافة إلى مرجعيات SDAIA لأخلاقيات الذكاء الاصطناعي. التغطية تشمل المتطلبات الفنية والإدارية لكلٍّ منها، مع ربط بيني ذكي عبر المترجم التنظيمي.",
          en: "The operational Program targets the principal Saudi frameworks: NDMO (National Data Management Office), PDPL (Personal Data Protection Law), NCA ECC (Essential Cybersecurity Controls), and SDAIA AI-ethics references. Coverage spans both technical and administrative requirements, with intelligent cross-mapping via the Regulatory Translator.",
        },
      },
      {
        q: { ar: "ما القطاعات المشمولة؟", en: "Which sectors are supported?" },
        a: {
          ar: "خمسة قطاعات رئيسية مع قوالب جاهزة: حكومي، شبه حكومي، صحي، مالي، أكاديمي. كل قطاع له تخصيصات في تصنيف البيانات، ضوابط الأمان، نماذج التقارير، ومسارات DSAR. الأولوية الحالية للجهات الحكومية والصحية الكبيرة، مع مرونة للتوسُّع لأي جهة أخرى تحتاج إلى حوكمة بياناتها.",
          en: "Five primary sectors come with ready-made templates: government, semi-government, healthcare, financial, academic. Each sector has bespoke settings for data classification, security controls, report templates, and DSAR workflows. Current priority is large government and healthcare entities, with the flexibility to extend to any other entity that needs data governance.",
        },
      },
    ],
  },
  {
    id: "technical",
    labelAr: "المنهج التقني",
    labelEn: "Technical Approach",
    color: "#10B981",
    questions: [
      {
        q: { ar: "هل يعمل ميثاق داخل شبكة المؤسسة فقط؟", en: "Does Mithaq work only within the organization's network?" },
        a: {
          ar: "نعم — صُمِّم البرنامج التشغيلي للعمل بالكامل داخل البنية التحتية للجهة (on-premise) دون اتصال خارجي. هذا متطلَّب جوهري للجهات الحكومية والمالية السعودية التي لا تستطيع نقل بياناتها عبر الحدود أو إلى خدمات سحابية عامة. الأدوات السحابية مثل Power BI Service و SaaS analytics غير مدعومة لتفادي عبور البيانات.",
          en: "Yes — the operational Program is designed to run entirely within the entity's infrastructure (on-premise), with no external connectivity. This is a hard requirement for Saudi government and financial entities that cannot transfer data across borders or to public cloud services. Cloud-bound tools like Power BI Service and SaaS analytics are not supported, precisely to avoid cross-border data flow.",
        },
      },
      {
        q: { ar: "كيف يتعامل ميثاق مع اللغة العربية؟", en: "How does Mithaq handle Arabic?" },
        a: {
          ar: "يعتمد البرنامج التشغيلي على نماذج معالجة لغة طبيعية مدرَّبة على المحتوى العربي السعودي تحديداً (AraBERT وأدوات نمذجة محلية)، مع دعم كامل لـRTL في الواجهة والتقارير. التصنيف الدلالي، البحث، فهم المحتوى التنظيمي، التقارير التلقائية — كلها مهيَّأة للعربية كأولوية لا كميزة ثانوية.",
          en: "The operational Program uses NLP models trained specifically on Saudi Arabic content (AraBERT plus locally fine-tuned models), with complete RTL support across the UI and reports. Semantic classification, search, regulatory-content understanding, and auto-generated reports are all designed with Arabic as a priority, not as a secondary feature.",
        },
      },
      {
        q: { ar: "هل أحتاج GPU لتشغيل الذكاء الاصطناعي؟", en: "Do I need a GPU to run the AI?" },
        a: {
          ar: "النماذج الخفيفة (التصنيف الأساسي ومطابقة الأنماط) تعمل على وحدات CPU حديثة. النماذج الأكبر (الرفيق الذكي \"أمين\" وفهم المحتوى التنظيمي العميق) تستفيد من GPU لكنها ليست متطلَّباً صارماً. التصميم يسمح بتدرّج البنية التحتية حسب حجم الجهة وحساسية زمن الاستجابة.",
          en: "Light models (basic classification and pattern matching) run on modern CPUs. Larger models (the Ameen AI companion and deep regulatory-content understanding) benefit from GPUs but are not a strict requirement. The design lets infrastructure scale with the entity's size and latency sensitivity.",
        },
      },
    ],
  },
  {
    id: "development",
    labelAr: "التطوير وخارطة الطريق",
    labelEn: "Development & Roadmap",
    color: "#F59E0B",
    questions: [
      {
        q: { ar: "في أي مرحلة من التطوير المشروع حالياً؟", en: "What stage of development is the project at?" },
        a: {
          ar: "المشروع قيد التطوير النشط. المنصة الحالية تعرض الرؤية والقدرات بتصاميم مكتملة وتفاعلية لكل محور — وهو ما يمكنك تصفُّحه ضمن قسم القدرات. البرنامج التشغيلي (المنتج الفعلي) في مرحلة بناء الـMVP.",
          en: "The project is in active development. The current platform showcases the vision and capabilities through complete, interactive mockups for each pillar — browseable in the Capabilities section. The operational Program (the actual product) is in MVP-build phase.",
        },
      },
    ],
  },
  {
    id: "contact",
    labelAr: "التواصل",
    labelEn: "Engagement",
    color: "#8B5CF6",
    questions: [
      {
        q: { ar: "ما طريقة التواصل؟", en: "How can I get in touch?" },
        a: {
          ar: "عبر صفحة التواصل. النموذج المتاح يُتيح إرسال رسالتك بالبريد الإلكتروني أو واتساب — اختر القناة الأنسب لك. الرسالة تنطلق من تطبيقك مباشرة (Gmail أو Mail أو WhatsApp) وتصل مباشرة دون أن تمرّ عبر خوادم وسيطة.",
          en: "Via the Contact page. The form lets you send a message by email or WhatsApp — pick whichever suits you. The message dispatches from your own app (Gmail, Mail, or WhatsApp) and arrives directly, without going through any intermediary servers.",
        },
      },
      {
        q: { ar: "ماذا يحدث بعد إرسال الرسالة؟", en: "What happens after I send a message?" },
        a: {
          ar: "تصلني الرسالة مباشرة وأردُّ عادةً خلال 24-48 ساعة. للأسئلة المفصَّلة، نُكمل النقاش عبر القناة الأنسب.",
          en: "The message reaches me directly and I usually reply within 24–48 hours. For detailed questions, we continue the conversation through whichever channel suits you best.",
        },
      },
    ],
  },
];

export default function FAQ() {
  const { isAr } = useTranslation();
  usePageTitle("الأسئلة الشائعة", "FAQ");
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered = categories
    .map((cat) => ({
      ...cat,
      questions: cat.questions.filter(
        (q) =>
          (activeCategory === "all" || cat.id === activeCategory) &&
          (search === "" ||
            (isAr ? q.q.ar : q.q.en).includes(search) ||
            (isAr ? q.a.ar : q.a.en).includes(search))
      ),
    }))
    .filter((cat) => cat.questions.length > 0);

  const totalQuestions = categories.reduce((s, c) => s + c.questions.length, 0);

  return (
    <div className="min-h-screen text-[var(--text-primary)]" dir={isAr ? "rtl" : "ltr"}>
      <Navbar />

      <main className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-16">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 text-[var(--text-primary)] heading-glow">
            {isAr ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
          </h1>
          <p className="text-base text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? `${totalQuestions} سؤال — موزَّعة على ${categories.length} فئات. المشروع قيد التطوير النشط.`
              : `${totalQuestions} questions across ${categories.length} categories. The project is in active development.`}
          </p>
        </header>

        {/* Search */}
        <div className="relative mb-6">
          <div className="absolute top-1/2 -translate-y-1/2 start-3 text-[var(--text-muted)]">
            <SearchIcon />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={isAr ? "ابحث في الأسئلة…" : "Search the FAQ…"}
            className="w-full ps-10 pe-3 py-3 rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] text-sm focus:outline-none focus:border-[var(--navy-primary)]"
          />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
              activeCategory === "all"
                ? "bg-[var(--navy-primary)] text-white border-[var(--navy-primary)]"
                : "bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--navy-light)]"
            }`}
          >
            {isAr ? "الكل" : "All"}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                activeCategory === cat.id
                  ? "text-white"
                  : "bg-transparent text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--navy-light)]"
              }`}
              style={
                activeCategory === cat.id
                  ? { background: cat.color, borderColor: cat.color }
                  : undefined
              }
            >
              {isAr ? cat.labelAr : cat.labelEn}
            </button>
          ))}
        </div>

        {/* Questions */}
        {filtered.length === 0 ? (
          <p className="text-center text-sm text-[var(--text-muted)] py-12">
            {isAr ? "لا توجد نتائج." : "No results."}
          </p>
        ) : (
          <div className="space-y-8">
            {filtered.map((cat) => (
              <section key={cat.id}>
                <h2
                  className="text-sm font-bold uppercase tracking-wide mb-3"
                  style={{ color: cat.color }}
                >
                  {isAr ? cat.labelAr : cat.labelEn}
                </h2>
                <div className="space-y-2">
                  {cat.questions.map((q, i) => (
                    <details
                      key={i}
                      className="rounded-xl border border-[var(--border-color)] bg-[var(--card-bg)] p-4 group"
                    >
                      <summary className="cursor-pointer text-sm font-semibold text-[var(--text-primary)] flex items-start gap-2 list-none">
                        <span className="flex-1">{isAr ? q.q.ar : q.q.en}</span>
                        <span className="text-[var(--text-muted)] group-open:rotate-180 transition-transform">▾</span>
                      </summary>
                      <p className="mt-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {isAr ? q.a.ar : q.a.en}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
