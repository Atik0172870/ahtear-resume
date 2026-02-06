import React, { Component } from 'react';
import profile_pic from '../assets/linkedIn-pic.png';
import './Project.scss';
import { ProjectData } from './project-data';

function Project() {

    return (
        <div className='card project rounded-0 border-0 mt-4 pt-4'>
            <div className='main-card card-body'>
                {
                    ProjectData.map((item, index) => {
                        return (
                            <div className="glass-card" key={item.name + '_' + index}>
                                <h6 className='text-warning m-0'>{item.name}</h6>
                                <hr className='text-warning' />
                                <div className='h-100 overflow-auto'>
                                    <ul>
                                        {
                                            item.detailsList.map((details, indx) => {
                                                return (
                                                    <li key={indx + 'li'}><span className="text-warning">&#9758;</span> {details}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                {item.git ? (
                                    <>
                                        <hr className="text-warning mb-0" />
                                        <a href={item.git} target='_blank' className="text-white m-0 git-link">Git Link: {item.git} </a>
                                    </>
                                ) : null}

                            </div>
                        )

                    })
                }


            </div>
        </div>
    )
}

export default Project;