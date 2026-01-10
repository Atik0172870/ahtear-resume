import React, { Component } from 'react';
import Ahtear_rahman from '../assets/ahtear_small_1.jpg';
import facebook from '../assets/facebook-icon.png';
import linkedin from '../assets/linkedin-app-icon.png';
import whatsapp from '../assets/wa-whatsapp-icon.png';

import './Home.scss';

function Home() {

    return (
        <div className='card home rounded-0 border-0 mt-4 pt-3 d-flex flex-row aligin-items-center justify-content-center'>

            <div className="card-body text-white glass-card border-0 rounded-0 shadow-lg">
                <h4 className="card-title">MD AHTEAR RAHMAN</h4>
                <img className="card-img-bottom rounded-circle profile_pic border-1 border border-warning" src={Ahtear_rahman} alt="Card image" />
                <p className="text-warning m-0 fw-bold p-font-size-degination mt-1">{'Senior Principle Software Engineer(Manager)'}</p>
                <p className="text-info p-font-size-tech m-0 mb-2">{'[ C#.NET, .NET CORE | React | Angular ]'}</p>
                <div className='border border-0 border-bottom w-100 mb-2 border-warning'></div>
                {/* <p className="text-info m-0 fw-bold p-font-size-tech">{'[ Napco Security Technologies - USA ]'}</p> */}
                <span>
                    <p className="text-white p-font-size m-0">{'C# .NET, .NET Core, ASP.NET MVC, Microservice,'}</p>
                    <p className="text-white p-font-size m-0">{'RabbitMQ, Ocelot, JWT Token | ReactJs, Angular,'}</p>
                    <p className="text-white p-font-size m-0">{'Typescript, JavaScript| Azure DevOps, Docker,'}</p>
                    <p className="text-white p-font-size m-0">{'Kubernetes, Minikube, Microk8s, Kafka | Python, FastAPI'}</p>
                </span>
                <div className='mt-auto  mb-0 d-flex flex-column contact-info ps-3'>
                    <span className='text-info fw-bold p-font-size-tech d-flex align-items-center justify-content-center mb-1'>Contact (Dhaka, Bangladesh.)</span>
                    <div className='border border-0 border-bottom w-100 mb-2 border-warning'></div>
                    <span className='m-0 p-font-size'>Cell : +8801728706930, +8801516162081</span>
                    <span className='m-0 p-font-size'>Email : Atik0172870@gmail.com, Atik017287069@gmail.com</span>
                    <span className='m-0 p-font-size'>LinkedIn : https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/</span>
                    <span className='m-0 p-font-size'>GitHub : https://github.com/Atik0172870</span>
                    <span className='m-0 p-font-size mt-3'></span>

                </div>
                <div className='mt-auto d-flex gap-4'>
                    <a href='https://www.facebook.com/share/1HciuJSaVV/' target='_blank' title='Facebook'>    <img src={facebook} height={25} /></a>
                    <a href='https://www.linkedin.com/in/md-ahtear-rahman-b8043a15a/' target='_blank' title='LinkedIn'>    <img src={linkedin} height={25} /></a>
                    <a href='https://api.whatsapp.com/send?phone=8801516162081' target='_blank' title={"What's app => 8801516162081"}><img src={whatsapp} height={25} /></a>
                </div>
                <span className='mt-2 text-info'>	&copy; {new Date().getFullYear()}{' All Right Reserved.'}</span>
            </div>
            <div className='d-flex align-items-center w-100'>
                <span className='typewriter fw-bold fs-3'>Senior Principle Software Engineer</span>
            </div>
        </div>
    )
}

export default Home;