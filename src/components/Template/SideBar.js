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
        Hi, I&apos;m Brandon. I&apos;m a Software Engineer specialising in full-stack
        development and AI-driven solutions. Currently delivering enterprise applications
        at{' '}
        <a href="https://aimwa.com/" target="_blank" rel="noopener noreferrer">
          Australian Institute of Management WA
        </a>{' '}
        using .NET, React, and Azure AI technologies. Passionate about modernising
        legacy systems and building scalable solutions that drive real business value.
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
