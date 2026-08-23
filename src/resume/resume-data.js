
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const data = {
  name: 'MD AHTEAR RAHMAN',
  title: 'Senior Principal Software Engineer (Full-Stack | C#.NET | React | Angular)',
  skillsLine: 'C# .NET 9/10 | ASP.NET Core | Minimal APIs | Microservices | YARP | EF Core | Redis | System Design | Clean Architecture | CQRS | Event-Driven (Kafka/RabbitMQ/MassTransit) | OAuth2/JWT | MS SQL/SQL Azure | Azure | Docker | K8s | React | Angular | TypeScript | Azure DevOps CI/CD | OpenTelemetry | TDD (xUnit) | <span class="fw-bold">AI-Driven Engineering (Claude | Copilot | Gemini | ChatGPT)</span>',
  experienceYears: 10,
  experience: 'More than 10 years.',
  contacts: [
    { label: 'Cell', value: '+8801728706930, +8801516162081(whatsApp)' },
    { label: 'Email', value: 'Atik0172870@gmail.com, Atik017287069@gmail.com' },
    { label: 'LinkedIn', value: 'md-ahtear-rahman-b8043a15a', href: 'https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/' },
    { label: 'GitHub', value: 'github.com/Atik0172870', href: 'https://github.com/Atik0172870' },
    { label: 'Portfolio', value: 'atik0172870.github.io/ahtear-resume', href: 'https://atik0172870.github.io/ahtear-resume/' },
  ],
  summary: 'Senior Full-Stack Engineer with 10+ years architecting enterprise .NET microservices, cloud ecosystems, and high-throughput systems. Currently driving fintech automation at BRAC Bank PLC, with a strong track record of engineering US-based IoT security products and UK legal tech platforms. Specialized in C# .NET 9/10, Clean Architecture, Kafka/RabbitMQ, Azure, Docker, and React/Angular.',
  keyAchievements: [
    '<span class="fw-bold">40% faster loan approvals</span> — digitized BRAC Bank\'s paper-based loan processing end-to-end.',
    '<span class="fw-bold">35% lower API latency</span> — re-architected event messaging with Kafka, MassTransit & Redis caching.',
    '<span class="fw-bold">50% higher throughput</span> — migrated a legacy monolith to event-driven microservices at Napco.',
    '<span class="fw-bold">99.9% uptime</span> — sustained banking-portal reliability via resilience patterns & secure token auth.',
  ],
  technologies: [
    { label: 'Back-End', value: 'C#.NET (9/10), ASP.NET Core, Web API, Microservices, Ocelot, YARP, EF Core, RabbitMQ, Kafka' },
    { label: 'Architecture', value: 'Clean Architecture, CQRS, MediatR, DDD, SOLID, event-driven messaging, resilience patterns, SignalR' },
    { label: 'Data & Caching', value: 'MS SQL Server, SQL Azure, Oracle 11g, MySQL, PostgreSQL, MongoDB, Redis, stored procedures' },
    { label: 'Cloud & DevOps', value: 'Azure DevOps CI/CD, Azure Functions, Service Bus, Docker, Kubernetes, Minikube' },
    { label: 'Testing & Observability', value: 'xUnit, NUnit, Postman, Swagger, Serilog, Application Insights, OpenTelemetry' },
    { label: 'Client-Side', value: 'ReactJs, Angular, TypeScript, JavaScript, HTML5, Tailwind, CSS3/SASS, Bootstrap5' },
    { label: 'Tooling', value: 'Visual Studio, VS Code, GitHub, Bitbucket, Azure DevOps. <span class="fw-bold">AI-Driven Engineering(Claude | Gemini | Copilot | ChatGPT)</span> for development and code review.' },
  ],
  personalProjects: [
    { name: 'AI-DB-Chat', href: 'https://github.com/Atik0172870/AI-DB-Chat', description: 'AI-powered chat app (Gemini/Ollama) turning voice & text into structured reports.' },
    { name: 'Microservices-Kafka-ECommerce (.NET 8)', href: 'https://github.com/Atik0172870/Microservices-with-Kafka-ECommerce-Example-.NET-8-', description: 'Event-driven order, product & payment services over Kafka.' },
    { name: 'ApiGateway-Ocelot-JWT', href: 'https://github.com/Atik0172870/ApiGetwayWithOcelotAndJWT', description: 'Ocelot API gateway with JWT auth, load balancing & request aggregation.' },
    { name: 'AI Workflow Automation (SME)', href: 'https://github.com/Atik0172870/AI-Powered-Workflow-Automation-Platform-for-SMEs-', description: 'React app automating SME approvals & notifications with AI.' },
  ],
  experienceEntries: [
    {
      role: 'Senior Principal Software Engineer (Manager) | BRAC Bank PLC',
      dateRange: '17/08/2025 – Present | Dhaka, Bangladesh',
      company: 'Brac Bank PLC.',
      companyLinks: [{ text: 'bracbank.com', href: 'https://www.bracbank.com/' }],
      infoLines: ['<span class="fw-bold">Core Projects:</span> Astha (Retail Banking), Digital Desk, Shubidha (Digital Loan Platform).'],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        '<span class="fw-semibold">Domain:</span> Enterprise fintech — digital banking, loan and document automation.',
        '<span class="fw-semibold">System Architecture:</span> Architected scalable Astha & Shubidha microservices on ASP.NET Core (9/10), YARP and Clean Architecture.',
        '<span class="fw-semibold">Business Automation:</span> Digitized paper-based loan processing end-to-end, cutting approval turnaround time by 40%.',
        '<span class="fw-semibold">Performance & Scalability:</span> Built Kafka/MassTransit event messaging with Redis caching, cutting API latency 35% under peak load.',
        '<span class="fw-semibold">Resilience & Security:</span> Applied Retry/Circuit Breaker (Polly) patterns and JWT/OAuth2 auth, sustaining 99.9% uptime across banking portals.',
        '<span class="fw-semibold">Full-Stack Delivery:</span> Led React & Angular integration for a responsive UI serving million-plus banking users.',
        '<span class="fw-semibold">Team Leadership:</span> Lead and mentor a cross-functional engineering team, driving architecture decisions, code reviews and sprint delivery.',
        '<span class="fw-semibold">Tech Stack:</span> C# .NET 9/10, ASP.NET Core, Microservices, YARP, Kafka, MassTransit, EF Core, Redis, React, Angular, SQL Server.',
      ],
    },
    {
      role: 'Senior Software Engineer | Napco Security Technologies (USA) via AEL.',
      dateRange: '01/12/2020 – 16/08/2025 | USA',
      company: 'Adaptive Enterprise Ltd (AEL).',
      companyLinks: [
        { text: 'napcosecurity.com', href: 'https://www.napcosecurity.com' },
        { text: 'ael-bd.com', href: 'http://ael-bd.com/' },
      ],
      infoLines: [
        '<span class="fw-bold">Core Projects:</span> iBridgeOnline, NapcoLink, DoorBell, GarageDoor Automation.',
      ],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        '<span class="fw-semibold">Domain:</span> IoT security, connected home automation, cloud-based access control.',
        '<span class="fw-semibold">Global Product Engineering:</span> Collaborated directly with the US team to design distributed IoT backend services for real-time device telemetry.',
        '<span class="fw-semibold">System Optimization:</span> Migrated a legacy monolith to event-driven microservices (RabbitMQ, CQRS, MediatR), boosting throughput 50%.',
        '<span class="fw-semibold">Cloud & DevOps Automation:</span> Configured Azure DevOps CI/CD with Docker & Kubernetes, cutting release cycles from weeks to hours.',
        '<span class="fw-semibold">Data Reliability:</span> Optimized EF Core & SQL Azure queries, resolving deadlocks across millions of daily device logs.',
        '<span class="fw-semibold">Tech Stack:</span> .NET Core, Microservices, CQRS, RabbitMQ, MediatR, ReactJs, Docker, Kubernetes, Azure DevOps, SQL Azure.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack - Part Time) | Hoxro (UK) | Remote / UK',
      dateRange: '01/01/2021 – 31/12/2021 | Remote / UK',
      company: 'Hoxro',
      companyLinks: [{ text: 'hoxro.co.uk', href: 'https://www.hoxro.co.uk/' }],
      infoLines: ['<span class="fw-bold">Domain & Project:</span> Legal Practice Management System (ERP).'],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        'Designed and developed the legal practice management system on ASP.NET Core with Angular on the client.',
        '<span class="fw-semibold">Automation:</span> Streamlined legal workflow automation via core API gateways built with Ocelot and ASP.NET Core.',
        '<span class="fw-semibold">Security & Messaging:</span> Integrated JWT/IdentityServer for tenant isolation and RabbitMQ for async document queue processing.',
        '<span class="fw-semibold">Remote Delivery:</span> Coordinated directly with the UK client on a part-time, remote basis to deliver sprint milestones.',
        '<span class="fw-semibold">Tech Stack:</span> ASP.NET Core, Microservices, Ocelot, RabbitMQ, Angular, JWT.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/07/2019 – 30/11/2020 | Dhaka, Bangladesh',
      company: 'Next IT Limited,',
      companyLinks: [{ text: 'nextitltd.com', href: 'https://nextitltd.com/' }],
      infoLines: ['<span class="fw-bold">Domain & Project:</span> Big Accessories ERP (Order Management, Identity Security).'],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        'Designed and developed the ASP.NET Core MVC Identity security module and Order Management system.',
        '<span class="fw-semibold">Identity & Security:</span> Implemented the ASP.NET Core MVC Identity module, securing authentication and role-based access.',
        '<span class="fw-semibold">Order Management:</span> Built the Order Management system on ASP.NET Web API, with AngularJS and Angular on the client.',
        '<span class="fw-semibold">Maintenance:</span> Added new modules per evolving requirements and resolved defects to improve usability and performance.',
        '<span class="fw-semibold">Tech Stack:</span> ASP.NET Core, ASP.NET MVC, Web API, AngularJS, Angular.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/04/2018 – 30/06/2019 | Dhaka, Bangladesh',
      company: 'Omni Solutions Limited,',
      companyLinks: [{ text: 'omnisolutionsbd.com', href: 'http://omnisolutionsbd.com/' }],
      infoLines: ['<span class="fw-bold">Domain & Project:</span> ERP Software — Supply Chain Management, Inventory, HR.'],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        'Designed and developed HR, Supply Chain and Inventory web applications on the ASP.NET framework.',
        '<span class="fw-semibold">Module Development:</span> Built HR, Supply Chain and Inventory modules using ASP.NET MVC, Web API and AngularJS.',
        '<span class="fw-semibold">Quality & Maintainability:</span> Fixed defects, upgraded interfaces, and wrote maintainable code following SOLID principles.',
        '<span class="fw-semibold">Performance Optimization:</span> Conducted performance reviews across the ERP application suite.',
        '<span class="fw-semibold">Tech Stack:</span> ASP.NET MVC, Web API, AngularJS, SOLID Principles.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/02/2016 – 31/03/2018 | Dhaka, Bangladesh',
      company: 'Startrek Associates,',
      companyLinks: [{ text: 'startrekbd.com', href: 'http://www.startrekbd.com/' }],
      infoLines: ['<span class="fw-bold">Domain & Project:</span> Bangladesh Rural Electrification Board Billing Software.'],
      bulletsHeader: 'Key Deliverables & Business Impact',
      bullets: [
        'Designed and developed desktop-based and web applications on the ASP.NET framework.',
        '<span class="fw-semibold">Application Development:</span> Built billing applications on ASP.NET MVC with SQL stored procedures for utility operations.',
        '<span class="fw-semibold">Maintenance & UI:</span> Fixed defects, upgraded interfaces, and implemented the user interface (UI).',
        '<span class="fw-semibold">Quality Assurance:</span> Tested websites for cross-browser compatibility, identifying and fixing bugs.',
        '<span class="fw-semibold">Tech Stack:</span> ASP.NET MVC, SQL Procedures, HTML, CSS, JavaScript.',
      ],
    },
  ],
  certifications: [
    { text: 'Microsoft Specialist.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1H1c8seumW1IHu2eD74_bcxugBq6uKIRI/view' },
    { text: 'Microsoft Certified Professional.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1ac8wbAw-ATirW93i_Ftw156lhTNvIT3q/view' },
    { text: 'Microsoft Certified Solutions Developer.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1cxyU11DFw2dd6ggPlfi7dhvAZm2spaXA/view' },
  ],
  education: [
    {
      group: 'Computer Science & IT Qualifications',
      items: [
        'M.Sc. in Computer Science & Engineering (MSCSE) | United International University (UIU) — Nov 2017',
        'Post Graduate Diploma in ICT (PGDICT) | Bangladesh Computer Council (BCC) — Nov 2016',
        'Professional Diploma in Enterprise Systems Analysis & Development (ESAD in C# .NET) | IDB-BISEW — Nov 2015',
      ],
    },
    {
      group: 'Business Administration & Business Management',
      items: [
        'Master of Business Administration (MBA) | University of Dhaka (DU) — Mar 2018',
        'Master of Business Studies (MBS) | Dhaka College (National University) — Dec 2015',
        'Bachelor of Business Studies (BBS) | Dhaka College (National University) — May 2014',
      ],
    },
  ],
  languages: 'Communication Skill: English, Bengali (Reading, Writing, listening & speaking).',
  activities: 'Learning new technologies, listening to music, cricket, listening to spiritual lectures.',
  personalProjects: [
    { name: 'AI-DB-Chat', href: 'https://github.com/Atik0172870/AI-DB-Chat', description: 'AI-powered chat app (Gemini/Ollama) turning voice & text into structured reports.' },
    { name: 'Microservices-Kafka-ECommerce (.NET 8)', href: 'https://github.com/Atik0172870/Microservices-with-Kafka-ECommerce-Example-.NET-8-', description: 'Event-driven order, product & payment services over Kafka.' },
    { name: 'ApiGateway-Ocelot-JWT', href: 'https://github.com/Atik0172870/ApiGetwayWithOcelotAndJWT', description: 'Ocelot API gateway with JWT auth, load balancing & request aggregation.' },
    // { name: 'AI Workflow Automation (SME)', href: 'https://github.com/Atik0172870/AI-Powered-Workflow-Automation-Platform-for-SMEs-', description: 'React app automating SME approvals & notifications with AI.' },
  ],
};

// Renders exactly one PDF page per element in pageRefs — one .resume-page div in,
// one A4 sheet out, regardless of how tall the div's content happens to render.
export const printResumePDF = async (pageRefs, fileName = 'AHTEAR-RAHMAN-CV') => {
  const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true });
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  const pageElements = pageRefs.map((ref) => ref.current).filter(Boolean);

  for (let i = 0; i < pageElements.length; i++) {
    // windowWidth/windowHeight force html2canvas's clone to evaluate CSS media
    // queries as if the browser were desktop-sized, so the exported PDF always
    // matches the real two-column A4 CV layout — never the narrow-screen
    // stacked layout — no matter how small the user's actual window/device is.
    const canvas = await html2canvas(pageElements[i], {
      scale: 1.5,
      backgroundColor: '#ffffff',
      useCORS: true,
      windowWidth: 1280,
      windowHeight: 1810,
    });
    const imgData = canvas.toDataURL('image/jpeg', 0.82);
    const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const xOffset = (pdfWidth - imgWidth) / 2;
    const yOffset = (pdfHeight - imgHeight) / 2;

    if (i > 0) {
      pdf.addPage();
    }
    pdf.addImage(imgData, 'JPEG', xOffset, yOffset, imgWidth, imgHeight);
  }

  pdf.save(fileName + '.pdf');
};
