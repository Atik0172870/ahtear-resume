import React from "react";

function VideoInterview() {

    return (
        <div className='mt-5 pt-5 d-flex flex-column align-items-center'>
            <div className="card">
                <div className="card-header text-center">Video Interview</div>
                <div className="card-body">
                    <video width="600" controls>
                        <source src="your-video-file.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <span className="text-warning d-flex">No Content Found !</span>
                </div>
            </div>
        </div>

    )
}

export default VideoInterview