import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Home.scss';

function Home() {

    return (
        <div className='card home h-100 rounded-0 border-0'>
            <div className='wel-come card-body d-flex'>
                <div class="glass-card">
                    <h3>Back-End Technology</h3>
                    <ul>
                        <li>C#.NET, ASP.NET Core</li>
                        <li>.NET Core Microservices, Ocelot</li>
                        <li>JWT Token, RabbitMQ</li>
                        <li>ASP.NET MVC, Web API</li>
                        <li>LINQ, MS SQL Server, MySQL</li>
                    </ul>
                </div>
                <div class="glass-card">
                    <h3>DevOps Things</h3>
                    <ul>
                        <li>Docker, Kubernetes, Minikube</li>
                        <li>MicroK8s, Azure</li>
                    </ul>
                </div>
                <div class="glass-card">
                    <h3>Client-Side Technology</h3>
                    <ul>
                        <li>ReactJs, Angular, Typescript</li>
                        <li>AngularJS, jQuery</li>
                        <li>JavaScript, AJAX, SASS</li>
                        <li>Bootstrap 5, HTML5, CSS3</li>
                    </ul>
                </div>
                <div class="glass-card">
                    <h3>Source Control</h3>
                    <ul>
                        <li>GitHub, Bitbucket, SVN</li>
                        <li>Azure DevOps, TFS</li>
                        <li>SourceTree</li>
                    </ul>
                </div>
                {/* <span className='text-uppercase text-warning fw-semibold'>Welcome To My Profile</span>
                <span className='text-uppercase text-dark fw-semibold'>MD AHTEAR RAHMAN</span>
                <span className='text-uppercase text-info fw-semibold' style={{fontSize:'12px'}}>[ Senior Full-Stack Software Engineer (.NET | React | Angular) ]</span> */}
            </div>
            {/* <img src={profile_pic} alt='test' className='mt-5 mx-auto d-flex justify-content-center home-profile-pic' /> */}
        </div>
    )
}

export default Home;