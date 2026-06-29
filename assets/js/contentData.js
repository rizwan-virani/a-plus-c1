/* ============================================================================
   a+ core 1  ::  contentData.js
   Exam facts, per-domain metadata + objectives, PBQ subject-topic badges,
   curated external resources, the Exam-Mechanics and Career-Guidance readers,
   and the domain reading content (APLUS1.reading[1..5], lazy-loaded from
   assets/js/content/domainN.js).

   A deliberate sister to the security+ and network+ platforms: identical
   architecture and aesthetic, CompTIA A+ Core 1 (220-1201) content.
   Authored by Professor Rizwan Virani.
   ========================================================================== */
window.APLUS1 = window.APLUS1 || {};

APLUS1.exam = {
  code: "220-1201",
  name: "CompTIA A+ Core 1",
  minutes: 90,
  maxQuestions: 90,
  scaleLow: 100, scaleHigh: 900, passing: 675,
  domains: 5,
  launched: "2025",
  retiredPredecessor: "220-1101"
};

/* Per-domain metadata. `objectives` mirror the official 220-1201 exam outline. */
APLUS1.domainMeta = [
  { id: 1, weight: 13, color: "d1", icon: "📱", title: "Mobile Devices", sectionCount: 14,
    short: "Laptop and mobile hardware: installing and configuring components, display technologies, accessories and ports, and basic mobile network and application connectivity.",
    objectives: [
      { id: "1.1", t: "Given a scenario, install and configure laptop hardware and components" },
      { id: "1.2", t: "Compare and contrast the display components of mobile devices" },
      { id: "1.3", t: "Given a scenario, set up and configure accessories and ports of mobile devices" },
      { id: "1.4", t: "Given a scenario, configure basic mobile-device network connectivity and application support" }
    ] },
  { id: 2, weight: 23, color: "d2", icon: "🌐", title: "Networking",
    short: "Ports and protocols, networking hardware, wireless standards, services provided by networked hosts, SOHO network setup, configuration concepts, Internet connection types, and networking tools.",
    sectionCount: 18,
    objectives: [
      { id: "2.1", t: "Compare and contrast TCP and UDP ports, protocols, and their purposes" },
      { id: "2.2", t: "Compare and contrast common networking hardware" },
      { id: "2.3", t: "Compare and contrast protocols for wireless networking" },
      { id: "2.4", t: "Summarize services provided by networked hosts" },
      { id: "2.5", t: "Given a scenario, install and configure basic wired/wireless SOHO networks" },
      { id: "2.6", t: "Compare and contrast common network configuration concepts" },
      { id: "2.7", t: "Compare and contrast Internet connection types, network types, and their features" },
      { id: "2.8", t: "Given a scenario, use networking tools" }
    ] },
  { id: 3, weight: 25, color: "d3", icon: "🔧", title: "Hardware",
    short: "The largest knowledge domain: cables and connectors, RAM, storage devices and RAID, motherboards/CPUs/add-on cards, power supplies, and multifunction devices, printers, and consumables.",
    sectionCount: 20,
    objectives: [
      { id: "3.1", t: "Explain basic cable types and their connectors, features, and purposes" },
      { id: "3.2", t: "Given a scenario, install the appropriate RAM" },
      { id: "3.3", t: "Given a scenario, select and install storage devices" },
      { id: "3.4", t: "Given a scenario, install and configure motherboards, CPUs, and add-on cards" },
      { id: "3.5", t: "Given a scenario, install or replace the appropriate power supply" },
      { id: "3.6", t: "Given a scenario, deploy and configure multifunction devices/printers and settings" },
      { id: "3.7", t: "Given a scenario, install and replace printer consumables" }
    ] },
  { id: 4, weight: 11, color: "d4", icon: "☁", title: "Virtualization & Cloud Computing",
    short: "Cloud-computing models and characteristics (IaaS/PaaS/SaaS, deployment models, shared responsibility) and client-side virtualization (hypervisors, requirements, and use cases such as sandboxing).",
    sectionCount: 10,
    objectives: [
      { id: "4.1", t: "Summarize cloud-computing concepts" },
      { id: "4.2", t: "Summarize aspects of client-side virtualization" }
    ] },
  { id: 5, weight: 28, color: "d5", icon: "🩺", title: "Hardware & Network Troubleshooting",
    short: "The biggest exam domain: the best-practice troubleshooting methodology, and resolving problems with motherboards/RAM/CPU/power, storage and RAID, displays, mobile devices, printers, and wired/wireless networks.",
    sectionCount: 18,
    objectives: [
      { id: "5.1", t: "Given a scenario, apply the best practice methodology to resolve problems" },
      { id: "5.2", t: "Given a scenario, troubleshoot problems related to motherboards, RAM, CPU, and power" },
      { id: "5.3", t: "Given a scenario, troubleshoot and diagnose problems with storage drives and RAID arrays" },
      { id: "5.4", t: "Given a scenario, troubleshoot video, projector, and display issues" },
      { id: "5.5", t: "Given a scenario, troubleshoot common issues with mobile devices" },
      { id: "5.6", t: "Given a scenario, troubleshoot and resolve printer issues" },
      { id: "5.7", t: "Given a scenario, troubleshoot problems with wired and wireless networks" }
    ] }
];

/* The five PBQ formats, badged by their true operational subject topic. */
APLUS1.pbqFormats = [
  { id: 1, icon: "🔌", domainColor: 2, obj: "2.1", badge: "PORTS & PROTOCOLS", title: "Ports & Protocols Matching",
    desc: "Match each service to its correct port number and transport protocol (TCP/UDP) — the highest-yield memorization on Core 1.",
    long: "For each requirement, select the correct <b>port number</b>, the correct <b>transport protocol</b> (TCP/UDP), and the correct <b>service/use</b>. Master the must-know ports: FTP 20/21, SSH 22, Telnet 23, SMTP 25, DNS 53, DHCP 67/68, HTTP 80, HTTPS 443, RDP 3389, and more." },
  { id: 2, icon: "🧠", domainColor: 3, obj: "3.2 / 3.3", badge: "RAM, STORAGE & RAID", title: "RAM, Storage & RAID Selection",
    desc: "Choose the correct memory and storage for a build: DDR generation and form factor, drive type and interface, and the right RAID level for the requirement.",
    long: "Configure the build field by field: the correct <b>RAM</b> (DDR4/DDR5, DIMM vs SO-DIMM, ECC, channels), the correct <b>storage</b> (SSD/HDD, SATA vs NVMe, M.2 vs 2.5\"), and the correct <b>RAID level</b> (0, 1, 5, 10) for the redundancy/performance requirement." },
  { id: 3, icon: "🧵", domainColor: 3, obj: "3.1", badge: "CABLES & CONNECTORS", title: "Cables & Connectors Identification",
    desc: "Identify the correct cable type and connector for a scenario — networking, peripheral, video, and storage cabling and their connectors and speeds.",
    long: "For each connection, choose the correct <b>cable type</b> (Cat6/6a, fiber, coax, USB-C/Thunderbolt, HDMI/DisplayPort, SATA, Lightning), the correct <b>connector</b> (RJ45, RJ11, LC/SC, F-type), and the correct <b>capability</b> (speed, distance, power) for the requirement." },
  { id: 4, icon: "🏠", domainColor: 2, obj: "2.5 / 2.6", badge: "SOHO NETWORK", title: "SOHO Network Configuration",
    desc: "Set up a small office/home office network: IP addressing, DHCP and DNS, wireless channels and security, and basic router settings.",
    long: "Configure the SOHO network: the correct <b>IP address / subnet / gateway</b>, <b>DHCP</b> scope and reservations, <b>DNS</b>, the <b>wireless</b> channel/band and <b>security</b> (WPA2/WPA3), and router features (port forwarding, SSID) to deliver a working, secure network." },
  { id: 5, icon: "🩺", domainColor: 5, obj: "5.1", badge: "TROUBLESHOOTING", title: "Troubleshooting Triage",
    desc: "Apply the six-step methodology and diagnose hardware/network symptoms — pick the most likely cause and the correct next step or fix.",
    long: "Work the problem like a technician: order the <b>six troubleshooting steps</b>, read the <b>symptom</b> (POST beeps, no display, drive failure, no connectivity, printer fault), identify the <b>most likely cause</b>, and choose the correct <b>next action</b> or fix — always changing one thing at a time." }
];

/* Curated free study resources. */
APLUS1.resources = [
  { icon: "🎥", title: "Professor Messer — Free A+ 220-1201 Course", host: "professormesser.com",
    url: "https://www.professormesser.com/free-a-plus-training/220-1201/220-1201-video/220-1201-training-course/",
    desc: "The complete, free video course covering every 220-1201 objective, plus monthly live study groups, practice questions, and downloadable course notes." },
  { icon: "📄", title: "Official CompTIA A+ Core 1 Objectives (PDF)", host: "comptia.org",
    url: "https://www.comptia.org/en-us/certifications/a/core-1-v15/",
    desc: "The authoritative exam outline for 220-1201 — every objective and sub-bullet CompTIA can test. Download the objectives PDF and use it as your master checklist." },
  { icon: "🔌", title: "Common Ports Cheat Sheet (must-memorize)", host: "professormesser.com",
    url: "https://www.professormesser.com/network-plus/n10-009/n10-009-video/common-network-ports-n10-009/",
    desc: "The TCP/UDP ports A+ Core 1 expects you to know cold (21, 22, 23, 25, 53, 67/68, 80, 110, 143, 443, 3389, and more). Drill these with the Ports & Protocols PBQs here." },
  { icon: "👥", title: "r/CompTIA — Community Wiki & Study Guides", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/wiki/index/",
    desc: "Crowd-sourced study plans, exam-day experiences, and the well-known community guides. Read recent “passed Core 1” posts for current question-style intel." },
  { icon: "🛠", title: "PC Building & Hardware (PCPartPicker)", host: "pcpartpicker.com",
    url: "https://pcpartpicker.com/",
    desc: "Get hands-on with real components — CPUs, RAM, storage, motherboards, PSUs. Building (or speccing) a PC makes the Hardware domain stick far better than memorizing." },
  { icon: "🧭", title: "r/CompTIA A+ Study Group", host: "reddit.com/r/CompTIA",
    url: "https://www.reddit.com/r/CompTIA/",
    desc: "Active community for A+ candidates — accountability, resource sharing, and answers to the “is this on the exam?” questions that come up while you study." }
];

/* ---- Reader: Exam Mechanics card ---- */
APLUS1.examMechanics = [
  { heading: "Two exams, one certification", body:
    "<p><strong>CompTIA A+ requires passing two separate exams</strong> — <strong>Core 1 (220-1201)</strong> and <strong>Core 2 (220-1202)</strong>. You earn the A+ certification only after passing both; this platform covers <strong>Core 1</strong>. The two exams can be taken in either order and on different days, but both must be passed within three years of each other.</p>" +
    "<p>Core 1 (220-1201) is a single exam of <strong>up to 90 questions</strong> in <strong>90 minutes</strong>, delivered at a Pearson VUE testing center or via OnVUE online proctoring. Because the count is a <em>maximum</em>, some forms have fewer scored items, and CompTIA seeds unscored beta questions you cannot identify — so treat every question as if it counts.</p>" +
    "<div class='callout exam'><div class='lbl'>Exam tip</div>Core 1 leans heavily on <strong>hardware, networking, and troubleshooting</strong> (Domain 3 + Domain 5 alone are over half the exam). If your background is light on physical hardware, weight your study there.</div>" },
  { heading: "Question styles: multiple choice, drag-and-drop, and PBQs", body:
    "<p>Core 1 mixes <strong>multiple-choice</strong> items (single- and multiple-response) with <strong>drag-and-drop</strong> matching and <strong>performance-based questions (PBQs)</strong> — interactive tasks such as matching ports to protocols, selecting the right RAM or RAID level, identifying cables and connectors, configuring a SOHO router, or working a troubleshooting scenario. PBQs typically appear first, are worth more, and consume more time.</p>" +
    "<ul><li>Read the <strong>last sentence first</strong> — it usually contains the real ask (“which connector…”, “what should the technician do <em>first</em>…”).</li><li><strong>Multiple-response</strong> items tell you how many to choose; you must get all of them right.</li><li><strong>PBQs</strong> usually allow partial credit — complete every field you can, even if unsure of one.</li></ul>" +
    "<div class='callout'><div class='lbl'>Strategy</div>Use the <strong>flag-and-review</strong> workflow: first pass, answer everything you know and flag the rest; second pass, spend the remaining time only on flagged items. A slow PBQ should never cost you easy multiple-choice points.</div>" },
  { heading: "Scoring: the 100–900 scale", body:
    "<p>Core 1 is scored on a <strong>scaled range of 100 to 900</strong>, and the passing score is <strong>675</strong>. Scaled scoring is not a simple percentage: CompTIA weights items by difficulty and equates across forms, so you cannot reverse-engineer a “number correct” from 675, and the raw-to-scaled mapping is not published.</p>" +
    "<p>There is <strong>no penalty for guessing</strong> — an unanswered question is simply wrong — so never leave an item blank. Eliminate obviously wrong options, make your best choice, flag it if unsure, and move on.</p>" +
    "<blockquote>This platform's mock exam reports a scaled score using a transparent linear approximation of the 100–900 band. Use it as a <em>relative</em> readiness signal — “am I trending toward 675?” — not as a literal prediction of your official score.</blockquote>" },
  { heading: "Eligibility, cost, and renewal", body:
    "<p>There are <strong>no formal prerequisites</strong>, but CompTIA recommends about <strong>12 months</strong> of hands-on experience in an IT support / help-desk role. A+ is the recommended starting point of the CompTIA pathway, before Network+ and Security+.</p>" +
    "<p>The exam voucher cost varies by region (commonly in the US$390+ range). Academic and bundle discounts exist — ask your institution. There may also be funding available for a free voucher. Connect with the Program Director or your professor for more information about funding opportunities.</p>" +
    "<p>The A+ certification is valid for <strong>three years</strong> and renews through CompTIA's <strong>Continuing Education (CE)</strong> program, or automatically when you earn a higher CompTIA certification such as Network+ or Security+.</p>" },
  { heading: "Exam-day logistics", body:
    "<p>Bring two forms of ID; for online proctoring, show a clear workspace, a working webcam, and a stable connection. You cannot use notes, phones, or smartwatches. A simple on-screen whiteboard or provided scratch material may be available — use it to jot the <strong>port numbers</strong>, <strong>RAID levels</strong>, and the <strong>six troubleshooting steps</strong> you'll otherwise lose under pressure.</p>" +
    "<div class='callout scenario'><div class='lbl'>Mindset</div>Core 1 rewards <strong>technician fundamentals</strong> — knowing your ports, cables, RAM, storage, and a disciplined troubleshooting method. Most questions are answerable by applying those fundamentals to the scenario in front of you.</div>" }
];

/* ---- Reader: Career Guidance card ---- */
APLUS1.careerGuidance = [
  { heading: "Where A+ sits on the ladder", body:
    "<p><strong>CompTIA A+ is the foundational, vendor-neutral IT certification</strong> — for most people, it is the very first cert they earn and the formal start of an IT career. It validates that you can support, configure, and troubleshoot end-user hardware, operating systems, networks, and security at a help-desk / desktop-support level.</p>" +
    "<p>On the CompTIA core pathway, A+ comes <em>before</em> <strong>Network+</strong> (networking depth) and <strong>Security+</strong> (security fundamentals). Many employers list A+ as a <em>required</em> or <em>preferred</em> qualification for entry IT roles, and it is widely recognized by hiring managers as proof you can be trusted with a ticket queue on day one.</p>" },
  { heading: "What Core 1 proves you can do", body:
    "<p>Core 1 specifically validates the <strong>hardware, networking, and troubleshooting</strong> half of the technician skill set. It proves you can:</p>" +
    "<ul>" +
    "<li><strong>Work with hardware</strong> — identify and install RAM, storage, CPUs, power supplies, and add-on cards, and choose the right cables and connectors.</li>" +
    "<li><strong>Support mobile devices</strong> — install laptop components, configure displays and accessories, and set up mobile connectivity.</li>" +
    "<li><strong>Understand networking</strong> — know ports and protocols, networking hardware, wireless standards, and how to set up and configure a SOHO network.</li>" +
    "<li><strong>Grasp virtualization and cloud</strong> — cloud models and client-side virtualization basics.</li>" +
    "<li><strong>Troubleshoot methodically</strong> — apply a structured six-step method to hardware, display, printer, and network faults.</li>" +
    "</ul>" +
    "<div class='callout exam'><div class='lbl'>Why it matters</div>These are the literal daily tasks of help-desk and desktop-support technicians. A+ tells an employer you can do them without hand-holding.</div>" },
  { heading: "Roles A+ opens", body:
    "<p>A+ aligns with the most common entry points into IT:</p>" +
    "<ul>" +
    "<li><strong>Help Desk / Service Desk Technician</strong> — first-line support, ticket triage, and end-user troubleshooting.</li>" +
    "<li><strong>Desktop Support Technician</strong> — imaging, deploying, and repairing workstations and peripherals.</li>" +
    "<li><strong>Field Service / IT Support Technician</strong> — on-site hardware installs, repairs, and break-fix.</li>" +
    "<li><strong>IT Support Specialist</strong> — broad first/second-line support across hardware, OS, and basic networking.</li>" +
    "<li><strong>Technical Support / Customer Support (IT)</strong> — supporting products and users with a technical foundation.</li>" +
    "</ul>" },
  { heading: "Building the path beyond A+", body:
    "<p>Treat A+ as the launch point of a career, not a destination. A common trajectory: <em>A+ → help-desk/desktop experience → Network+ → Security+</em>, then a specialization (cloud, cybersecurity, networking, or systems administration). Earning Network+ or Security+ later also <strong>auto-renews your A+</strong>.</p>" +
    "<div class='callout scenario'><div class='lbl'>Practical advice</div>Pair the cert with <strong>hands-on practice</strong> — build or upgrade a PC, set up a home router, swap RAM and storage, and work real tickets if you can. Employers hire A+ holders who can actually put hands on hardware, not just recite specs.</div>" }
];

/* Reading content lazy-loads from assets/js/content/domainN.js (APLUS1.reading[N]);
   flashcard decks lazy-load from content/flashN.js (APLUS1.flash[N]). */
APLUS1.reading = APLUS1.reading || {};
APLUS1.flash = APLUS1.flash || {};
