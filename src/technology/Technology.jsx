import React from 'react';
import './Technology.scss';
import { skillsData } from './technology-data';

function SkillCategoryCard({ title, skills }) {
    return (
        <div className="glass-card">
            <h3 className='text-warning m-0'>{title}</h3>
            <hr className='text-warning' />
            <ul>
                {skills.map((skill) => (
                    <li key={skill.name}><span className="text-warning">&#9758;</span> {skill.name}</li>
                ))}
            </ul>
        </div>
    );
}

function Home() {

    return (
        <div className='card technology rounded-0 border-0 mt-4 pt-4'>
            <div className='main-card card-body'>
                <SkillCategoryCard title="Back-End Technology" skills={skillsData.backend} />
                <SkillCategoryCard title="Architecture & Patterns" skills={skillsData.architecture} />
                <SkillCategoryCard title="Client-Side Technology" skills={skillsData.frontend} />
                <SkillCategoryCard title="Database" skills={skillsData.database} />
                <SkillCategoryCard title="DevOps Things" skills={skillsData.devops} />
                <SkillCategoryCard title="Testing & Observability" skills={skillsData.testing} />
                <SkillCategoryCard title="Source Control" skills={skillsData.sourceControl} />
                <SkillCategoryCard title="Tools & AI Assistants" skills={skillsData.tooling} />
            </div>
        </div>
    )
}

export default Home;
