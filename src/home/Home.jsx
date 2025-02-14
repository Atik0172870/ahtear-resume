import React, { Component } from 'react';
import Ahtear_rahman from '../assets/ahtear_small_1.jpg';

import './Home.scss';

function Home() {

    return (
        <div className='card home rounded-0 border-0 mt-5 pt-3 d-flex justify-content-end align-items-end'>
            <div className="card-body text-white glass-card border-0 rounded-0 shadow-lg">
                <h4 className="card-title">MD AHTEAR RAHMAN</h4>
                <img className="card-img-bottom rounded-circle profile_pic border-1 border border-warning" src={Ahtear_rahman} alt="Card image" />
                <p className="text-warning m-0 fw-bold p-font-size-degination mt-3">{'Senior Full-Stack Software Engineer'}</p>
                <p className="text-info p-font-size-tech m-0 mb-2">{'(.NET, .NET CORE | React | Angular)'}</p>
                <div className='border border-0 border-bottom w-100 mb-2 border-warning'></div>
                {/* <p className="text-info m-0 fw-bold p-font-size-tech">{'[ Napco Security Technologies - USA ]'}</p> */}
                <p className="text-white p-font-size m-0">{'[ C# .NET, ASP.NET MVC,.NET Core,Microservice, RabbitMQ ,'}</p>
                <p className="text-white p-font-size m-0">{' Ocelot, JWT Token | ReactJs, Angular,Typescript ,JavaScript '}</p>
                <p className="text-white p-font-size m-0">{'| Azure DevOps, Docker, Kubernetes, Minikube, Microk8s, Kafka ]'}</p>
                 
            </div>
        </div>
    )
}

export default Home;