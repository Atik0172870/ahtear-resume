import React, { useEffect, useRef, useState } from 'react';
import degree from './assets/mortarboard-education-svgrepo-com.svg';
import profile_pic from './assets/Ahtear_rahman.JPG';
import print_icon from './assets/icons8-print-16.png';
import { printPDFCoverLetter } from './cover-letter-data';


function CoverLetter({ data }) {
    const [isPrinted, setIsPrinted] = useState(false);
    const printJobsInitial = { jobTitle: '', companyName: '', companyAddress: '', cityState: '' };
    const componentRef = useRef();
    const [isPrint, setPrint] = useState(false);
    const [letterData, setData] = useState(data);
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
        const name = e.target.name;
        const value = e.target.value;
        printJobs[name] = value;
        setPrintJobs({ ...printJobs });

    }
    useEffect(() => {
        // This effect runs after every render where `count` is updated.
        console.log("Cover letter data updated:", letterData);
        console.log("printJobs data updated:", printJobs);

    }, [letterData, printJobs]); // Dependency array ensures this runs only when `count` changes


    const onPrint = () => {
        const updatedLetterData = {
            ...letterData,
            firstPage: letterData.firstPage.map((item) => {
                const newValue = item.value && typeof item.value === 'string'
                    ? item.value
                        .replace("[JobTitle]", printJobs.jobTitle || "[JobTitle]")  // Replace JobTitle
                        .replace("[CompanyName]", printJobs.companyName || "[CompanyName]")  // Replace CompanyName
                        .replace("[CompanyAddress]", printJobs.companyAddress || "[CompanyAddress]")  // Replace CompanyAddress
                        .replace("[CityStateZIPCode]", printJobs.cityState || "[CityStateZIPCode]")  // Replace CityStateZIPCode
                    : item.value;

                return {
                    ...item,
                    value: newValue
                };
            })
        };

        setData({ ...updatedLetterData });
        setIsPrinted(true);
        setTimeout(() => {
            printPDFCoverLetter(componentRef, 'AHTEAR RAHMAN-cover-letter');
            setIsPrinted(false);

        }, 2000)


    }

    return (
        <>
            <div className='mt-5 pt-5 d-flex flex-column align-items-center'>
                <div className='card border-0 a4-page h-100 overflow-auto' ref={componentRef}>
                    <div className='card-body d-flex flex-column h-100'>
                        <span className='text-center mb-2 text-secondary d-flex justify-content-between'>
                            <span className='ms-auto me-auto'>{data.experience}</span>
                        </span>
                        {/* <img src={profile_pic} className='rounded-circle profile-img' /> */}
                        {
                            letterData.firstPage.map((item, index) => {
                                return <span key={'first-page-row-' + (index + 1)} className={item.className} dangerouslySetInnerHTML={{ __html: item.value }}>
                                    {/* {item.isIcon ? <img src={degree} className='degree-icon' /> : ''} {item.value} */}
                                </span>
                            })
                        }
                    </div>
                </div>
                <div className='text-end mt-2 mb-2'><button className='btn btn-sm bg-dark btn-outline-warning text-white' onClick={() => showModal()}>
                    <img src={print_icon} className='rounded-circle degree-icon' /> Print
                </button>
                </div>

            </div>
            <div className={`modal ${isPrint ? 'd-block' : 'd-none'}`} id="myModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow-lg">

                        <div className="modal-header">
                            <img src={degree} className='degree-icon' /> <button type="button" onClick={() => hideModal()} className="btn-close"></button>
                        </div>

                        <div className="modal-body">
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text w-50">Job Title</span>
                                <input type="text" name='jobTitle' value={printJobs.jobTitle} className="form-control" onChange={onChangeHandle} placeholder='type job title' />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text w-50">Compnay Name</span>
                                <input type="text" name='companyName' value={printJobs.companyName} className="form-control" onChange={onChangeHandle} placeholder='type company name' />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text w-50">Compnay Address</span>
                                <input type="text" name='companyAddress' value={printJobs.companyAddress} className="form-control" onChange={onChangeHandle} placeholder='type company address' />
                            </div>
                            <div className="input-group input-group-sm mb-3">
                                <span className="input-group-text w-50">City, State ZIP Code</span>
                                <input type="text" name='cityState' value={printJobs.cityState} className="form-control" onChange={onChangeHandle} placeholder='type city, state ZIP Code' />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" disabled={(!printJobs.jobTitle || !printJobs.companyName || !printJobs.companyAddress || !printJobs.cityState) ? true : false}
                                className="btn btn-sm btn-outline-secondary d-flex align-items-center" data-bs-dismiss="modal" onClick={() => onPrint()}>
                                <img src={print_icon} className='rounded-circle degree-icon' />{isPrinted ? <span className='ms-1'><span className="spinner-grow spinner-grow-sm"></span> Printing..</span> : 'Print'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CoverLetter;