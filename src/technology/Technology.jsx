import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Technology.scss';

function Home() {

    return (
        <div className='card technology rounded-0 border-0 mt-5'>
            <div className='main-card card-body'>
                <div class="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>Back-End Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>C#.NET, ASP.NET Core, .NET Core</li>
                        <li>Microservices Ocelot, JWT Token, </li>
                        <li>RabbitMQ, Apache Kafka ASP.NET MVC, </li>
                        <li>Web API, Redis ,LINQ, Entity framwork</li>

                    </ul>
                </div>
                <div class="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>Client-Side Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>ReactJs, Angular, Typescript,JavaScript</li>
                        <li>AngularJS, jQuery, AJAX</li>
                        <li>Bootstrap 5, HTML5, CSS3,SASS</li>
                    </ul>
                </div>
                <div class="glass-card shadow-lg" >
                    <h3 className='text-warning m-0'>Data Base</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>MS SQL Server, ORACLE 11g, MY SQL,SQLite</li>
                        <li>PostgreSQL, MongoDB (Document-based) </li>
                        <li>DynamoDB (AWS-managed NoSQL)</li>
                    </ul>
                </div>
                <div class="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>DevOps Things</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>Azure, Docker, Kubernetes, Minikube, MicroK8s</li>
                        <li></li>
                    </ul>
                </div>

                <div class="glass-card shadow-lg" >
                    <h3 className='text-warning m-0'>Source Control</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>Azure DevOps, GitHub, Bitbucket, SVN</li>
                        <li>TFS, SourceTree</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;