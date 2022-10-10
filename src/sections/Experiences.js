import React from 'react';
import Experience from '../data/Experience-Data';
import '../styles/Experience.css';

export default function Experiences() {
  return (
    <>
      <h3>Experience 💼</h3>
      <div className="content">
        {Experience.map((item) => (
          <div className='infos'>
            <h4>{item.entreprise} - <span>{item.year} :</span></h4>
            <p>{item.mission}</p>
          </div>
        ))}
      </div>
    </>
  );
}
