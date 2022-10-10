import React from 'react';
import { Link } from 'react-router-dom';
import Project from '../data/Projects-Data';
import '../styles/Project.css';

export default function Projects() {
  console.log(Project);
  return (
    <>
      <h3>Project 📓</h3>
      <div className='row'>
        {
          Project.map(item => (
            <div className='card' key={item.id}>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <a href={item.link} target='blank'>GitHub</a>
            </div>
          ))
        }
      </div>
      <a href="https://github.com/ousseinithegreatest?tab=repositories" id='repos' target='blank'>ALL PROJECTS</a>
    </>
  );
}
