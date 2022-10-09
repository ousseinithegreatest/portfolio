/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Navbar.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArticleIcon from '@mui/icons-material/Article';

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-content">
          <h1>Ousseini Adamou</h1>
          <ul>
            {/* <Link to="">Accueil</Link>
          <Link to="">Skills</Link>
          <Link to="">Accueil</Link> */}
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Skill</a>
            </li>
            <li>
              <a href="#">Project</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="content">
        <img src="./images/hello.svg" alt="hello" width={800}/>
        <div className="text">
          <h3>Hi i'm Ousseini</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            doloremque sit accusamus nostrum pariatur fugiat, quam est ea quo
            impedit magni labore dolore suscipit quae perferendis minus ullam
            vero, nulla asperiores deleniti placeat commodi tempore velit! Odit
            voluptatibus doloremque unde molestiae soluta, ut harum perferendis
            voluptatum nam sed accusantium deserunt excepturi laboriosam eveniet
            quo, nemo in at. Animi, quis aliquid illum ex nemo cupiditate
            corporis ipsa eveniet eligendi? Sed recusandae aperiam sunt modi
            aliquam nisi autem blanditiis!
          </p>
          <div className="btn-group">
              <button>
                <GitHubIcon fontSize='large'/>
              </button>
              <button>
                <ArticleIcon fontSize='large'/>
              </button>
            </div>
        </div>
      </div>
    </header>
  );
}
