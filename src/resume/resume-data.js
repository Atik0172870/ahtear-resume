
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const data = {
  name: 'MD AHTEAR RAHMAN',
  title: 'Senior Principal Software Engineer (Full-Stack | C#.NET | React | Angular)',
  skillsLine: 'C# .NET 9/10, ASP.NET Core, microservices, gRPC, YARP, Kafka, MassTransit, EF Core, Redis | Clean Architecture, CQRS, DDD, event-driven, resilience patterns | ReactJs, Angular, TypeScript | Azure, Docker, Kubernetes, Azure DevOps CI/CD, OpenTelemetry | Python, FastAPI | xUnit, NUnit, Postman, Swagger, Serilog, NLog, Application Insights | MS SQL Server, SQL Azure, Oracle 11g, MySQL, PostgreSQL, MongoDB | <span class="fw-bold" >AI: Claude, Gemini, GitHub Copilot, ChatGPT</span>',
  experienceYears: 10,
  experience: 'More than 10 years.',
  contacts: [
    { label: 'Cell', value: '+8801728706930, +8801516162081(whatsApp)' },
    { label: 'Email', value: 'Atik0172870@gmail.com, Atik017287069@gmail.com' },
    { label: 'LinkedIn', value: 'md-ahtear-rahman-b8043a15a', href: 'https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/' },
    { label: 'GitHub', value: 'github.com/Atik0172870', href: 'https://github.com/Atik0172870' },
  ],
  summary: 'Full-stack engineer with more than 10 years building enterprise systems on the Microsoft stack — currently leading document and loan management systems at BRAC Bank PLC, previously delivering connected-security products directly for Napco Security Technologies (USA). Depth in ASP.NET Core and .NET Core microservice architecture (Ocelot, RabbitMQ, JWT, IdentityServer), with React and Angular on the client and Docker, Kubernetes and Azure DevOps in delivery. Domains: fintech, IoT security, ERP, supply chain and utility billing.',
  technologies: [
    { label: 'Back-End', value: 'C#.NET (.NET 9 / .NET 10), ASP.NET Core, .NET Core Microservice, Ocelot, YARP, gRPC, JWT Token, OAuth2 / OpenID Connect, RabbitMQ, MassTransit, Kafka, Polly, Hangfire, minimal APIs, ASP.NET MVC Core, LINQ, Entity Framework Core, Dapper, IdentityServer. ASP.NET: Web Form, MVC, Web API, WinForm, Code First, Database First, Crystal Report.' },
    { label: 'Architecture', value: 'Microservices, event-driven messaging, resilience patterns (retry, circuit breaker), outbox pattern, Clean Architecture, CQRS, MediatR, Domain-Driven Design, Repository pattern, SOLID, SignalR' },
    { label: 'Data & Caching', value: 'MS SQL Server, SQL Azure, Oracle 11g, MySQL, PostgreSQL, MongoDB, Redis, stored procedures' },
    { label: 'Cloud & DevOps', value: 'Azure Functions, Service Bus, Blob Storage, Azure DevOps CI/CD pipelines, Docker, Kubernetes, Minikube, Microk8s' },
    { label: 'Testing & Observability', value: 'xUnit, NUnit, integration testing, Postman, Swagger, Serilog, NLog, Application Insights, OpenTelemetry, Elastic / Kibana' },
    { label: 'Client-Side', value: 'ReactJs, Angular, Typescripts, AngularJS, jQuery, Java Script, Ajax, CSS3, SASS, Bootstrap5, HTML5, XML' },
    { label: 'Tooling', value: 'Visual Studio, Visual Studio Code, TFS, Source tree, Bitbucket, GitHub, SVN, Azure DevOps. AI: Claude, Gemini, GitHub Copilot for development and code review.' },
  ],
  experienceEntries: [
    {
      role: 'Senior Principal Software Engineer (Manager)',
      dateRange: '17/08/2025 to till now',
      company: 'Brac Bank PLC.',
      companyLinks: [{ text: 'bracbank.com', href: 'https://www.bracbank.com/' }],
      infoLines: ['Project: Various fintech projects, Shubidha, Digital Desk, Astha.'],
      bullets: [
        'Requirements analysis, design and development of loan and document management systems on ASP.NET Core.',
        'Implementation on .NET Core microservice architecture across the Shubidha, Digital Desk and Astha platforms.',
        'Client-side delivery in ReactJs and Angular.',
        'Maintainable, extensible code in a team environment.',
      ],
    },
    {
      role: 'Senior Software Engineer (Full-Stack)',
      dateRange: '01/12/2020 to 16/08/2025',
      company: 'Adaptive Enterprise Ltd.',
      companyLinks: [
        { text: 'napcosecurity.com', href: 'https://www.napcosecurity.com' },
        { text: 'ael-bd.com', href: 'http://ael-bd.com/' },
      ],
      infoLines: [
        'Note: I am directly working with Napco Security Technologies (USA)',
        'Project: iBridgeOnline, NapcoLink, DoorBell, GarageDoor (USA)',
      ],
      bullets: [
        'Requirements analysis, design and development of connected-security products on ASP.NET Core, working directly with Napco Security Technologies (USA).',
        'Implementation on .NET Core microservice architecture.',
        'Client-side delivery in ReactJs.',
        'Maintainable, extensible code in a team environment.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack), Part time',
      dateRange: '01/01/2021 to 31/12/2021',
      company: 'Hoxro',
      companyLinks: [{ text: 'hoxro.co.uk', href: 'https://www.hoxro.co.uk/' }],
      infoLines: ['Project: Legal Management System (UK)'],
      bullets: [
        'Technology: ASP.NET CORE, .Net Core Microservice, Using Angular for Client-Side Technology.',
        'Implement Ocelot, JWT Token, RabbitMQ.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/07/2019 to 30/11/2020',
      company: 'Next IT Limited,',
      companyLinks: [{ text: 'nextitltd.com', href: 'https://nextitltd.com/' }],
      infoLines: ['Project: Big Accessories ERP'],
      bullets: [
        'Requirements analysis, design and developed ASP.NET CORE MVC Identity security module.',
        'Developed the Order Management system on the ASP.NET framework through Web API, with AngularJS and Angular on the client.',
        'Added new modules and features, and analysed business requirements.',
        'Modify existing software to correct errors, upgrade Interfaces and improve performance.',
        'Write maintainable and extensible code in a team environment.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/04/2018 to 30/06/2019',
      company: 'Omni Solutions Limited,',
      companyLinks: [{ text: 'omnisolutionsbd.com', href: 'http://omnisolutionsbd.com/' }],
      infoLines: ['Project: ERP Software: (i) Supply Chain Management. (ii) Inventory. (iii) HR'],
      bullets: [
        'Responsible for Designing and developing HR, Supply Chain and Inventory Software Web Application on ASP.NET framework through ASP.NET MVC, Web API and AngularJS.',
        'Modify existing software to correct errors, upgrade Interfaces and improve performance.',
        'Wrote maintainable and extensible code in a team environment using SOLID Principle.',
        'Helped and learned knowledge with team member friendly and enthusiastically.',
        'Performance review and optimization.',
      ],
    },
    {
      role: 'Software Engineer (Full-Stack)',
      dateRange: '01/02/2016 to 31/03/2018',
      company: 'Startrek Associates,',
      companyLinks: [{ text: 'startrekbd.com', href: 'http://www.startrekbd.com/' }],
      infoLines: ['Project: Bangladesh Rural Electrification Board billing software'],
      bullets: [
        'Requirements analysis and design Responsible for Designing and developing Desktop Base, and Web Application on ASP.NET framework through ASP.NET MVC, SQL Procedure',
        'Modify existing software to correct errors, upgrade Interfaces and improve performance.',
        'Designing and implementing user interface (UI).',
        'Learned knowledge with team member friendly and enthusiastically.',
        'Testing websites for cross browser compatibility and fixing bugs and errors.',
      ],
    },
  ],
  certifications: [
    { text: 'Microsoft Specialist.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1H1c8seumW1IHu2eD74_bcxugBq6uKIRI/view' },
    { text: 'Microsoft Certified Professional.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1ac8wbAw-ATirW93i_Ftw156lhTNvIT3q/view' },
    { text: 'Microsoft Certified Solutions Developer.', linkText: 'Certificate', href: 'https://drive.google.com/file/d/1cxyU11DFw2dd6ggPlfi7dhvAZm2spaXA/view' },
  ],
  education: [
    'MSCSE from United International University (UIU): Obtained in November 2017.',
    'PGDICT in ICT from Bangladesh Computer Council (BCC): Obtained in November 2016.',
    'ESAD in C# .NET from IDB-BISEW: Obtained in November of 2015.',
    'MBA in Management from Dhaka University (DU): Obtained in March 2018.',
    'MBS in Management from Dhaka College (DC): Obtained in December 2015.',
    'BBS in Management from Dhaka College (DC): Obtained in May 2014.',
    'HSC in Business Studies, Dr. Zahurul Kamal Degree College (2007); SSC in Humanities, Ayen Uddin High School (2005).',
  ],
  languages: 'Communication Skill: English, Bengali (Reading, Writing, listening & speaking).',
  activities: 'Learning new technologies, listening to music, cricket, listening to spiritual lectures.',
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
