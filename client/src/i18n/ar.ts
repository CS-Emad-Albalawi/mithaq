// Arabic translations — Default language
export const ar = {
  // Navigation
  nav: {
    home: "الرئيسية",
    about: "عن ميثاق",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
  },

  // Hero — `badge` removed (Default.tsx no longer renders a pill
  // above the title; the icon+caption combo read as Raqib-era).
  hero: {
    title: "حوكمة بيانات أصيلة للمملكة العربية السعودية",
    subtitle: "ميثاق مشروع تقني سعودي قيد التطوير النشط، يُصمَّم لتمكين الجهات السعودية من حوكمة بياناتها وفق أُطر NDMO و PDPL و NCA ECC، عبر بنية تشغيل محلية بالكامل تحافظ على سيادة البيانات الوطنية.",
    cta: "تواصل معنا",
    ctaSecondary: "شاهد كيف يعمل",
    trust: "يدعم أُطر NDMO \u2022 PDPL \u2022 NCA ECC \u2022 SDAIA AI",
  },

  // Features — 9 strategic capabilities (5 core pillars + 4 supporting).
  // Surfaced on /about and on each /features/* deep page.
  features: {
    title: "قدرات ميثاق",
    fingerprint: {
      title: "البصمة التنظيمية السعودية",
      subtitle: "Saudi Regulatory Fingerprint",
      desc: "كل جهة تحصل على سلسلة قابلة للقراءة آلياً تختصر وضعها التنظيمي في سطر واحد: القطاع، حساسية البيانات، الأُطر الفاعلة، والضوابط المُهيمنة.",
    },
    patterns: {
      title: "ذاكرة الأنماط",
      subtitle: "Pattern Memory",
      desc: "البرنامج يتعلَّم سلوك بياناتك مع الوقت، ويكتشف الانحرافات قبل وقوعها، ويبني خطّ أساس متطوِّر للجهة دون تدخل يدوي.",
    },
    translator: {
      title: "المترجم التنظيمي الذكي",
      subtitle: "Smart Regulatory Translator",
      desc: "ربط بيني آلي بين أُطر NDMO و PDPL و NCA ECC — متطلَّب واحد يُنفَّذ في الأُطر الثلاثة دفعةً واحدة دون عمل مزدوج.",
    },
    ameen: {
      title: "أمين — الرفيق الذكي",
      subtitle: "Ameen — AI Companion",
      desc: "مساعد ذكاء اصطناعي للحوكمة يعمل محلياً بالكامل، يُجيب بالعربية على أسئلة الامتثال الدقيقة، ويُرشدك في القرارات الحرجة.",
    },
    colorDashboard: {
      title: "لوحة الحوكمة بخمسة ألوان",
      subtitle: "Five-Colour Governance Dashboard",
      desc: "خمس درجات لونية تختصر حالة الامتثال في لمحة واحدة بدلاً من 50 مؤشراً مبعثراً — قراءة فورية للمسؤولين على كل المستويات.",
    },
    classification: {
      title: "التصنيف التلقائي",
      subtitle: "Auto Classification",
      desc: "صنّف بياناتك تلقائياً وفق معايير NDMO الأربعة (سري للغاية، سري، مقيد، عام) مع تحقُّق سياقي يدعم اللغة العربية.",
    },
    pii: {
      title: "كشف البيانات الشخصية",
      subtitle: "Arabic-First PII Detection",
      desc: "اكتشف البيانات الحساسة في مجموعاتك مع دعم كامل لأنماط الهوية الوطنية والعنوان الموحَّد والسجل التجاري السعودية.",
    },
    lineage: {
      title: "تتبُّع مسار البيانات",
      subtitle: "Data Lineage",
      desc: "تتبَّع رحلة بياناتك من المصدر إلى التقرير على مستوى الأعمدة، وافهم تأثير أي تغيير قبل تطبيقه.",
    },
    onprem: {
      title: "تشغيل محلي بالكامل",
      subtitle: "Fully On-Premise",
      desc: "يعمل بالكامل داخل البنية التحتية للجهة، بدون اتصال خارجي — البيانات لا تغادر الحدود الوطنية في أي مرحلة.",
    },
  },

  // Pricing namespace removed — Mithaq is a brochure, no commercial
  // product to price. Any t("pricing.*") call left over will fall back
  // to the key path string, which is loud and obvious in dev.

  // Footer
  footer: {
    tagline: "حيث القانون يصبح ممارسة",
    platform: "المنصة",
    support: "الدعم",
    ai_disclosure:
      "كُتبت شيفرة هذه المنصة بالاستعانة بـ Claude Code من Anthropic، تحت إشراف المؤلف ومسؤوليته الكاملة عن المراجعة والقرار التصميمي والتدقيق التقني.",
  },

  // `req:` and `download:` namespaces removed — both fed pages that
  // no longer exist (Requirements + Download were SaaS-era).

  // Top informational banner (shown above all routes)
  banner: {
    message: "استكشف رؤيتنا لحوكمة البيانات السعودية. البرنامج التشغيلي قيد التطوير.",
  },

  // Feature-page mockups — shared chrome strings.
  featurePages: {
    common: {
      cta: "تواصل معنا",
      future_program: "البرنامج التشغيلي قيد التطوير — هذه الصفحة تعرض رؤية الميزة فقط.",
      mock_label: "MOCKUP — DEMO ONLY",
      back_home: "العودة للرئيسية",
    },
    fingerprint: {
      hero: "البصمة التنظيمية السعودية",
      intro:
        "كل جهة سعودية لها بصمة تنظيمية فريدة — مزيج من الأطر التي تخضع لها، مستوى حساسية بياناتها، وحدود مشاركة المعلومات. ميثاق يولِّد هذه البصمة كسلسلة قابلة للقراءة آلياً تختصر كل شيء في سطر واحد.",
      sample_label: "نموذج بصمة:",
      seg_prefix: "بادئة",
      seg_year: "السنة + الربع",
      seg_ndmo: "ضابط NDMO المُهيمن",
      seg_pdpl: "مادة PDPL ذات الصلة",
      seg_ecc: "ضابط NCA ECC",
      seg_sensitivity: "مستوى الحساسية (1-4)",
      seg_scope: "نطاق المشاركة (T = داخلي / E = خارجي / P = عام)",
      seg_checksum: "بصمة تحقُّق (CRC)",
      tech_heading: "الأسلوب التقني",
      tech_body:
        "تتركَّب البصمة من تحليل regex على الـmetadata + تصنيف سياقي بنموذج AraBERT للمحتوى العربي. التحقُّق من البصمة محلي بدون تواصل مع أي طرف خارجي.",
      regulatory: {
        ndmo_class: "تُرمِّز البصمة مستوى تصنيف البيانات وفق المعايير الأربعة (سرّي للغاية / سرّي / مقيَّد / عام).",
        ndmo_marking: "تُلصَق البصمة كعلامة قابلة للقراءة آلياً على كل أصل بياناتي، فتُلبّي متطلَّب الوسم.",
        pdpl_class: "تتضمَّن البصمة شريحة PDPL التي تُحدِّد المادة الأكثر هيمنة على معالجة هذا الأصل.",
        ecc_assets: "تُمكِّن البصمة من جرد الأصول وربطها بضوابط الحماية المناسبة آلياً.",
        sdaia_transparency: "البصمة قابلة للقراءة بشرياً — تكشف للمستخدم بوضوح ما الذي تحويه قاعدة البيانات.",
      },
    },
    patterns: {
      hero: "ذاكرة الأنماط السعودية",
      intro:
        "أنماط البيانات السعودية لا تُكتَشف بطريقة عامة — رقم الهوية الوطنية يبدأ بـ1 أو 2، الـIBAN السعودي بـSA + 22 رقم، أرقام السجلات الطبية لها صيغ خاصة. ميثاق يحفظ مكتبة هذه الأنماط ويتعرَّف عليها فوراً عند الفحص.",
      pattern_id_title: "الهوية الوطنية",
      pattern_id_regex: "^[12]\\d{9}$",
      pattern_id_desc: "10 أرقام، تبدأ بـ1 (مواطن) أو 2 (مقيم).",
      pattern_id_seen: "تُكتَشف في: التقارير الطبية، نماذج الجهات الحكومية",
      pattern_iban_title: "IBAN السعودي",
      pattern_iban_regex: "^SA\\d{22}$",
      pattern_iban_desc: "24 حرفاً، يبدأ بـSA + 22 رقم.",
      pattern_iban_seen: "تُكتَشف في: مرفقات بنكية، حوالات",
      pattern_mrn_title: "رقم السجل الطبي (MRN)",
      pattern_mrn_regex: "^MRN-\\d{5,7}$",
      pattern_mrn_desc: "بادئة MRN- + 5-7 أرقام.",
      pattern_mrn_seen: "تُكتَشف في: تقارير المستشفيات، نتائج المختبرات",
      pattern_plate_title: "لوحة سيارة",
      pattern_plate_regex: "^[\\u0600-\\u06FF]{3}\\s\\d{3,4}$",
      pattern_plate_desc: "3 أحرف عربية + مسافة + 3-4 أرقام.",
      pattern_plate_seen: "تُكتَشف في: نماذج المرور، تقارير الحوادث",
      tech_heading: "الأسلوب التقني",
      tech_body:
        "كل نمط مُجمَّع كـregex + قواعد سياقية. الفحص محلي بالكامل، لا تُرسَل العيِّنات لأي خدمة خارجية. مكتبة الأنماط تُحدَّث دورياً بإصدارات قابلة للتراجع.",
      regulatory: {
        pdpl_protection: "الكشف التلقائي للهوية الوطنية والـIBAN يُمكِّن الجهة من تطبيق ضوابط حماية إضافية قبل التخزين أو النقل.",
        pdpl_breach: "اكتشاف PII في موقع غير معتمد يُطلِق تنبيهاً فورياً يدخل ضمن مهلة الإخطار بالخرق (72 ساعة).",
        ndmo_quality: "أنماط البيانات السعودية (الهوية، MRN، اللوحات) تخضع لقواعد جودة محلية لا تكتشفها أدوات DLP عامة.",
        ecc_data: "الكشف القائم على الأنماط جزء أساسي من ضوابط حماية البيانات في الـECC.",
        sama_dlp: "للقطاع المصرفي، أنماط الـIBAN السعودي والأرقام الحساسة تدخل ضمن ضوابط منع تسرُّب البيانات.",
      },
    },
    translator: {
      hero: "الترجمة التنظيمية الذكية",
      intro:
        "نص قانوني واحد لا يُقرَأ بنفس الطريقة من رئيس تنفيذي وموظف خط أمامي ومواطن. ميثاق يأخذ النص الأصلي ويُعيد صياغته لأربعة جماهير بمفردات وتفاصيل مختلفة — دون تشويه المعنى القانوني.",
      source_label: "النص الأصلي (PDPL مادة 16):",
      source_text:
        "يلتزم المتحكِّم في البيانات بالحصول على موافقة صاحب البيانات الشخصية قبل معالجتها، إلا في الحالات التي تستوجبها مصلحة عامة أو يُسمح بها قانوناً.",
      tab_ceo: "للمدير التنفيذي",
      tab_dpo: "لمسؤول حماية البيانات",
      tab_employee: "للموظف",
      tab_citizen: "للمواطن",
      ceo_text:
        "قبل أي استخدام لبيانات شخصية، يجب أن يكون لديك توثيق رسمي لموافقة العميل. الاستثناءات تخضع لمراجعة قانونية وتوثَّق في سجل المعالجات.",
      dpo_text:
        "PDPL Art. 16 يُلزم المتحكِّم بتجميع موافقة قبل المعالجة، مع استثناءات: المصلحة العامة، التزام قانوني. وثِّق نوع الموافقة (صريحة / ضمنية) وسجِّلها في consentRecords.",
      employee_text:
        "قبل ما تستخدم بيانات شخصية لعميل، تأكد إنه وافق. ولو محتاج تستخدمها لسبب رسمي بدون موافقة، اسأل الـDPO قبل ما تكمل.",
      citizen_text:
        "إذا أرادت أي جهة استخدام بياناتك (اسمك، رقمك، عنوانك)، يجب أن تأخذ موافقتك أولاً. لك الحق ترفض، إلا في حالات خاصة محدَّدة بالنظام.",
      tech_heading: "الأسلوب التقني",
      tech_body:
        "النموذج محلي يعمل في-المملكة. الترجمة التنظيمية محرَّرة بشرياً ومُراجَعة قانونياً قبل العرض، ولا تستبدل الاستشارة المتخصصة.",
      regulatory: {
        pdpl_consent: "الموافقة الصريحة تتطلَّب لغة مفهومة لصاحب البيانات — المُترجِم يحوِّلها من نص قانوني إلى لغة المواطن.",
        pdpl_access: "حق الوصول يستلزم استجابة مكتوبة قابلة للفهم — المُترجِم يصيغ الردود بلغة الجمهور المعني.",
        ndmo_awareness: "متطلَّب التوعية في NDMO يفترض إنتاج مواد توعوية مخصَّصة لكل فئة — المُترجِم ينتجها آلياً.",
        ecc_training: "ضابط التدريب في الـECC يستلزم محتوى مفصَّل لكل دور وظيفي — يخدمه المُترجِم مباشرة.",
        sdaia_fairness: "الإنصاف في توصيل المعلومة لكل الفئات (تنفيذيين، موظفين، مواطنين) جزء من مبادئ SDAIA.",
      },
    },
    ameen: {
      hero: "أمين — الرفيق الذكي",
      intro:
        "أمين رفيق صحي ذكي يساعد الكوادر الميدانية في التعامل اليومي مع بيانات المرضى. تُرفع لقطة شاشة أو تكتب سؤالاً، وأمين يُرشِد للقناة الصحيحة قبل أن تتسرَّب البيانات.",
      conversation_title: "محادثة مثال",
      msg_user_1: "أعتقد أن لديّ صورة شاشة فيها بيانات مريض على الواتساب، ماذا أفعل؟",
      msg_ameen_1:
        "تواصل مع DPO الجهة فوراً. لا تحذف الصورة قبل توثيقها رسمياً — قد تحتاجها كدليل للتحقيق.",
      msg_user_2: "هل أستطيع إرسالها للمشرف عبر إيميل؟",
      msg_ameen_2:
        "لا تُرسلها عبر الإيميل العام. استخدم نظام HIS الرسمي للجهة، أو أرفقها في تذكرة helpdesk داخلية إن وُجدت.",
      msg_ameen_3:
        "ووثِّق الحادثة في سجل خروقات البيانات (لو الجهة عندها واحد) — هذا يساعد في الالتزام بـPDPL Art. 21.",
      sovereignty_title: "السيادة السعودية على البيانات",
      sovereignty_body:
        "أمين سيعمل في-المملكة بالكامل. لن تُرسَل أي بيانات لأي خدمة سحابية خارج السعودية. النموذج مُستضاف على بنية تحتية سعودية فقط.",
      tech_heading: "الأسلوب التقني",
      tech_body:
        "نموذج لغوي محلي مُدرَّب على PDPL + بروتوكولات الجهات الصحية. لا يصل لبيانات المريض الفعلية — فقط للنص الذي يكتبه المستخدم. لا يحفظ المحادثات بعد انتهاء الجلسة.",
      regulatory: {
        sdaia_transparency: "أمين يكشف صراحة عن كونه نموذج AI، ويُظهِر مصادر إجاباته من الأُطر التنظيمية المُستشهَد بها.",
        sdaia_privacy: "أمين يعمل بدون اتصال خارجي ولا يصل لبيانات المرضى الفعلية — فقط للنص الذي يكتبه المستخدم.",
        pdpl_protection: "أمين يمنع إرسال PII عبر القنوات غير الآمنة، ويُرشِد للقناة الرسمية بدلاً عنها.",
        ndmo_sovereignty: "النموذج مُستضاف على بنية تحتية سعودية فقط — السيادة الكاملة على بيانات الجهة.",
        ecc_ai: "أمين يلتزم بضوابط استخدام الـAI في الـECC — تسجيل القرارات، تقييد الصلاحيات، مراجعة دورية للنموذج.",
      },
    },
    color: {
      hero: "اللوحة الذكية بـ5 ألوان",
      intro:
        "بدلاً من 50+ مؤشر مبعثر، ميثاق يعرض الامتثال في 6 مجالات بخمس درجات واضحة: ممتاز، جيد، يحتاج انتباه، تحذير، حرج. مدير ينظر للوحة لـ3 ثوان ويعرف بدقة أين يضع وقته.",
      areas_title: "مجالات الامتثال الستة",
      area_identity_title: "الهوية والوصول",
      area_identity_state: "ممتاز",
      area_identity_desc: "إدارة هويات وصلاحيات (NCA ECC 2-2)",
      area_lifecycle_title: "دورة حياة البيانات",
      area_lifecycle_state: "جيد",
      area_lifecycle_desc: "احتفاظ + حذف (NDMO DG 2.3)",
      area_sharing_title: "مشاركة البيانات",
      area_sharing_state: "يحتاج انتباه",
      area_sharing_desc: "اتفاقيات مشاركة، تصدير (NDMO DS 4.1)",
      area_quality_title: "جودة البيانات",
      area_quality_state: "تحذير",
      area_quality_desc: "اكتمال + دقة (NDMO DQ 6.2)",
      area_privacy_title: "الخصوصية",
      area_privacy_state: "حرج",
      area_privacy_desc: "موافقات + DSAR (PDPL Art. 16)",
      area_security_title: "الأمن السيبراني",
      area_security_state: "ممتاز",
      area_security_desc: "تشفير + سجلات (NCA ECC 4.7)",
      legend_title: "مفتاح الألوان",
      legend_blue: "ممتاز — يفوق المتوقَّع",
      legend_green: "جيد — مُطابق",
      legend_yellow: "يحتاج انتباه — قريب من الحد",
      legend_orange: "تحذير — تحت الحد، إجراء مطلوب",
      legend_red: "حرج — خرق نشط أو مهلة منتهية",
      tech_heading: "الأسلوب التقني",
      tech_body:
        "خوارزمية اللون تجمع: نسبة الضوابط المُطبَّقة، عدد الانتهاكات الحديثة، عمر آخر تقييم، حساسية المنطقة. تتجدَّد ساعياً.",
      regulatory: {
        ndmo_reporting: "اللوحة تُقدِّم تقارير دورية بتنسيق NDMO المعتمَد، مع تنبيهات تلقائية عند التغيُّر.",
        ndmo_compliance: "تتبُّع لحظي لنسبة الامتثال لكل ضابط من ضوابط NDMO السبعة والثلاثين.",
        pdpl_reports: "اللوحة تُولِّد التقارير الربع سنوية المطلوبة من المتحكِّم في البيانات وفق المادة 31.",
        ecc_review: "مراجعة الامتثال للـECC تتطلَّب عرضاً موحَّداً لكل الضوابط — هذا ما تفعله اللوحة بخمسة ألوان.",
        sama_risk: "للقطاع المصرفي، اللوحة تُلبّي متطلَّبات المراقبة المستمرة للمخاطر التشغيلية والامتثال.",
      },
    },
  },

  // Smart Landing — sector selector + per-sector templates
  smartLanding: {
    selector: {
      heading: "ما القطاع الذي يخصّك؟",
      subheading: "اختر لتعرض المنصة محتوى مخصصاً لك",
      change_sector: "عودة",
      card_government: "حكومي",
      card_government_desc: "وزارات وهيئات وأمانات وبلديات",
      card_healthcare: "صحي",
      card_healthcare_desc: "تجمعات صحية ومستشفيات ومراكز رعاية أولية",
      card_financial: "مالي",
      card_financial_desc: "بنوك وشركات تأمين ومؤسسات مالية",
      card_academic: "أكاديمي",
      card_academic_desc: "جامعات ومراكز بحوث وكليات",
      card_skip: "تخطّي",
      card_skip_desc: "أكمل الزيارة بدون اختيار قطاع",
    },
    templates: {
      common: {
        cta_primary: "تواصل معنا",
        cta_secondary: "تواصل معنا",
        killer_badge: "MOCKUP — DEMO ONLY",
        future_program_disclaimer: "البرنامج التشغيلي قيد التطوير — المنصة تعرض الرؤية فقط",
      },
      government: {
        hero: "حوكمة بيانات المملكة بقلب سعودي",
        subtitle:
          "منصة مصمَّمة لمكاتب CDO الحكومية بمراعاة NDMO و PDPL — رؤية برنامج تشغيلي قيد التطوير.",
        killer_title: "لوحة الإشراف الوطنية",
        killer_subtitle: "National Supervisory Dashboard",
        killer_desc:
          "تُتيح لمكاتب CDO رؤية فورية لامتثال 200+ جهة عبر 523 ضابط NDMO + 32 مادة PDPL.",
        scenarios_heading: "كيف يخدم البرنامج الجهات الحكومية",
        scenario_1: {
          title: "خرق بيانات في جهة مُشرَف عليها",
          trigger: "موظف في وزارة فرعية يُحمِّل ملف Excel فيه أرقام هوية مواطنين على Google Drive شخصي.",
          response: "ميثاق يكتشف المخالفة آلياً عبر فاحص شبكة الجهة، يُغلق الوصول، يُولِّد إخطاراً للـDPO، ويبدأ سجل تدقيق برقم حادثة.",
          outcome: "تُلبَّى مهلة الإخطار بالخرق في PDPL (72 ساعة)، ويُوثَّق الحادث في سجل الجهة لمراجعة NDMO اللاحقة.",
        },
        scenario_2: {
          title: "مراجعة سنوية لـ NDMO عبر 200 جهة",
          trigger: "مكتب CDO الوطني يحتاج تقريراً موحَّداً لامتثال 200 جهة عبر 523 ضابط NDMO خلال 14 يوماً.",
          response: "ميثاق يجمع تلقائياً نتائج التقييم من كل جهة، يُولِّد خريطة حرارية موحَّدة، ويُحدِّد الجهات التي تحتاج تدخلاً عاجلاً.",
          outcome: "التقرير يُنجَز في 3 أيام بدلاً من 14، مع تفاصيل قابلة للتحقُّق على مستوى الضابط والجهة والمادة.",
        },
        scenario_3: {
          title: "طلب وصول مواطن لبياناته (DSAR)",
          trigger: "مواطن يطلب نسخة من بياناته الشخصية المُسجَّلة لدى أمانة المنطقة عبر بوابة المواطن.",
          response: "ميثاق يتتبَّع البيانات عبر 7 أنظمة داخلية، يُجمِّعها في تقرير PDF موقَّع رقمياً، ويتحقَّق من هوية الطالب عبر نفاذ.",
          outcome: "الطلب يُكتمل خلال 30 يوماً (الحد المنصوص عليه في PDPL م.12)، مع سجل تدقيق كامل قابل للتفتيش.",
        },
      },
      healthcare: {
        hero: "حماية بيانات المرضى وفق PDPL",
        subtitle:
          "أدوات حوكمة مصمَّمة للقطاع الصحي السعودي — تجمعات صحية، مستشفيات، مراكز رعاية أولية.",
        killer_title: "أمين — رفيق صحي ذكي",
        killer_subtitle: "Ameen — Healthcare Smart Companion",
        killer_desc:
          "يساعد الكوادر الصحية في التعامل اليومي مع بيانات المرضى — تنبيه عند PII، إرشاد للقنوات الرسمية.",
        scenarios_heading: "كيف يخدم البرنامج التجمعات الصحية",
        scenario_1: {
          title: "تسريب تقرير مريض عبر واتساب",
          trigger: "ممرضة ترفع لقطة شاشة لتقرير مريض على مجموعة واتساب طبية فيها 200+ عضو خارج المستشفى.",
          response: "أمين (الرفيق الذكي) يكتشف الـPII فوراً، ينبِّه الـDPO، يُرشِد الممرضة لاستخدام HIS الرسمي، ويُسجِّل الحادثة لتدقيق لاحق.",
          outcome: "تُمنَع الكارثة قبل وقوعها، ويتلقَّى فريق الرعاية تدريباً مستهدَفاً، ويُستوفى متطلَّب الوعي بـPDPL م.19.",
        },
        scenario_2: {
          title: "نقل بيانات مريض لباحث أكاديمي",
          trigger: "باحث طبي في جامعة محلية يطلب بيانات 5,000 مريض من مستشفى تجمعي لأغراض دراسة سريرية.",
          response: "ميثاق يُولِّد اتفاقية مشاركة بيانات تلقائية، يُجرِّد البيانات من الـPII (de-identification)، ويُحدِّد ضوابط الاحتفاظ والاستخدام.",
          outcome: "تُلبَّى متطلَّبات IRB ومركز الأخلاقيات الحيوية، وتُحفَظ خصوصية المرضى، ويستلم الباحث بيانات قابلة للاستخدام.",
        },
        scenario_3: {
          title: "استيراد ملفات من نظام EHR أجنبي",
          trigger: "تجمُّع صحي يستورد سجلات 50,000 مريض من نظام EHR قديم (Epic أو Cerner) بصيغ غير قياسية.",
          response: "ميثاق يصنِّف الحقول تلقائياً وفق NDMO، يُحدِّد PII، يُولِّد خريطة بصمات تنظيمية، ويربط كل حقل بالمواد التنظيمية المعنية.",
          outcome: "الاستيراد يتم وفق PDPL منذ اليوم الأول، مع سجل تتبُّع كامل لكل حقل، وجاهزية لمراجعة وزارة الصحة.",
        },
      },
      financial: {
        hero: "حوكمة البيانات المصرفية مع SAMA CSF",
        subtitle:
          "أدوات امتثال للبنوك والمؤسسات المالية السعودية — متماشية مع SAMA CSF و NCA ECC.",
        killer_title: "محرّك DSAR للقطاع المصرفي",
        killer_subtitle: "DSAR Engine for Banking",
        killer_desc:
          "يحوّل طلب عميل لبياناته (Right to Access) من رسالة بريد إلى تدفّق منظَّم: تحقّق، تجميع، تسليم.",
        scenarios_heading: "كيف يخدم البرنامج البنوك والمؤسسات المالية",
        scenario_1: {
          title: "طلب حقوق وصول لـ12,000 عميل",
          trigger: "بنك سعودي يستقبل 12,000 طلب DSAR في ربع واحد بعد حملة توعية SAMA — معالجة يدوية مستحيلة.",
          response: "محرِّك DSAR يُجمِّع تلقائياً البيانات من 14 نظاماً مصرفياً، يتحقَّق من هوية العميل عبر نفاذ، ويُولِّد تقرير PDF مشفَّر.",
          outcome: "كل طلب يُلبّى خلال 7 أيام عمل (الحد PDPL = 30 يوماً)، يوفِّر 2,400 ساعة بشرية، ويتجاوز متطلَّبات SAMA CSF.",
        },
        scenario_2: {
          title: "كشف تحويل مالي مشبوه عبر IBAN",
          trigger: "موظف في خدمة العملاء يُرسِل بالخطأ IBAN عميل في رد إيميل لعميل آخر — تسرُّب PII واضح.",
          response: "كشف الأنماط في ميثاق يلتقط الـIBAN فوراً، يُلغي إرسال الإيميل قبل وصوله، ويُنبِّه CISO ومسؤول الامتثال.",
          outcome: "يُمنَع التسرُّب، يُسجَّل في سجل الحوادث (NCA ECC 4.7)، ويُولَّد تقرير تدريب مستهدَف لقسم خدمة العملاء.",
        },
        scenario_3: {
          title: "تدقيق امتثال SAMA CSF السنوي",
          trigger: "فريق التدقيق الداخلي يحتاج إثبات الامتثال لـ 153 ضابط SAMA CSF خلال 4 أسابيع.",
          response: "ميثاق يجمع آلياً الأدلة من 8 أنظمة (أمن، شبكة، تطبيقات، قواعد بيانات)، يُولِّد تقريراً تنفيذياً، ويُحدِّد فجوات الامتثال.",
          outcome: "التقرير يُسلَّم في 5 أيام عمل، نسبة الامتثال موثَّقة بأدلة، وقائمة تحسينات قابلة للتنفيذ جاهزة للمجلس.",
        },
      },
      academic: {
        hero: "إدارة بيانات البحث الأكاديمي السعودي",
        subtitle:
          "حوكمة البيانات للجامعات ومراكز الأبحاث — IRB، أخلاقيات البحث، حماية بيانات الطلاب.",
        killer_title: "محرّك موافقات IRB",
        killer_subtitle: "IRB Approval Engine",
        killer_desc:
          "يُختصر مسار اعتماد بحث جديد من أسابيع إلى أيام — قوالب موافقات، خانات أخلاقيات، تتبّع الحالة.",
        scenarios_heading: "كيف يخدم البرنامج الجامعات ومراكز البحث",
        scenario_1: {
          title: "موافقة IRB لبحث سريري",
          trigger: "باحث في كلية الطب يُقدِّم طلب IRB لدراسة سريرية على 500 مريض — استمارة 23 صفحة، معالجة عادةً 6 أسابيع.",
          response: "محرِّك IRB في ميثاق يُحدِّد الفجوات تلقائياً، يولِّد قائمة مراجعة لجنة الأخلاقيات، ويُمرِّر الطلب لـ4 محطات مراجعة بالتوازي.",
          outcome: "الموافقة في 5 أيام عمل بدلاً من 6 أسابيع، مع توثيق كامل لقرارات الأخلاقيات وحوكمة البيانات.",
        },
        scenario_2: {
          title: "طالب يطلب حذف بياناته بعد التخرج",
          trigger: "خرِّيج جامعي يُرسِل طلباً عبر بوابة الخريجين لحذف بياناته الشخصية وفق حقه في PDPL م.13.",
          response: "ميثاق يحدِّد البيانات القابلة للحذف، يُبقي البيانات المُلزَمة قانونياً (شهادات، سجل أكاديمي)، ويُولِّد تقرير تنفيذ.",
          outcome: "يُلبّى الطلب خلال 21 يوماً، تُحفَظ السجلات القانونية المطلوبة، وتُرسَل للطالب رسالة تأكيد رسمية.",
        },
        scenario_3: {
          title: "مشاركة بيانات بحثية مع جامعة دولية",
          trigger: "مركز بحوث يحتاج مشاركة datasets طلابية مع جامعة كندية كجزء من تعاون أكاديمي معتمَد من وزارة التعليم.",
          response: "ميثاق يجرِّد البيانات من الـPII، يُولِّد اتفاقية نقل دولية وفق PDPL م.29، ويتطلَّب موافقات الطلاب المعنيين.",
          outcome: "المشاركة تتم بسيادة بيانات كاملة، الموافقات موثَّقة، والاتفاقية جاهزة لمراجعة مكتب الالتزام الجامعي.",
        },
      },
      default: {
        intro_heading: "حوكمة البيانات الذكية للمملكة العربية السعودية",
        intro_subtitle:
          "منصة ميثاق تعرض رؤية برنامج تشغيلي قيد التطوير لحوكمة البيانات في الجهات السعودية.",
        features_heading: "خمس ميزات ذكية تُميِّز ميثاق",
        feature_fingerprint_title: "البصمة التنظيمية",
        feature_fingerprint_desc: "نمط فريد لكل جهة يُعَرِّف وضعها التنظيمي.",
        feature_patterns_title: "ذاكرة الأنماط",
        feature_patterns_desc: "تعرّف فوري على أنماط البيانات الشائعة محلياً.",
        feature_translator_title: "المُترجِم التنظيمي",
        feature_translator_desc: "ترجمة المعايير لـ4 جماهير: قانوني، تقني، تنفيذي، عام.",
        feature_ameen_title: "أمين الرفيق الذكي",
        feature_ameen_desc: "يحلِّل لقطة شاشة مرفوعة ويُرشِد للقناة الصحيحة.",
        feature_color_title: "اللوحة الخماسية",
        feature_color_desc: "خمس درجات لونية تختصر حالة الامتثال في لمحة واحدة.",
      },
    },
    mockup: {
      watermark: "MOCKUP — DEMO ONLY",
      browser_url_government: "mithaq.dev/government",
      browser_url_healthcare: "mithaq.dev/healthcare",
      browser_url_financial: "mithaq.dev/financial",
      browser_url_academic: "mithaq.dev/academic",
    },
    mockups: {
      government: {
        dashboard_title: "لوحة الإشراف الوطنية",
        dashboard_subtitle: "Supervisory Dashboard",
        dashboard_stat_entities: "جهة مُشرَف عليها",
        dashboard_stat_controls: "ضابط NDMO",
        dashboard_stat_compliance: "نسبة الامتثال",
        dashboard_alerts_title: "أحدث التنبيهات",
        dashboard_alert_1: "جهة س-103 خالفت ضابط DG.2.1 — مهلة 7 أيام",
        dashboard_alert_2: "جهة س-058 رفعت تقرير امتثال ربع سنوي",
        dashboard_alert_3: "تنبيه ضوابط PDPL: مادة 12 تحتاج مراجعة في 14 جهة",
        heatmap_title: "خريطة امتثال الجهات",
        heatmap_subtitle: "Entity Compliance Heatmap",
        heatmap_legend_high: "عالٍ",
        heatmap_legend_mid: "متوسط",
        heatmap_legend_low: "منخفض",
        policygen_title: "مُولِّد السياسات",
        policygen_subtitle: "Policy Generator",
        policygen_field_framework: "الإطار",
        policygen_field_article: "المادة/الضابط",
        policygen_field_audience: "الجمهور",
        policygen_field_format: "الصيغة",
        policygen_preview_title: "معاينة:",
        policygen_preview_text:
          "وفقاً للمادة (5) من نظام حماية البيانات الشخصية، تلتزم الجهة بالحصول على الموافقة الصريحة...",
        timeline_title: "الجدول الزمني للتدقيق",
        timeline_subtitle: "Audit Timeline",
        timeline_event_1: "بدء تقييم الجهة س-201 — DG.1.1",
        timeline_event_2: "اكتمال مراجعة PDPL م. 12 — جهة س-088",
        timeline_event_3: "تنبيه: انتهاء مهلة معالجة DG.3.2 — جهة س-145",
        timeline_event_4: "اعتماد سياسة سرية بيانات — جهة س-058",
        timeline_event_5: "بدء التدقيق ربع سنوي — 12 جهة",
        timeline_event_6: "نشر تقرير امتثال NCA ECC للربع الأول",
      },
      healthcare: {
        dpo_title: "لوحة DPO الصحية",
        dpo_subtitle: "DPO Dashboard",
        dpo_stat_hospitals: "مستشفى",
        dpo_stat_phc: "مركز رعاية أولية",
        dpo_stat_beneficiaries: "مستفيد",
        dpo_action_dsar: "إدارة طلبات الوصول",
        dpo_action_breach: "بلاغ خرق بيانات",
        dpo_action_consent: "سجل الموافقات",
        dpo_action_audit: "تدقيق وصول العاملين",
        dpo_action_training: "تدريب فرق الرعاية",
        dsar_title: "تتبّع طلب وصول مريض",
        dsar_subtitle: "Patient DSAR View",
        dsar_step_request: "طلب",
        dsar_step_verify: "تحقّق هوية",
        dsar_step_process: "معالجة",
        dsar_step_deliver: "تسليم آمن",
        dsar_meta_patient: "المريض: أ. م.",
        dsar_meta_id: "رقم الطلب: DSAR-4521",
        dsar_meta_date: "تاريخ الطلب: 2026-04-12",
        ameen_title: "محادثة أمين",
        ameen_subtitle: "Ameen Conversation",
        ameen_msg_user_1: "رفعتُ لقطة شاشة لتقرير مريض، ماذا أفعل؟",
        ameen_msg_ameen_1: "اكتشفتُ أرقام هوية وتاريخ ميلاد. هذه بيانات شخصية حسّاسة. أنصح بـ:",
        ameen_msg_ameen_2: "1) عدم مشاركة اللقطة في القنوات العامة (واتساب، إيميل خارجي).",
        ameen_msg_ameen_3: "2) استخدام نظام HIS الرسمي لمشاركة الحالة بأرقام الملف فقط.",
        ameen_msg_user_2: "تمام، حذفت اللقطة من الواتساب. شكراً.",
        fingerprint_title: "بصمة وثيقة طبية",
        fingerprint_subtitle: "Medical Document Fingerprint",
        fingerprint_doc_title: "تقرير العيادة الخارجية",
        fingerprint_pii_id: "رقم هوية",
        fingerprint_pii_phone: "هاتف",
        fingerprint_pii_diagnosis: "تشخيص",
        fingerprint_classification: "تصنيف: مقيّد (Restricted)",
        fingerprint_pii_count_label: "عدد عناصر PII المكتشفة:",
      },
      financial: {
        ciso_title: "لوحة CISO المصرفية",
        ciso_subtitle: "CISO Dashboard",
        ciso_panel_incidents: "حوادث الأمن السيبراني",
        ciso_panel_controls: "ضوابط NCA ECC",
        ciso_panel_pii: "تعرّض PII",
        ciso_panel_sama: "امتثال SAMA CSF",
        dsar_title: "طلب وصول عميل",
        dsar_subtitle: "Customer DSAR",
        dsar_step_form: "نموذج",
        dsar_step_kyc: "KYC",
        dsar_step_compile: "تجميع",
        dsar_step_deliver: "تسليم",
        dsar_meta_customer: "العميل: ش. ق.",
        dsar_meta_id: "رقم الطلب: BANK-DSAR-1188",
        iban_title: "كشف أنماط IBAN",
        iban_subtitle: "IBAN Pattern Detection",
        iban_text:
          "تحويل من حساب SA03 8000 0000 6080 1016 7519 إلى حساب SA44 2000 0001 2345 6789 0123 لصالح ش. ق. بمبلغ 25,000 ر.س.",
        iban_highlight_label: "IBAN",
        iban_classification: "تصنيف: سرّي (Confidential)",
        report_title: "تقرير امتثال SAMA CSF",
        report_subtitle: "Compliance Report",
        report_meta_period: "الفترة: الربع الأول 2026",
        report_meta_score: "النتيجة الإجمالية: 92%",
        report_finding_1: "ضابط 3.3.1 (تشفير عند النقل): مُطبَّق ✓",
        report_finding_2: "ضابط 4.1.2 (إدارة الوصول): مُطبَّق جزئياً — توصية",
        report_finding_3: "ضابط 5.2.4 (الاحتفاظ): مُطبَّق ✓",
      },
      academic: {
        faculty_title: "لوحة عميد كلية البحوث",
        faculty_subtitle: "Faculty Dashboard",
        faculty_stat_projects: "بحث نشط",
        faculty_stat_students: "طالب باحث",
        faculty_stat_irb_pending: "موافقة IRB قيد المراجعة",
        faculty_stat_papers: "ورقة منشورة",
        irb_title: "تدفّق موافقة IRB",
        irb_subtitle: "IRB Approval Flow",
        irb_step_submit: "تقديم",
        irb_step_ethics: "أخلاقيات",
        irb_step_data: "حوكمة البيانات",
        irb_step_decision: "قرار",
        irb_meta_project: "المشروع: م-بحث-2026-088",
        irb_meta_pi: "الباحث الرئيسي: د. ل. ع.",
        student_dsar_title: "طلب وصول طالب",
        student_dsar_subtitle: "Student DSAR",
        student_dsar_meta_student: "الطالب: ع. م.",
        student_dsar_meta_id: "رقم الطلب: UNI-DSAR-204",
        student_dsar_step_request: "طلب",
        student_dsar_step_advisor: "اعتماد المرشد",
        student_dsar_step_data: "تجميع",
        student_dsar_step_deliver: "تسليم آمن",
        catalog_title: "كتالوج بيانات البحث",
        catalog_subtitle: "Research Data Catalog",
        catalog_col_project: "المشروع",
        catalog_col_dataset: "مجموعة البيانات",
        catalog_col_classification: "التصنيف",
        catalog_col_irb: "IRB",
        catalog_status_approved: "موافق",
        catalog_status_pending: "معلّق",
      },
    },
  },
} as const;

// Recursively convert all literal string values to `string` so en.ts can use its own strings
type DeepStringify<T> = {
  [K in keyof T]: T[K] extends string ? string : DeepStringify<T[K]>;
};

export type TranslationKeys = DeepStringify<typeof ar>;
