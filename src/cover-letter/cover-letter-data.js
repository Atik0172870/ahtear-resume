
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { data as resumeData } from '../resume/resume-data';

const getDate = () => {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

const currentRole = resumeData.experienceEntries[0];

export const coverLetterData = {
    name: resumeData.name,
    title: resumeData.title,
    experience: resumeData.experience,
    experienceYears: resumeData.experienceYears,
    date: getDate(),
    contacts: [
        ...resumeData.contacts,
        { label: 'Profile', value: 'atik0172870.github.io/ahtear-resume', href: 'https://atik0172870.github.io/ahtear-resume/' },
    ],
    greeting: 'Dear Hiring Manager,',
    bodyParagraphs: [
        `I am writing to express my interest in the {{jobTitle}} position at {{companyName}}. With over ${resumeData.experienceYears} years of experience as a Senior Full-Stack Software Engineer, I specialize in building scalable, resilient enterprise systems on the Microsoft stack — spanning ASP.NET Core, .NET microservice architecture, and modern cloud-native delivery. I have a proven track record of leading full-stack development from architecture through deployment across fintech, IoT security, ERP and utility-billing domains.`,
        `In my current role as ${currentRole.role} at ${currentRole.company.replace(/\.$/, '')}, I lead the design and development of loan and document management systems on ASP.NET Core, implementing .NET Core microservice architecture with Ocelot, RabbitMQ and JWT-based authentication, alongside React and Angular on the client. Previously, working directly with Napco Security Technologies (USA), I delivered connected-security products including iBridgeOnline, NapcoLink, DoorBell and GarageDoor. My architecture toolkit spans Clean Architecture, CQRS, MediatR, Domain-Driven Design and event-driven messaging with resilience patterns such as retry and circuit breaker, backed by Docker, Kubernetes and Azure DevOps CI/CD pipelines`,
        `My technical toolkit includes:`,
        `I am excited about the opportunity at {{companyName}} because [specific reason related to the company or role]. My breadth across back-end architecture, front-end delivery and DevOps gives me confidence that I can contribute effectively to your team from day one.`,
        `I look forward to the opportunity to discuss how I can add value to {{companyName}}. Thank you for considering my application.`,
    ],
    technologies: resumeData.technologies,
    signature: {
        name: resumeData.name,
        designation: currentRole.role,
        company: currentRole.company,
        companyAddress: 'Anik Tower, 220/B Bir Uttam Mir Shawkat Sarak, Dhaka 1208',
    },
}

export const printPDFCoverLetter = (componentRef, fileNmame = 'AHTEAR RAHMAN-cover-letter') => {
    fileNmame = fileNmame + '.pdf';
    const input = componentRef.current;
    const pdf = new jsPDF({ orientation: 'p', unit: 'mm', format: 'a4', compress: true });
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // windowWidth/windowHeight force html2canvas's clone to evaluate CSS media
    // queries as if the browser were desktop-sized, so the exported PDF always
    // matches the real two-column layout — never the narrow-screen stacked
    // layout — no matter how small the user's actual window/device is.
    html2canvas(input, {
        scale: 1.5,
        backgroundColor: '#ffffff',
        useCORS: true,
        windowWidth: 1280,
        windowHeight: 1810,
    }).then((canvas) => {
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;

        // Calculate aspect ratio to fit the content on one page
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
        const imgNewWidth = imgWidth * ratio;
        const imgNewHeight = imgHeight * ratio;

        const pageData = canvas.toDataURL('image/jpeg', 0.82);

        // Center the image on the PDF
        const xOffset = (pdfWidth - imgNewWidth) / 2;
        const yOffset = (pdfHeight - imgNewHeight) / 2;

        pdf.addImage(pageData, 'JPEG', xOffset, yOffset, imgNewWidth, imgNewHeight);
        pdf.save(fileNmame);
    });
};
