
import { data, handleDownloadCvFile, printPDF } from './resume-data';
import degree from '../assets/mortarboard-education-svgrepo-com.svg';
import profile_pic from '../assets/Ahtear_rahman.JPG';
import print_icon from '../assets/icons8-print-16.png';
import React, { useRef } from 'react';
import './My-Resume.scss';

function Resume() {
  const componentRef = useRef();
  return (
    <div className='mt-5 pt-5 d-flex flex-column align-items-center my-resume'>
      <div className='card border-0 a4-page h-100 overflow-auto' ref={componentRef}>
        <div className='card-body d-flex flex-column h-100'>
          <span className='text-center mb-2 text-secondary d-flex justify-content-between'>
            <span className='common-font-size'>Page : 1</span><span className='ms-auto me-auto'>{data.experience}</span>
          </span>
          <img src={profile_pic} className='rounded-circle profile-img' />
          {
            data.firstPage.map((item, index) => {
              return <span key={'first-page-row-' + (index + 1)} className={item.className}>
                {item.isIcon ? <img src={degree} className='degree-icon' /> : ''} {item.value}
              </span>
            })
          }
        </div>
        <div className='card-body d-flex flex-column h-100 secoond-page mt-2 pt-3'>
          <span className='text-center mb-2 text-secondary d-flex justify-content-between'>
            <span className='common-font-size'>Page : 2</span><span className='ms-auto me-auto'>{data.experience}</span>
          </span>
          {
            data.secondPage.map((item, index) => {
              return <span key={'second-page-row-' + (index + 1)} className={item.className}>
                {item.isIcon ? <img src={degree} className='degree-icon' /> : ''} {item.value}
              </span>
            })
          }
        </div>
      </div>
      <div className='text-end mt-2 mb-2'>
        {/* <button className='btn btn-sm bg-dark btn-outline-warning text-white btn-print-1' onClick={() => printPDF(componentRef)}>
          <img src={print_icon} className='rounded-circle degree-icon' /> Print
        </button> */}
        <button className='btn btn-sm bg-dark btn-outline-warning text-white btn-print-2' onClick={() => handleDownloadCvFile()}>
          <img src={print_icon} className='rounded-circle degree-icon' /> Print
        </button>
      </div>
    </div>
  );
}
export default Resume;
