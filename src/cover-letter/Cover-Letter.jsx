import React, { useRef, useState } from 'react';
import degree from '../assets/mortarboard-education-svgrepo-com.svg';
import print_icon from '../assets/icons8-print-16.png';
import { printPDFCoverLetter, coverLetterData } from './cover-letter-data';
import './cover-letter.scss';

const JOB_TITLE_TOKEN = '{{jobTitle}}';
const COMPANY_NAME_TOKEN = '{{companyName}}';

function renderParagraph(template, jobTitle, companyName) {
    const parts = template.split(/(\{\{jobTitle\}\}|\{\{companyName\}\})/g);
    return parts.map((part, index) => {
        if (part === JOB_TITLE_TOKEN) {
            return <strong key={index}>{jobTitle || '[Job Title]'}</strong>;
        }
        if (part === COMPANY_NAME_TOKEN) {
            return <strong key={index}>{companyName || '[Company Name]'}</strong>;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
    });
}

function CoverLetter() {
    const printJobsInitial = { jobTitle: '', companyName: '', companyAddress: '', cityState: '' };
    const componentRef = useRef();
    const [isPrinted, setIsPrinted] = useState(false);
    const [isPrint, setPrint] = useState(false);
    const [printJobs, setPrintJobs] = useState({ ...printJobsInitial });

    const showModal = () => {
        setPrintJobs({ ...printJobsInitial });
        setPrint(true);
    }
    const hideModal = () => {
        setPrintJobs({ ...printJobsInitial });
        setPrint(false);
    }
    const onChangeHandle = (e) => {
        const { name, value } = e.target;
        setPrintJobs((prev) => ({ ...prev, [name]: value }));
    }

    const onPrint = () => {
        setIsPrinted(true);
        setTimeout(() => {
            printPDFCoverLetter(componentRef, 'AHTEAR RAHMAN-cover-letter');
            setIsPrinted(false);
        }, 1500);
    }

    const { jobTitle, companyName, companyAddress, cityState } = printJobs;

    return (
        <>
            <div className='mt-5 pt-5 d-flex flex-column align-items-center cover-letter'>
                <div className='card border-0 a4-page cover-letter-page' ref={componentRef}>
                    <div className='card-body cover-letter-page__body'>
                        <header className='cl-header'>
                            <h1 className='cl-header__name'>{coverLetterData.name}</h1>
                            <p className='cl-header__title'>{coverLetterData.title}</p>
                            <div className='cl-header__contacts'>
                                {coverLetterData.contacts.map((contact) => (
                                    <span key={contact.label}>
                                        {contact.label}: {contact.href
                                            ? <a href={contact.href} target='_blank' rel='noreferrer'>{contact.value}</a>
                                            : contact.value}
                                    </span>
                                ))}
                            </div>
                        </header>

                        <div className='cl-meta'>
                            <p>Date: {coverLetterData.date}</p>
                            <p>Hiring Manager</p>
                            <p>{companyName || '[Company Name]'}</p>
                            <p>{companyAddress || '[Company Address]'}</p>
                            <p>{cityState || '[City, State ZIP Code]'}</p>
                        </div>

                        <p className='cl-greeting'>{coverLetterData.greeting}</p>

                        <p className='cl-paragraph'>{renderParagraph(coverLetterData.bodyParagraphs[0], jobTitle, companyName)}</p>
                        <p className='cl-paragraph'>{renderParagraph(coverLetterData.bodyParagraphs[1], jobTitle, companyName)}</p>
                        <p className='cl-paragraph'>{renderParagraph(coverLetterData.bodyParagraphs[2], jobTitle, companyName)}</p>

                        <div className='tech-grid'>
                            {coverLetterData.technologies.map((tech) => (
                                <div className='tech-row' key={tech.label}>
                                    <strong className='tech-label'>{tech.label}</strong>
                                    <span className='tech-value'>{tech.value}</span>
                                </div>
                            ))}
                        </div>

                        <p className='cl-paragraph'>{renderParagraph(coverLetterData.bodyParagraphs[3], jobTitle, companyName)}</p>
                        <p className='cl-paragraph mb-2'>{renderParagraph(coverLetterData.bodyParagraphs[4], jobTitle, companyName)}</p>

                        <div className='cl-signature'>
                            <p>Sincerely,</p>
                            <p>{coverLetterData.signature.name}</p>
                            <p>{coverLetterData.signature.designation}</p>
                            <p>{coverLetterData.signature.company}</p>
                            <p>{coverLetterData.signature.companyAddress}</p>
                        </div>
                    </div>
                </div>
                <div className='text-end mt-2 mb-2'>
                    <button className='btn btn-sm bg-dark btn-outline-warning text-white' onClick={() => showModal()}>
                        <img src={print_icon} className='rounded-circle degree-icon' /> Print
                    </button>
                </div>
            </div>
            <div className={`modal ${isPrint ? 'd-block' : 'd-none'}`} id='myModal'>
                <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content shadow-lg'>
                        <div className='modal-header'>
                            <img src={degree} className='degree-icon' /> <button type='button' onClick={() => hideModal()} className='btn-close'></button>
                        </div>
                        <div className='modal-body'>
                            <div className='input-group input-group-sm mb-3'>
                                <span className='input-group-text w-50'>Job Title</span>
                                <input type='text' name='jobTitle' value={printJobs.jobTitle} className='form-control' onChange={onChangeHandle} placeholder='type job title' />
                            </div>
                            <div className='input-group input-group-sm mb-3'>
                                <span className='input-group-text w-50'>Company Name</span>
                                <input type='text' name='companyName' value={printJobs.companyName} className='form-control' onChange={onChangeHandle} placeholder='type company name' />
                            </div>
                            <div className='input-group input-group-sm mb-3'>
                                <span className='input-group-text w-50'>Company Address</span>
                                <input type='text' name='companyAddress' value={printJobs.companyAddress} className='form-control' onChange={onChangeHandle} placeholder='type company address' />
                            </div>
                            <div className='input-group input-group-sm mb-3'>
                                <span className='input-group-text w-50'>City, State ZIP Code</span>
                                <input type='text' name='cityState' value={printJobs.cityState} className='form-control' onChange={onChangeHandle} placeholder='type city, state ZIP Code' />
                            </div>
                        </div>
                        <div className='modal-footer'>
                            <button type='button' disabled={!jobTitle || !companyName || !companyAddress || !cityState}
                                className='btn btn-sm btn-outline-secondary d-flex align-items-center' data-bs-dismiss='modal' onClick={() => onPrint()}>
                                <img src={print_icon} className='rounded-circle degree-icon' />{isPrinted ? <span className='ms-1'><span className='spinner-grow spinner-grow-sm'></span> Printing..</span> : 'Print'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoverLetter;
