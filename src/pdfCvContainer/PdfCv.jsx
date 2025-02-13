import React from "react";
import CV from '../assets/MD AHTEAR RAHMAN.pdf';
import './PdfCv.scss';
function VideoInterview() {

    return (
        <div className='mt-5 pt-4 d-flex flex-column align-items-center'>
            <div className="card border-info-subtle">
                <div className="card-body">
                    <iframe className="pdf-cv" src={CV} >No Content Found !</iframe>
                </div>
            </div>
        </div>

    )
}

export default VideoInterview