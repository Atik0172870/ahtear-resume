import React, { Component } from 'react';
import Ahtear_rahman from '../assets/ahtear_small_1.jpg';
import facebook from '../assets/facebook-icon.png';
import linkedin from '../assets/linkedin-app-icon.png';
import whatsapp from '../assets/wa-whatsapp-icon.png';

import './Home.scss';

function Home() {

    return (
        <div className='card home rounded-0 border-0 mt-5 pt-3 d-flex flex-row'>

            <div className="card-body text-white glass-card border-0 rounded-0 shadow-lg">
                <h4 className="card-title">MD AHTEAR RAHMAN</h4>
                <img className="card-img-bottom rounded-circle profile_pic border-1 border border-warning" src={Ahtear_rahman} alt="Card image" />

                <div className='d-flex flex-column'>
                    <span className="text-warning m-0 fw-bold p-font-size-degination mt-3">{'Senior Full-Stack Software Engineer'}</span>
                    <span className="text-info fw-bold p-font-size-tech d-flex align-items-center justify-content-center mb-1">{'[ C#.NET, .NET CORE | React | Angular ]'}</span>
                    {/* <p className="text-info m-0 fw-bold p-font-size-tech">{'[ Napco Security Technologies - USA ]'}</p> */}
                    <div className='border border-0 border-bottom w-100 mb-2 border-warning'></div>
                    <span className="p-font-size">{'C# .NET, .NET Core, ASP.NET MVC, Microservice,'}</span>
                    <span className="p-font-size">{'RabbitMQ, Ocelot, JWT Token | ReactJs, Angular,'}</span>
                    <span className="p-font-size">{'Typescript, JavaScript| Azure DevOps, Docker,'}</span>
                    <span className="p-font-size">{'Kubernetes, Minikube, Microk8s, Kafka | Python, FastAPI'}</span>
                </div>
                    <div className='mt-auto d-flex flex-column'>
                        <span className='text-info fw-bold p-font-size-tech d-flex align-items-center justify-content-center mb-1'>Contact (Dhaka, Bangladesh.)</span>
                        <div className='border border-0 border-bottom w-100 mb-2 border-warning'></div>
                        <span className='p-font-size'>{'Cell : +8801728706930, +8801516162081'}</span>
                        <span className='p-font-size'>{'Email : Atik0172870@gmail.com, Atik017287069@gmail.com'}</span>
                        <span className='p-font-size'>{'LinkedIn : https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/'}</span>
                        <span className='p-font-size'>{'GitHub : https://github.com/Atik0172870'}</span>
                        <span className='p-font-size'>{'CV_Link : https://atik0172870.github.io/ahtear-resume'}</span>
                    </div>

                <div className='mt-auto d-flex gap-4'>
                    <a href='https://www.facebook.com/share/1HciuJSaVV/' target='_blank' title='Facebook'>    <img src={facebook} height={25} /></a>
                    <a href='https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/' target='_blank' title='LinkedIn'>    <img src={linkedin} height={25} /></a>
                    <a href='https://api.whatsapp.com/send?phone=8801516162081' target='_blank' title={"What's app => 8801516162081"}><img src={whatsapp} height={25} /></a>
                </div>
                <span className='mt-2 text-info'>	&copy; {new Date().getFullYear()}{' All Right Reserved.'}</span>
            </div>
        </div>
    )
}

export default Home;