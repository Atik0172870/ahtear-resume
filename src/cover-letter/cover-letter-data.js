import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const getDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate;
}


export const coverLetterData = {
    experience: 'Experience: More than 10 years.',
    firstPage: [
        { type: 'MD AHTEAR RAHMAN Name', value: 'MD AHTEAR RAHMAN', isIcon: false, className: 'text-primary name' },
        { type: 'MD AHTEAR RAHMAN Name', value: '[ Senior Principal Software Engineer (Full-Stack) (.NET | React | Angular) ]', isIcon: false, className: 'title-designation' },
        { type: 'MD AHTEAR RAHMAN Name', value: '[ C# .NET, ASP.NET MVC,.NET Core, Microservice, RabbitMQ , Ocelot, JWT Token | ', isIcon: false, className: 'common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'ReactJs, Angular,Typescript, JavaScript | Azure DevOps, Docker, Kubernetes, Minikube, Microk8s | Python, FastAPI ]', isIcon: false, className: 'common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'Cell: +8801728706930, +8801516162081(whatsApp)', isIcon: false, className: 'mt-2 contact' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'Email: Atik0172870@gmail.com, Atik017287069@gmail.com', isIcon: false, className: 'contact' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'LinkedIn: https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/', isIcon: false, className: 'contact' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'GitHub: https://github.com/Atik0172870', isIcon: false, className: 'contact' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'Profile: https://atik0172870.github.io/ahtear-resume/', isIcon: false, className: 'contact' },

        { type: 'date', value: `Date : ${getDate()}`, isIcon: false, className: 'mt-3 common-font-size fw-semibold' },
        { type: 'Hiring Manager', value: 'Hiring Manager', isIcon: false, className: 'mt-1 common-font-size fw-semibold' },
        { type: 'MD AHTEAR RAHMAN Name', value: '[CompanyName]', isIcon: false, className: 'common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: '[CompanyAddress]', isIcon: false, className: 'common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: '[CityStateZIPCode]', isIcon: false, className: 'common-font-size' },

        { type: 'MD AHTEAR RAHMAN Name', value: 'Dear Hiring Manager,', isIcon: false, className: 'mt-3  common-font-size fw-semibold' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'I am writing to express my interest in the <b>[JobTitle]</b> position at <b>[CompanyName].</b> With over 10 years of experience as a Senior Full Stack Software Engineer, I specialize in building scalable and high-performance applications using C# .NET, ASP.NET Core, Microservices, and cloud technologies. I have a proven track record of leading full-stack development projects from architecture to deployment, delivering robust solutions in dynamic and fast-paced environments.', isIcon: false, className: 'mt-2 common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'I lead the development of microservices-based architectures using ASP.NET Core, RabbitMQ for messaging, and Ocelot for API gateway management, ensuring secure authentication with JWT tokens. I also manage containerized environments using Docker and Kubernetes on Azure, driving continuous integration and deployment (CI/CD) through Azure DevOps.', isIcon: false, className: 'mt-2 common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'On the front end, I have delivered seamless user experiences using ReactJS, Angular, and TypeScript. My focus on maintainability and performance has consistently resulted in efficient, scalable web applications. I have successfully contributed to projects like <b>iBridgeOnline and Big Accessories ERP,Legal Management System,ERP Software: (i) Supply Chain Management. (ii) Inventory. (iii) HR,Bangladesh Rural Electrification Board billing software</b> where I implemented security measures, optimized system performance, and developed mission-critical features.', isIcon: false, className: 'mt-2 common-font-size' },
        { type: 'Technology', value: 'And I have more knowledge about the technoogies like.', isIcon: false, className: 'mt-2 common-font-size' },

        { type: 'Technologies Back End Client Side Front', value: '❖ Back-End Technology:', isIcon: false, className: 'technology-item  ms-3' },
        { type: 'Technologies Back End Client Side Front', value: 'C#.NET, ASP.NET CORE, .NET Core Micro Service, Ocelot, JWT Token, RabbitMQ, ASP.NET MVC CORE, LINQ', isIcon: false, className: 'common-font-size ms-4' },
        { type: 'Technologies Back End Client Side Front', value: 'ASP.NET: WEB FORM, MVC, WEB API and WIN FORM, CODE FIRST, DATABASE FIRST, IDENTITYSERVER, AND', isIcon: false, className: 'common-font-size  ms-4' },
        { type: 'Technologies Back End Client Side Front', value: 'CRYSTAL REPORT, MS SQL Server, ORACLE 11g, MY SQL. Visual Studio, Visual Studio Code', isIcon: false, className: 'common-font-size  ms-4' },
        { type: 'Technologies Back End Client Side Front', value: '❖ DevOps Things:', isIcon: false, className: 'technology-item ms-3' },
        { type: 'Technologies Back End Client Side Front', value: 'Docker, Kubernetes, Minikube, Microk8s, Azure.', isIcon: false, className: 'common-font-size  ms-4' },
        { type: 'Technologies Back End Client Side Front', value: '❖ Client-Side Technology:', isIcon: false, className: 'technology-item ms-3' },
        { type: 'Technologies Back End Client Side Front', value: 'ReactJs, Angular, Typescripts, AngularJS, jQuery, Java Script, Ajax, CSS3, SASS, Bootstrap5, HTML5, XML ', isIcon: false, className: 'common-font-size  ms-4' },
        { type: 'Technologies Back End Client Side Front', value: '❖ Source Control:', isIcon: false, className: 'technology-item ms-3' },
        { type: 'Technologies Back End Client Side Front', value: 'TFS, Source tree, Bitbucket, GitHub, and SVN, Azure DevOps', isIcon: false, className: 'common-font-size  ms-4' },

        { type: 'MD AHTEAR RAHMAN Name', value: 'I am excited about the opportunity at <b>[CompanyName]</b because of [specific reason related to the company or role]. My expertise in back-end and front-end technologies, combined with a strong foundation in DevOps, makes me confident that I can contribute effectively to your team.', isIcon: false, className: 'mt-2 common-font-size' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'I look forward to the opportunity to discuss how I can add value to <b>[CompanyName]</b. Thank you for considering my application.', isIcon: false, className: 'mt-2 common-font-size mb-2' },


        { type: 'Sincerely', value: 'Sincerely,', isIcon: false, className: 'technology-item  mt-2' },
        { type: 'MD AHTEAR RAHMAN Name', value: 'MD AHTEAR RAHMAN', isIcon: false, className: 'common-font-size' },
        { type: 'Designation', value: 'Senior Principal Software Engineer', isIcon: false, className: 'common-font-size' },
        { type: 'Current Company', value: 'Brac Bank PLC.', isIcon: false, className: 'common-font-size' },
        { type: 'Current Company addreess', value: 'Anik Tower, 220/B Bir Uttam Mir Shawkat Sarak, Dhaka 1208', isIcon: false, className: 'common-font-size' },

        

    ]
}

export const printPDFCoverLetter = (componentRef, fileNmame = 'AHTEAR RAHMAN-cover-letter') => {
    fileNmame = fileNmame + '.pdf';
    const input = componentRef.current;
    const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size in portrait mode
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    html2canvas(input, { scale: 2 }).then((canvas) => {
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Calculate aspect ratio to fit the content on one page
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgNewWidth = imgWidth * ratio;
        const imgNewHeight = imgHeight * ratio;

        const pageData = canvas.toDataURL('image/png');

        // Center the image on the PDF
        const xOffset = (pdfWidth - imgNewWidth) / 2;
        const yOffset = (pdfHeight - imgNewHeight) / 2;

        pdf.addImage(pageData, 'PNG', xOffset, yOffset, imgNewWidth, imgNewHeight);
        pdf.save(fileNmame);
    });
};