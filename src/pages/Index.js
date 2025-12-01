import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Brandon Hale's personal website. Perth, Australia based Software Engineer."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            Welcome to my portfolio — showcasing my expertise as a Software Engineer
            specialising in full-stack development, AI-driven solutions, and legacy
            system modernisation. Here you&apos;ll find my professional journey, from
            delivering enterprise applications with .NET and React to implementing
            cutting-edge Azure AI solutions.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my portfolio. Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        view some <Link to="/stats">stats</Link> about me, or{' '}
        <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
