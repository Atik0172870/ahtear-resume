import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Technology.scss';

function Home() {

    return (
        <div className='card technology rounded-0 border-0 mt-5 pt-4'>
            <div className='main-card card-body'>
                <div className="glass-card">
                    <h3 className='text-warning m-0'>Back-End Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; C#.NET, ASP.NET Core, .NET Core</li>
                        <li>&#9758; Web API, ASP.NET MVC</li>
                        <li>&#9758; Microservices, Ocelot</li>
                        <li>&#9758; JWT Token, SignalR, Swagger</li>
                        <li>&#9758; Azure Functions, Azure Service Bus</li>
                        <li>&#9758; RabbitMQ, Apache Kafka, </li>
                        <li>&#9758; Redis ,LINQ, Entity framwork</li>

                    </ul>
                </div>
                <div className="glass-card">
                    <h3 className='text-warning m-0'>Client-Side Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; ReactJs, Angular, Typescript</li>
                        <li>&#9758; JavaScript, AngularJS, jQuery</li>
                        <li>&#9758; AJAX, Redux, NgRx, RxJS, NgRx</li>
                        <li>&#9758; Material UI, Bootstrap 5</li>
                        <li>&#9758; HTML5, CSS3, SASS, LESS</li>
                        <li>&#9758; SCSS, Tailwind CSS</li>
                    </ul>
                </div>
                <div className="glass-card" >
                    <h3 className='text-warning m-0'>Database</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; MS SQL Server, ORACLE 11g</li>
                        <li>&#9758; MY SQL, SQLite, PostgreSQL</li>
                        <li>&#9758; MongoDB (Document-based)</li>
                        <li>&#9758; DynamoDB (AWS-managed NoSQL)</li>
                        <li>&#9758; Azure Cosmos DB</li>
                        <li>&#9758; Azure SQL Database</li>

                    </ul>
                </div>
                <div className="glass-card">
                    <h3 className='text-warning m-0'>DevOps Things</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; Azure, Docker</li>
                        <li>&#9758; Azure DevOps, Jenkins</li>
                        <li>&#9758; Docker hub,Docker Compose</li>
                        <li>&#9758; Kubernetes, Minikube, MicroK8s</li>
                    </ul>
                </div>

                <div className="glass-card" >
                    <h3 className='text-warning m-0'>Source Control</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li>&#9758; Azure DevOps, GitHub</li>
                        <li>&#9758; Git, GitLab, Bitbucket</li>
                        <li>&#9758; SVN, TFS, SourceTree</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;