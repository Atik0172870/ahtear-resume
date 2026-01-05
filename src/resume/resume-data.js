
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import CV from '../assets/AHTEAR-RAHMAN-CV.pdf';

export const data = {
  experience: 'Experience: More than 9 years.',
  firstPage: [
    { type: 'MD AHTEAR RAHMAN Name', value: 'MD AHTEAR RAHMAN', isIcon: false, className: 'text-primary name' },
    { type: 'MD AHTEAR RAHMAN Name', value: '[ Senior Full Stack Principal Software Engineer (.NET | React | Angular) ]', isIcon: false, className: 'title-designation' },
    { type: 'MD AHTEAR RAHMAN Name', value: '[ C# .NET, ASP.NET MVC,.NET Core, Microservice, RabbitMQ , Ocelot, JWT Token | ReactJs, Angular, ', isIcon: false, className: 'common-font-size' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'Typescript, JavaScript | Azure DevOps, Docker, Kubernetes, Minikube, Microk8s | Python, FastAPI ]', isIcon: false, className: 'common-font-size' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'Cell: +8801728706930, +8801516162081', isIcon: false, className: 'mt-2 contact' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'Email: Atik0172870@gmail.com, Atik017287069@gmail.com', isIcon: false, className: 'contact' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'LinkedIn: https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/', isIcon: false, className: 'contact' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'GitHub: https://github.com/Atik0172870', isIcon: false, className: 'contact' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'Professional Summary:', isIcon: false, className: 'mt-2 common-header' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'Lightning-fast, the exacting .NET developer with good experience. Skilled in .Net technology, and clientside', isIcon: false, className: 'common-font-size' },
    { type: 'MD AHTEAR RAHMAN Name', value: 'web development. Seeking a position where I can use my existing skills and further develop my career.', isIcon: false, className: 'common-font-size' },

    { type: 'Technologies Back End Client Side Front', value: 'Technologies:', isIcon: false, className: 'common-header mt-2' },
    { type: 'Technologies Back End Client Side Front', value: '❖ Back-End Technology:', isIcon: false, className: 'technology-item  ms-3' },
    { type: 'Technologies Back End Client Side Front', value: 'C#.NET, ASP.NET CORE, .NET Core Microservice, Ocelot, JWT Token, RabbitMQ, ASP.NET MVC CORE, LINQ', isIcon: false, className: 'common-font-size ms-4' },
    { type: 'Technologies Back End Client Side Front', value: 'ASP.NET: WEB FORM, MVC, WEB API and WIN FORM, CODE FIRST, DATABASE FIRST, IDENTITYSERVER, AND', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Technologies Back End Client Side Front', value: 'CRYSTAL REPORT, MS SQL Server, ORACLE 11g, MY SQL. Visual Studio, Visual Studio Code', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Technologies Back End Client Side Front', value: '❖ DevOps Things:', isIcon: false, className: 'technology-item ms-3' },
    { type: 'Technologies Back End Client Side Front', value: 'Docker, Kubernetes, Minikube, Microk8s, Azure.', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Technologies Back End Client Side Front', value: '❖ Client-Side Technology:', isIcon: false, className: 'technology-item ms-3' },
    { type: 'Technologies Back End Client Side Front', value: 'ReactJs, Angular, Typescripts, AngularJS, jQuery, Java Script, Ajax, CSS3, SASS, Bootstrap5, HTML5, XML ', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Technologies Back End Client Side Front', value: '❖ Source Control:', isIcon: false, className: 'technology-item ms-3' },
    { type: 'Technologies Back End Client Side Front', value: 'TFS, Source tree, Bitbucket, GitHub, and SVN, Azure DevOps', isIcon: false, className: 'common-font-size  ms-4' },
    //1
    { type: 'Project Job Experience Working History', value: 'Job Experience and Working History:', isIcon: false, className: 'common-header mt-2' },
    { type: 'Project Job Experience Working History', value: '❖ Working Senior Principal software Engineer: ', isIcon: false, className: 'technology-item  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Company: Brac Bank PLC. https://www.bracbank.com/', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Date: 17/08/2025 to till now.', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: Various fintech project', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Requirements analysis, design and developed ASP.NET CORE, .Net Core Microservice.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Implement with .Net Core Microservice Architecture.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Using ReactJs, angular for Client Side Language.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Write maintainable and extensible code in a team environment.', isIcon: false, className: 'common-font-size  ms-5' },
//2
    { type: 'Project Job Experience Working History', value: '❖ Working as Full-Stack Senior Software Engineer: ', isIcon: false, className: 'technology-item  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Company: Adaptive Enterprise Ltd. https://www.napcosecurity.com, http://ael-bd.com/', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Note: I am directly working with Napco Security Technologies (USA)', isIcon: false, className: 'technology-item  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Date: 01/12/2021 to  16/08/2025.', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: iBridgeOnline, NapcoLink:', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Requirements analysis, design and developed ASP.NET CORE, .Net Core Microservice.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Implement with .Net Core Microservice Architecture.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Using ReactJs for Client Side Language.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Write maintainable and extensible code in a team environment.', isIcon: false, className: 'common-font-size  ms-5' },

    //part time
    { type: 'Project Job Experience Working History', value: '❖ Worked as Full-Stack Software Engineer: Part time (01/01/2021 to 31/12/2021). ', isIcon: false, className: 'technology-item  ms-3 mt-2' },
    { type: 'Project Job Experience Working History', value: 'Company:  Hoxro (https://www.hoxro.co.uk/)', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: Project: Legal Management System:', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Technology: ASP.NET CORE, .Net Core Microservice, Using Angular for Client-Side Technology.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Implement Ocelot, JWT Token, RabbitMQ.', isIcon: false, className: 'common-font-size  ms-5' },
    //2
    { type: 'Project Job Experience Working History', value: '❖ Worked as Full-Stack Software Engineer.', isIcon: false, className: 'technology-item  ms-3 mt-2' },
    { type: 'Project Job Experience Working History', value: 'Company: Next IT Limited, https://nextitltd.com/', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Date: 01/07/2019 to 30/11/2021', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: Big Accessories ERP:', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Requirements analysis, design and developed ASP.NET CORE MVC Identity security module.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Developing Order Management system on ASP.NET framework through WEB API', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ And AngularJS, Angular.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Adding new module and features and analysis business requirements.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Modify existing software to correct errors, upgrade Interfaces and improve performance. ', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Write maintainable and extensible code in a team environment.', isIcon: false, className: 'common-font-size  ms-5' },


  ],
  secondPage: [
    //3
    { type: 'Project Job Experience Working History', value: '❖ Worked as Software Engineer.', isIcon: false, className: 'technology-item  ms-3 mt-2' },
    { type: 'Project Job Experience Working History', value: 'Company: Omni Solutions Limited, http://omnisolutionsbd.com/', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Date: 01/04/2018 to 31/06/2019', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: ERP Software: (i) Supply Chain Management. (ii) Inventory. (iii) HR:', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Responsible for Designing and developing HR, Supply Chain and Inventory Software Web', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: 'Application on ASP.NET framework through ASP.NET MVC, Web API and AngularJS.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Modify existing software to correct errors, upgrade Interfaces and improve performance.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Wrote maintainable and extensible code in a team environment using SOLID Principle.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Helped and learned knowledge with team member friendly and enthusiastically.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Performance review and optimization.', isIcon: false, className: 'common-font-size  ms-5' },
    //4
    { type: 'Project Job Experience Working History', value: '❖ Worked as Software Engineer.', isIcon: false, className: 'technology-item  ms-3 mt-2' },
    { type: 'Project Job Experience Working History', value: 'Company: Startrek Associates , http://www.startrekbd.com/', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Date 01/02/2016 to 31/03/2018', isIcon: false, className: 'common-font-size  ms-3' },
    { type: 'Project Job Experience Working History', value: 'Project: Bangladesh Rural Electrification Board billing software:', isIcon: false, className: 'common-header ms-4' },
    { type: 'Project Job Experience Working History', value: '➢ Requirements analysis and design Responsible for Designing and developing Desktop Base, and ', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: 'Web Application on ASP.NET framework through ASP.NET MVC, SQL Procedure', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Modify existing software to correct errors, upgrade Interfaces and improve performance.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Designing and implementing user interface (UI).', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Learned knowledge with team member friendly and enthusiastically.', isIcon: false, className: 'common-font-size  ms-5' },
    { type: 'Project Job Experience Working History', value: '➢ Testing websites for cross browser compatibility and fixing bugs and errors.', isIcon: false, className: 'common-font-size  ms-5' },
    // certification or education
    { type: 'Vendor Certification Education', value: 'Vendor Certification:', isIcon: true, className: 'common-header mt-2 glyphicon glyphicon-book' },
    { type: 'Vendor Certification Education', value: '1. Microsoft Specialist.', isIcon: false, className: 'technology-item ms-4' },
    { type: 'Vendor Certification Education', value: 'https://www.dropbox.com/scl/fi/sw0aq6xeu7sx8sgnlwidr/Certificate_HTML5.pdf?rlkey=rgywyy57l77gxn69usj1ll72i&dl=0', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Vendor Certification Education', value: '2. Microsoft Certified Professional.', isIcon: false, className: 'technology-item ms-4' },
    { type: 'Vendor Certification Education', value: 'https://www.dropbox.com/scl/fi/n3d9w70simlxc40f4pt81/Certificate_MVC5.pdf?rlkey=8dxr35pclzos234t6hr5obj4f&dl=0', isIcon: false, className: 'common-font-size  ms-4' },
    { type: 'Vendor Certification Education', value: '3. Microsoft Certified Solutions Developer.', isIcon: false, className: 'technology-item ms-4' },
    { type: 'Vendor Certification Education', value: 'https://www.dropbox.com/scl/fi/q58wfn0bui9v5grg3t196/Certificate_WindowsAzure.pdf?rlkey=mmiom4gn20h9odzut0ictgz6s&dl=0', isIcon: false, className: 'common-font-size  ms-4' },

    { type: 'Certification Education Degree', value: 'Academic Qualification / Degree:', isIcon: true, className: 'common-header mt-2 glyphicon glyphicon-book' },
    { type: 'Certification Education Degree', value: '1. MSCSE from United International University (UIU): Obtained in November 2017.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '2. PGDICT in ICT from Bangladesh Computer Council (BCC): Obtained in November 2016.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '3. ESAD in C# .NET from IDB-BISEW: Obtained in November of 2015.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '4. MBA in Management from Dhaka University (DU): Obtained in March 2018.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '5. MBS in Management from Dhaka College (DC): Obtained in December 2015.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '6. BBS in Management from Dhaka College (DC): Obtained in May 2014.', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '7. HSC in Business Studies from Dr. Zahurul kamal degree college Obtained in May 2007', isIcon: false, className: 'ms-4 common-font-size' },
    { type: 'Certification Education Degree', value: '8. SSC in Humanities from Ayen Uddin High School Obtained in March 2005', isIcon: false, className: 'ms-4 common-font-size' },
    //Language Proficiency: 
    { type: 'Language Proficiency', value: 'Language Proficiency:', isIcon: false, className: 'common-header mt-3 glyphicon glyphicon-book' },
    { type: 'Language Proficiency', value: 'Communication Skill: English, Bengali (Reading, Writing, listening & speaking).', isIcon: false, className: 'ms-4 common-font-size' },

    //Activities: 
    { type: 'Activities', value: 'Activities:', isIcon: false, className: 'common-header mt-3 glyphicon glyphicon-book' },
    { type: 'Activities', value: 'Learning New Technologies, Listening to Music, Cricket, Listing Spiritual Lecture.', isIcon: false, className: 'ms-4 common-font-size' },

  ]
}


export const printPDF = (componentRef, fileNmame = 'AHTEAR-RAHMAN-CV') => {
  fileNmame = fileNmame + '.pdf';
  const input = componentRef.current;
  const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size in portrait mode
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  html2canvas(input, { scale: 2 }).then((canvas) => {
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const imgRatio = imgWidth / pdfWidth;
    const pageHeight = pdfHeight * imgRatio;

    let position = 0;

    while (position < imgHeight) {
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = imgWidth;
      pageCanvas.height = pageHeight;

      const context = pageCanvas.getContext('2d');
      context.drawImage(canvas, 0, position, imgWidth, pageHeight, 0, 0, imgWidth, pageHeight);

      const pageData = pageCanvas.toDataURL('image/png');
      pdf.addImage(pageData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      position += pageHeight;

      if (position < imgHeight) {
        pdf.addPage(); // Add a new page if content exceeds the height of one page
      }
    }
    pdf.save(fileNmame);
  });
};


export const handleDownloadCvFile = () => {
  const link = document.createElement("a");
  link.href = CV;
  link.download = "MD AHTEAR RAHMAN.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

