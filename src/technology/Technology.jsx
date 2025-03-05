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
                        <li><span className="text-warning">&#9758;</span> C#.NET, ASP.NET Core, .NET Core</li>
                        <li><span className="text-warning">&#9758;</span> Web API, ASP.NET MVC</li>
                        <li><span className="text-warning">&#9758;</span> Microservices, Ocelot</li>
                        <li><span className="text-warning">&#9758;</span> JWT Token, SignalR, Swagger</li>
                        <li><span className="text-warning">&#9758;</span> Azure Functions, Azure Service Bus</li>
                        <li><span className="text-warning">&#9758;</span> RabbitMQ, Apache Kafka, </li>
                        <li><span className="text-warning">&#9758;</span> Redis ,LINQ, Entity framwork</li>

                    </ul>
                </div>
                <div className="glass-card">
                    <h3 className='text-warning m-0'>Client-Side Technology</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li><span className="text-warning">&#9758;</span> ReactJs, Angular, Typescript</li>
                        <li><span className="text-warning">&#9758;</span> JavaScript, AngularJS, jQuery</li>
                        <li><span className="text-warning">&#9758;</span> AJAX, Redux, NgRx, RxJS, NgRx</li>
                        <li><span className="text-warning">&#9758;</span> Material UI, Bootstrap 5</li>
                        <li><span className="text-warning">&#9758;</span> HTML5, CSS3, SASS, LESS</li>
                        <li><span className="text-warning">&#9758;</span> SCSS, Tailwind CSS</li>
                    </ul>
                </div>
                <div className="glass-card" >
                    <h3 className='text-warning m-0'>Database</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li><span className="text-warning">&#9758;</span> MS SQL Server, ORACLE 11g</li>
                        <li><span className="text-warning">&#9758;</span> MY SQL, SQLite, PostgreSQL</li>
                        <li><span className="text-warning">&#9758;</span> MongoDB (Document-based)</li>
                        <li><span className="text-warning">&#9758;</span> DynamoDB (AWS-managed NoSQL)</li>
                        <li><span className="text-warning">&#9758;</span> Azure Cosmos DB</li>
                        <li><span className="text-warning">&#9758;</span> Azure SQL Database</li>

                    </ul>
                </div>
                <div className="glass-card">
                    <h3 className='text-warning m-0'>DevOps Things</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li><span className="text-warning">&#9758;</span> Azure, Docker</li>
                        <li><span className="text-warning">&#9758;</span> Azure DevOps, Jenkins</li>
                        <li><span className="text-warning">&#9758;</span> Docker hub,Docker Compose</li>
                        <li><span className="text-warning">&#9758;</span> Kubernetes, Minikube, MicroK8s</li>
                    </ul>
                </div>

                <div className="glass-card" >
                    <h3 className='text-warning m-0'>Source Control</h3>
                    <hr className='text-warning' />
                    <ul>
                        <li><span className="text-warning">&#9758;</span> Azure DevOps, GitHub</li>
                        <li><span className="text-warning">&#9758;</span> Git, GitLab, Bitbucket</li>
                        <li><span className="text-warning">&#9758;</span> SVN, TFS, SourceTree</li>
                        <li></li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Home;