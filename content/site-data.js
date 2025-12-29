/* Data file for the lab landing page.
 * Tip: Keep paths relative to index.html, e.g. "assets/img/xxx.jpg"
 */
window.SITE_DATA = {
  defaultLang: "zh",
  i18n: {
    zh: {
      labNameShort: "阿特兰大血液Lab",
      labName: "血液肿瘤与转化研究课题组",
      langToggle: "EN",
      nav: {
        research: "研究方向",
        team: "团队",
        publications: "论文",
        grants: "项目",
        platforms: "平台",
        news: "动态",
        join: "加入我们",
        contact: "联系",
        menu: "菜单",
      },
      hero: {
        badge: "Hematology • Oncology • Translational",
        subtitle:
          "以临床问题为牵引，聚焦血液肿瘤发生发展、耐药与免疫微环境，融合单细胞与多组学，推动可转化的机制与生物标志物发现。",
        ctaPrimary: "了解研究方向",
        ctaSecondary: "招生与加入",
        panelTitle: "研究概览",
        panelNote: "这里的数字与条目均为占位示例，你可以在 `content/site-data.js` 中直接替换。",
      },
      research: {
        title: "研究方向",
        subtitle: "从疾病机制到临床转化：以数据与实验闭环验证为核心。",
      },
      platforms: {
        title: "平台与技术",
        subtitle: "单细胞、多组学、流式与功能实验协同，支撑转化研究。",
      },
      team: {
        title: "团队",
        subtitle: "多学科交叉：临床、免疫、计算与转化。",
      },
      pubs: {
        title: "论文与成果",
        subtitle: "精选代表性工作（占位示例）；可按年份扩展与维护。",
      },
      grants: {
        title: "项目与基金",
        subtitle: "以临床与转化需求为导向的长期研究布局。",
      },
      news: {
        title: "动态",
        subtitle: "组会、论文、学术交流与成员成长（占位示例）。",
      },
      gallery: {
        title: "图片墙",
        subtitle: "替换为合照、实验记录、显微与血涂片图像（建议 1200px 宽以上）。",
      },
      join: {
        title: "加入我们",
        subtitle: "欢迎对血液肿瘤与转化研究感兴趣的同学加入。",
        howToTitle: "如何快速替换内容",
      },
      howto: {
        step1: "打开 `content/site-data.js`，替换中英文案与列表。",
        step2: "将头像/图片放到 `assets/img/`，再更新数据中的图片路径。",
        step3: "双击 `index.html` 即可预览；若你想从 `site-data.json` 读取，请用本地服务器启动（例如 `python -m http.server`）。",
      },
      contact: {
        title: "联系方式",
        subtitle: "合作与交流请联系（占位示例）。",
        mapTitle: "地图",
        mapNote: "这里可以嵌入学校/医院地图或高德/百度地图截图。",
      },
      footer: {
        note: "本页面为静态站点模板，可自由修改与部署。",
        backToTop: "返回顶部",
      },
    },
    en: {
      labNameShort: "Hematology Oncology Lab",
      labName: "Hematology Oncology & Translational Research Lab",
      langToggle: "中文",
      nav: {
        research: "Research",
        team: "Team",
        publications: "Publications",
        grants: "Grants",
        platforms: "Platforms",
        news: "News",
        join: "Join Us",
        contact: "Contact",
        menu: "Menu",
      },
      hero: {
        badge: "Hematology • Oncology • Translational",
        subtitle:
          "Driven by unmet clinical needs, we study hematologic malignancies with a focus on tumor evolution, resistance, and immune microenvironment. We integrate single-cell and multi-omics to enable translational discoveries.",
        ctaPrimary: "Explore Research",
        ctaSecondary: "Open Positions",
        panelTitle: "At a Glance",
        panelNote: "All numbers and items below are placeholders. Edit them in `content/site-data.js`.",
      },
      research: {
        title: "Research",
        subtitle: "From mechanism to translation, with a tight data–experiment validation loop.",
      },
      platforms: {
        title: "Platforms",
        subtitle: "Single-cell, multi-omics, flow cytometry, and functional assays.",
      },
      team: {
        title: "Team",
        subtitle: "Interdisciplinary: clinical, immunology, computation, and translation.",
      },
      pubs: {
        title: "Publications",
        subtitle: "Selected representative work (placeholders); easy to expand by year.",
      },
      grants: {
        title: "Grants",
        subtitle: "Long-term research programs oriented to clinical and translational needs.",
      },
      news: {
        title: "News",
        subtitle: "Meetings, papers, talks, and people updates (placeholders).",
      },
      gallery: {
        title: "Gallery",
        subtitle: "Replace with group photos, experiments, microscopy, and blood smear images.",
      },
      join: {
        title: "Join Us",
        subtitle: "We welcome motivated trainees interested in translational hematology-oncology.",
        howToTitle: "How to update content quickly",
      },
      howto: {
        step1: "Open `content/site-data.js` and replace text/lists in both languages.",
        step2: "Put avatars/images under `assets/img/`, then update image paths in the data file.",
        step3:
          "Double-click `index.html` to preview. If you prefer loading from `site-data.json`, run a local server (e.g. `python -m http.server`).",
      },
      contact: {
        title: "Contact",
        subtitle: "For collaborations and inquiries (placeholders).",
        mapTitle: "Map",
        mapNote: "You can embed a campus/hospital map or a screenshot from your map provider.",
      },
      footer: {
        note: "This is a static template you can freely customize and deploy.",
        backToTop: "Back to top",
      },
    },
  },

  keywords: {
    zh: ["AML/ALL/MM", "单细胞与多组学", "免疫微环境", "耐药机制", "克隆演化", "转化标志物"],
    en: ["AML/ALL/MM", "Single-cell & Multi-omics", "Immune microenvironment", "Drug resistance", "Clonal evolution", "Translational biomarkers"],
  },

  metrics: {
    zh: [
      { value: "3+", label: "重点疾病方向" },
      { value: "6+", label: "核心技术模块" },
      { value: "10+", label: "精选论文/成果" },
      { value: "长期", label: "临床-转化闭环" },
    ],
    en: [
      { value: "3+", label: "Disease areas" },
      { value: "6+", label: "Core platforms" },
      { value: "10+", label: "Selected outputs" },
      { value: "Long-term", label: "Bench-to-bedside loop" },
    ],
  },

  research: {
    zh: [
      {
        title: "肿瘤发生发展与克隆演化",
        desc: "整合患者队列与单细胞/多组学数据，解析肿瘤克隆结构与演化轨迹，寻找关键驱动事件。",
        tags: ["Single-cell", "Multi-omics", "Clonal evolution"],
      },
      {
        title: "耐药与复发机制",
        desc: "围绕靶向与免疫治疗的耐药，研究适应性改变与微环境互作，并验证可干预靶点。",
        tags: ["Resistance", "Functional validation", "Translation"],
      },
      {
        title: "免疫微环境与免疫治疗",
        desc: "刻画免疫生态位与免疫逃逸机制，优化细胞治疗与联合策略的生物学基础。",
        tags: ["Immune", "Flow cytometry", "Cell therapy"],
      },
      {
        title: "生物标志物与分层诊疗",
        desc: "建立从发现到验证的标志物管线，支持预后分层、疗效预测与动态监测。",
        tags: ["Biomarker", "Cohort", "Clinical utility"],
      },
      {
        title: "肿瘤-微环境互作网络",
        desc: "通过空间/单细胞与功能实验，解析细胞通讯与代谢/炎症通路在疾病中的作用。",
        tags: ["Cell-cell communication", "Spatial", "Metabolism"],
      },
      {
        title: "数据科学与可重复研究",
        desc: "构建标准化分析流程与可重复计算框架，促进跨队列整合与稳定结论产出。",
        tags: ["Pipelines", "Reproducibility", "Integration"],
      },
    ],
    en: [
      {
        title: "Tumor initiation and clonal evolution",
        desc: "Integrate patient cohorts with single-cell and multi-omics to map clonal architecture and trajectories, pinpointing key drivers.",
        tags: ["Single-cell", "Multi-omics", "Clonal evolution"],
      },
      {
        title: "Resistance and relapse",
        desc: "Study adaptive changes and tumor–microenvironment interactions underlying resistance to targeted and immune therapies, with functional validation.",
        tags: ["Resistance", "Functional validation", "Translation"],
      },
      {
        title: "Immune microenvironment and immunotherapy",
        desc: "Characterize immune niches and escape mechanisms to inform rational combinations and cell-based therapies.",
        tags: ["Immunity", "Flow cytometry", "Cell therapy"],
      },
      {
        title: "Biomarkers and precision stratification",
        desc: "Build an end-to-end biomarker pipeline from discovery to validation for prognosis, response prediction, and longitudinal monitoring.",
        tags: ["Biomarker", "Cohort", "Clinical utility"],
      },
      {
        title: "Tumor–microenvironment interaction networks",
        desc: "Use spatial/single-cell profiling and functional assays to dissect cell–cell communication and key metabolic/inflammatory pathways.",
        tags: ["Cell communication", "Spatial", "Metabolism"],
      },
      {
        title: "Data science and reproducible research",
        desc: "Develop standardized workflows and reproducible computation to enable cross-cohort integration and robust conclusions.",
        tags: ["Pipelines", "Reproducibility", "Integration"],
      },
    ],
  },

  platforms: {
    zh: [
      { title: "单细胞转录组/ATAC", desc: "10x/多样本整合、细胞类型注释、轨迹与通讯分析。", tags: ["scRNA/scATAC", "Integration"] },
      { title: "流式与分选", desc: "免疫表型、功能检测与细胞亚群富集分选。", tags: ["FACS", "Phenotyping"] },
      { title: "多组学与队列", desc: "WES/RNA-seq/甲基化等，结合临床表型与随访信息。", tags: ["Cohort", "Multi-omics"] },
      { title: "空间与成像", desc: "空间转录组/成像质谱/多重免疫荧光等。", tags: ["Spatial", "Imaging"] },
      { title: "功能实验验证", desc: "基因编辑、药敏、共培养与体内模型验证。", tags: ["CRISPR", "In vivo"] },
      { title: "生信与可重复流程", desc: "容器化、流程管理与版本化，保障可重复性。", tags: ["Pipelines", "Reproducible"] },
    ],
    en: [
      { title: "Single-cell (RNA/ATAC)", desc: "Multi-sample integration, annotation, trajectories, and communication analyses.", tags: ["scRNA/scATAC", "Integration"] },
      { title: "Flow cytometry & sorting", desc: "Immune phenotyping, functional assays, and enrichment of key subpopulations.", tags: ["FACS", "Phenotyping"] },
      { title: "Multi-omics & cohorts", desc: "WES/RNA-seq/methylation with clinical phenotypes and follow-up.", tags: ["Cohort", "Multi-omics"] },
      { title: "Spatial & imaging", desc: "Spatial transcriptomics, multiplex IF, imaging-based profiling.", tags: ["Spatial", "Imaging"] },
      { title: "Functional validation", desc: "Gene perturbation, drug response, co-culture, and in vivo models.", tags: ["CRISPR", "In vivo"] },
      { title: "Bioinformatics workflows", desc: "Containerized, versioned pipelines for reproducible research.", tags: ["Pipelines", "Reproducible"] },
    ],
  },

  pi: {
    zh: {
      name: "张四教授",
      title: "PI｜血液内科/转化医学｜研究方向：血液肿瘤进化与免疫微环境",
      avatar: "assets/img/nailong.png",
      links: [
        { label: "Email: xxx@xxx.edu.cn", href: "mailto:xxx@xxx.edu.cn" },
        { label: "Google Scholar", href: "" },
        { label: "ORCID", href: "" },
      ],
    },
    en: {
      name: "Prof. XXX",
      title: "PI | Hematology/Translational Medicine | Tumor evolution & immune microenvironment",
      avatar: "assets/img/nailong.png",
      links: [
        { label: "Email: xxx@xxx.edu.cn", href: "mailto:xxx@xxx.edu.cn" },
        { label: "Google Scholar", href: "" },
        { label: "ORCID", href: "" },
      ],
    },
  },

  team: {
    zh: [
      {
        group: "博士后",
        people: [
          { name: "姓名 A", role: "博士后", focus: "单细胞与免疫微环境" },
          { name: "姓名 B", role: "博士后", focus: "耐药机制与功能验证" },
        ],
      },
      {
        group: "博士生",
        people: [
          { name: "姓名 C", role: "博士生", focus: "克隆演化与队列研究" },
          { name: "姓名 D", role: "博士生", focus: "空间组学与细胞通讯" },
          { name: "姓名 E", role: "博士生", focus: "生物标志物管线" },
        ],
      },
      {
        group: "硕士生/本科生",
        people: [
          { name: "姓名 F", role: "硕士生", focus: "流式与免疫表型" },
          { name: "姓名 G", role: "本科生", focus: "数据分析与可重复流程" },
        ],
      },
    ],
    en: [
      {
        group: "Postdocs",
        people: [
          { name: "Name A", role: "Postdoc", focus: "Single-cell and immune microenvironment" },
          { name: "Name B", role: "Postdoc", focus: "Resistance mechanisms and functional validation" },
        ],
      },
      {
        group: "PhD students",
        people: [
          { name: "Name C", role: "PhD", focus: "Clonal evolution and cohort studies" },
          { name: "Name D", role: "PhD", focus: "Spatial omics and cell communication" },
          { name: "Name E", role: "PhD", focus: "Biomarker pipelines" },
        ],
      },
      {
        group: "Master/Undergraduate",
        people: [
          { name: "Name F", role: "MSc", focus: "Flow cytometry and immune phenotyping" },
          { name: "Name G", role: "UG", focus: "Data analysis and reproducible workflows" },
        ],
      },
    ],
  },

  publications: {
    zh: [
      {
        year: "2025",
        title: "（占位）单细胞解析血液肿瘤免疫微环境并指导联合治疗策略",
        journal: "Nature Medicine (示例)",
        authors: "XXX*, YYY*, ZZZ",
        links: [{ label: "DOI", href: "" }],
      },
      {
        year: "2024",
        title: "（占位）克隆演化驱动耐药的机制与可干预节点",
        journal: "Blood (示例)",
        authors: "XXX, YYY, ZZZ",
        links: [{ label: "PubMed", href: "" }],
      },
      {
        year: "2023",
        title: "（占位）多组学队列研究实现分层诊疗的标志物发现",
        journal: "Leukemia (示例)",
        authors: "XXX, YYY",
        links: [{ label: "PDF", href: "" }],
      },
    ],
    en: [
      {
        year: "2025",
        title: "(Placeholder) Single-cell dissection of immune microenvironment in hematologic malignancies enables rational combinations",
        journal: "Nature Medicine (example)",
        authors: "XXX*, YYY*, ZZZ",
        links: [{ label: "DOI", href: "" }],
      },
      {
        year: "2024",
        title: "(Placeholder) Clonal evolution–driven resistance mechanisms and actionable vulnerabilities",
        journal: "Blood (example)",
        authors: "XXX, YYY, ZZZ",
        links: [{ label: "PubMed", href: "" }],
      },
      {
        year: "2023",
        title: "(Placeholder) Multi-omics cohort study reveals biomarkers for risk stratification",
        journal: "Leukemia (example)",
        authors: "XXX, YYY",
        links: [{ label: "PDF", href: "" }],
      },
    ],
  },

  grants: {
    zh: [
      { time: "2025–2028", title: "国家自然科学基金（占位）", desc: "聚焦血液肿瘤耐药与免疫微环境的转化研究。" },
      { time: "2024–2026", title: "省部级项目（占位）", desc: "单细胞多组学驱动的疾病分层与动态监测。" },
      { time: "2023–2025", title: "医院/学院重点项目（占位）", desc: "联合队列与功能实验的标志物验证平台。" },
    ],
    en: [
      { time: "2025–2028", title: "NSFC Grant (placeholder)", desc: "Translational studies on resistance and immune microenvironment in hematologic malignancies." },
      { time: "2024–2026", title: "Provincial/Ministerial Grant (placeholder)", desc: "Single-cell multi-omics for stratification and longitudinal monitoring." },
      { time: "2023–2025", title: "Institutional Key Program (placeholder)", desc: "Cohort + functional validation platform for biomarkers." },
    ],
  },

  news: {
    zh: [
      { date: "2025-12", type: "论文", title: "（占位）研究论文被接收", desc: "祝贺团队在血液肿瘤免疫微环境方向取得新进展。", tags: ["Paper", "Immune"] },
      { date: "2025-11", type: "学术交流", title: "（占位）受邀报告", desc: "在学术会议分享单细胞与转化研究工作。", tags: ["Talk", "Single-cell"] },
      { date: "2025-10", type: "组内活动", title: "（占位）组会与培训", desc: "开展流式与单细胞分析流程培训。", tags: ["Training", "Workflow"] },
    ],
    en: [
      { date: "2025-12", type: "Paper", title: "(Placeholder) Paper accepted", desc: "Congrats on new progress in immune microenvironment research.", tags: ["Paper", "Immunity"] },
      { date: "2025-11", type: "Talk", title: "(Placeholder) Invited talk", desc: "Sharing single-cell and translational work at a conference.", tags: ["Talk", "Single-cell"] },
      { date: "2025-10", type: "Group", title: "(Placeholder) Group meeting & training", desc: "Training session on flow cytometry and single-cell workflows.", tags: ["Training", "Workflow"] },
    ],
  },

  gallery: {
    zh: [
      { src: "", alt: "", caption: "组内合照（占位）", span: 7 },
      { src: "", alt: "", caption: "组会/讨论（占位）", span: 5 },
      { src: "", alt: "", caption: "流式散点图风格（占位）", span: 4 },
      { src: "", alt: "", caption: "血涂片/显微（占位）", span: 4 },
      { src: "", alt: "", caption: "实验记录（占位）", span: 4 },
      { src: "", alt: "", caption: "学术交流（占位）", span: 4 },
    ],
    en: [
      { src: "", alt: "", caption: "Group photo (placeholder)", span: 7 },
      { src: "", alt: "", caption: "Lab meeting (placeholder)", span: 5 },
      { src: "", alt: "", caption: "Flow plot style (placeholder)", span: 4 },
      { src: "", alt: "", caption: "Blood smear / microscopy (placeholder)", span: 4 },
      { src: "", alt: "", caption: "Bench work (placeholder)", span: 4 },
      { src: "", alt: "", caption: "Conference (placeholder)", span: 4 },
    ],
  },

  join: {
    zh: [
      {
        title: "我们在招",
        desc: "博士后、博士/硕士研究生、本科科研训练（根据实际情况修改）。",
        items: ["对血液肿瘤/免疫/单细胞/生信任一方向有强烈兴趣", "具备扎实基础与自驱力", "欢迎医学与理工科背景交叉"],
      },
      {
        title: "你将获得",
        desc: "",
        items: ["临床问题驱动的转化训练", "标准化的实验与分析流程", "论文写作与学术交流支持", "开放协作与共同成长的团队氛围"],
      },
    ],
    en: [
      {
        title: "Openings",
        desc: "Postdoc, PhD/MSc students, and undergraduate research trainees (edit as needed).",
        items: ["Strong interest in heme-onc / immunology / single-cell / bioinformatics", "Solid fundamentals and self-motivation", "Cross-disciplinary backgrounds are welcome"],
      },
      {
        title: "What you will gain",
        desc: "",
        items: ["Clinically motivated translational training", "Standardized experimental and computational workflows", "Support for writing and presentations", "Open, collaborative team culture"],
      },
    ],
  },

  contact: {
    zh: {
      title: "联系信息",
      desc: "合作交流、样本/数据共享与联合课题请邮件联系。",
      lines: ["邮箱：xxx@xxx.edu.cn", "地址：XXX 医院/学院，XX 市", "电话：+86-000-0000-0000"],
    },
    en: {
      title: "Contact info",
      desc: "For collaboration, data/sample sharing, and joint projects, please email us.",
      lines: ["Email: xxx@xxx.edu.cn", "Address: XXX Hospital/School, City", "Tel: +86-000-0000-0000"],
    },
  },
};


