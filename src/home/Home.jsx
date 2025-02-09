import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import Ahtear_rahman from '../assets/linkedIn-pic-small.png';

import './Home.scss';

function Home() {

    return (
        <div className='card home rounded-0 border-0 mt-5 d-flex justify-content-end align-items-end'>
            <div class="card-body text-white glass-card border-0 rounded-0 shadow-lg">
                <h4 class="card-title">MD AHTEAR RAHMAN</h4>
                {/* <p class="card-text m-1">{'[ Senior Full-Stack Software Engineer (.NET | React | Angular) ]'}</p>
                <p class="card-text m-1">{'[ C# .NET, ASP.NET MVC,.NET Core, Microservice, RabbitMQ , Ocelot, JWT Token |'}</p>
                <p class="card-text m-1">{'ReactJs, Angular,Typescript, JavaScript | Azure DevOps, Docker, Kubernetes, Minikube, Microk8s ]'}</p>
                <p class="card-text m-1">[ Senior Full-Stack Software Engineer (.NET | React | Angular) ]</p>
                <p class="card-text m-1">[ Senior Full-Stack Software Engineer (.NET | React | Angular) ]</p> */}
                <img class="card-img-bottom rounded-circle profile_pic border-1 border" src={Ahtear_rahman} alt="Card image" />
                <p class="text-warning m-0 fw-bold p-font-size-degination">{'Senior Full-Stack Software Engineer'}</p>
                <p class="text-info p-font-size-tech m-0">{'(.NET, .NET CORE | React | Angular)'}</p>
                <p class="text-white p-font-size m-0">{'[ C# .NET, ASP.NET MVC,.NET Core,Microservice, RabbitMQ ,'}</p>
                <p class="text-white p-font-size m-0">{' Ocelot, JWT Token | ReactJs, Angular,Typescript ,JavaScript '}</p>
                <p class="card-text text-white p-font-size m-0">{'| Azure DevOps, Docker, Kubernetes, Minikube, Microk8s ]'}</p>
                 
            </div>
        </div>
    )
}

export default Home;