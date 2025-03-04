import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Technology.scss';

function Home() {

    return (
        <div className='card technology rounded-0 border-0 mt-5 pt-4'>
            <div className='main-card card-body'>
                <div className="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>Back-End Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; C#.NET, ASP.NET Core, .NET Core</li>
                        <li>&#9758; Microservices Ocelot, JWT Token, </li>
                        <li>&#9758; RabbitMQ, Apache Kafka ASP.NET MVC, </li>
                        <li>&#9758; Web API, Redis ,LINQ, Entity framwork</li>

                    </ul>
                </div>
                <div className="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>Client-Side Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; ReactJs, Angular, Typescript,JavaScript</li>
                        <li>&#9758; AngularJS, jQuery, AJAX</li>
                        <li>&#9758; Bootstrap 5, HTML5, CSS3,SASS</li>
                    </ul>
                </div>
                <div className="glass-card shadow-lg" >
                    <h3 className='text-warning m-0'>Database</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; MS SQL Server, ORACLE 11g, MY SQL,</li>
                        <li>&#9758; SQLite, PostgreSQL</li>
                        <li>&#9758; MongoDB (Document-based)</li>
                        <li>&#9758; DynamoDB (AWS-managed NoSQL)</li>
                    </ul>
                </div>
                <div className="glass-card shadow-lg">
                    <h3 className='text-warning m-0'>DevOps Things</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; Azure, Docker</li>
                        <li>&#9758; Kubernetes, Minikube, MicroK8s</li>
                    </ul>
                </div>

                <div className="glass-card shadow-lg" >
                    <h3 className='text-warning m-0'>Source Control</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; Azure DevOps, GitHub, Bitbucket</li>
                        <li>&#9758; SVN, TFS, SourceTree</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;