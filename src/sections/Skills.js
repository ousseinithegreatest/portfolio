import React from 'react';
import '../styles/Skill.css';
import Skill from '../data/Skills-Data';

export default function Skills() {
  return (
    <div className="skills">
      <h3>Skills 🛠️​</h3>
      <div className="info">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ea
          a placeat animi quam ipsam eos, quaerat necessitatibus inventore
          maiores quod at odit excepturi eveniet reiciendis architecto aut modi
          ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          ea a placeat animi quam ipsam eos, quaerat necessitatibus inventore
          maiores quod at odit excepturi eveniet reiciendis architecto aut modi
          ad? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
          ea a placeat animi quam ipsam eos, quaerat necessitatibus inventore
          maiores quod at odit excepturi eveniet reiciendis architecto aut modi
          ad?
        </p>
        <ul>
          {Skill.map((item) => (
            <li key={item.id}>
              <img src={item.img} alt={item.id} width={48} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
