import React from 'react';
import '../styles/Footer.css';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Footer() {
  return (
    <footer>
    <h4>Contact</h4>
      <ul className="info">
        <li>
          <EmailIcon />
          <a href="mailto:ousseinijiko@gmail.com">ousseinijiko@gmail.com</a>
        </li>
        <li>
          <LocalPhoneIcon />
          <a href="tel:+221 77 094 01 13">+221 77 094 01 13</a>
        </li>
        <li>
          <GitHubIcon />
          <a href="https://github.com/ousseinithegreatest" target="blank">
            @ousseinithegreatest
          </a>
        </li>
      </ul>
    </footer>
  );
}
