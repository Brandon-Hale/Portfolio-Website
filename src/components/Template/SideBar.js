import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Brandon Hale</h2>
        <p>
          <a href="mailto:bhale@outlook.com.au">bhale@outlook.com.au</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Brandon. I am a Software Engineer from {' '}
        <a href="https://www.curtin.edu.au/" target="noopener">Curtin University</a>, skilled in .NET, TypeScript & React for modernising systems & websites.
        Currently working at{' '}
        <a href="https://aimwa.com/" target="noopener">Australian Institute of Management WA</a> as a Full Stack .NET Software Developer.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Brandon Hale <Link to="/">bhale.com</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
