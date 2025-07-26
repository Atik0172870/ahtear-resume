import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Technology.scss';
import { skillsData } from './technology-data';

function Home() {
    // --- Helper component for individual progress bars ---
    // This component now uses linear gradients for a more modern look.
    const SkillProgressBar = ({ name, percentage }) => {
        // Determine the background style for the progress bar based on the percentage
        const getBarStyle = (p) => {
            let backgroundStyle;
            if (p < 85) { // 80%
                // A warm, foundational gradient
                backgroundStyle = 'linear-gradient(to right, #ff9966, #ff5e62)';
            } else if (p < 90) { // 85%
                // A cool, proficient gradient
                backgroundStyle = 'linear-gradient(to right, #43cea2, #185a9d)';
            } else { // 90%
                // A vibrant, mastery gradient
                backgroundStyle = 'linear-gradient(to right, #6641ecff, #a8e063)';
            }
            return {
                width: `${percentage}%`,
                background: backgroundStyle,
            };
        };

        return (
            <div className="mb-1 skillProgressBar-body">
                <div className="d-flex justify-content-between">
                    <span>{name}</span>
                    <span>{percentage}%</span>
                </div>
                <div className="progress overflow-auto" style={{ height: '20px', backgroundColor: '#e9ecef' }}>
                    <div
                        className="progress-bar progress-bar-striped"
                        role="progressbar"
                        style={getBarStyle(percentage)}
                        aria-valuenow={percentage}
                        aria-valuemin="0"
                        aria-valuemax="100"
                    ></div>
                </div>
            </div>
        );
    };

    // --- Helper component for the skill category cards ---
    const SkillCategoryCard = ({ title, skills }) => (
        //   <div className="card shadow-sm mb-4 h-100">
        //     <div className="card-header bg-dark text-white">
        //       <h4 className="mb-0">{title}</h4>
        //     </div>
        //     <div className="card-body">
        //       {skills.map((skill) => (
        //         <SkillProgressBar key={skill.name} name={skill.name} percentage={skill.percentage} />
        //       ))}
        //     </div>
        //   </div>
        <div className="glass-card" >
            <h3 className='text-warning m-0'>{title}</h3>
            <hr className='text-warning' />
            <div className='skill h-100 overflow-auto p-2'>
                {skills.map((skill) => (
                    <SkillProgressBar key={skill.name} name={skill.name} percentage={skill.percentage} />
                ))}
            </div>

        </div>
    );

    return (
        <div className='card technology rounded-0 border-0 mt-5 pt-4'>
            <div className='main-card card-body'>
                <SkillCategoryCard title="Back-End Technology" skills={skillsData.backend} />
                <SkillCategoryCard title="Database Technology" skills={skillsData.database} />
                <SkillCategoryCard title="Client-Side Technology" skills={skillsData.frontend} />
                <SkillCategoryCard title="DevOps Things" skills={skillsData.devops} />
                <SkillCategoryCard title="Source Control" skills={skillsData.sourceControl} />


            </div>
        </div>
    )
}

export default Home;