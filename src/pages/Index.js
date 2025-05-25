import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description="Brandon Hale's personal website. perth, Australia based Software Engineer."
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">About this site</Link>
          </h2>
          <p>
            This is my personal portfolio site — a space where I share my journey,
            from education and work experience to projects and skills.
            I’ve built it to be simple, easy to navigate,
            and a reflection of who I am and what I enjoy doing in day to day life.
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
