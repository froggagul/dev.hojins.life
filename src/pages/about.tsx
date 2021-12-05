import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import profile from '../images/profile.jpg';
import './about.sass';

const AboutPage = () => {
  const a = 1;
  console.log(a);

  return (
    <Layout>
      <SEO title="about" />
      <section className="about">
        <h1>Hojin Jung</h1>
        <h2>정호진</h2>
        <img
          src={profile}
          alt="profile"
          className="profile"
        />
        <p className="center">
          Undergraduate student
          <br />
          Korea University.
        </p>
        <hr />
        <p>
          I am a 3rd year undergraduate at Korea University.
        </p>
        <h2>Interests</h2>
        <p>
          I am interested in provide diversity to society
          by enhancing information accessibility
          by using technology.
        </p>
        <p>
          From surfing the web without visual information,
          {/* to providing personalized career choices, */}
          to finding blind spots in the welfare system,
          I hope that technology can enhance individual decision-making processes.
        </p>
        <h2>I&apos;m studing on...</h2>
        <p>
          1. Image Captioning 2. Reinforcement Learning.
          I belive these technologies are solution to my interests.
        </p>
        <h2>Projects</h2>
        <p>
          coming soon...
        </p>
        <h2>Publications</h2>
        <p>
          coming soon...
        </p>
        <h2>Educations</h2>
        <p>
          <b>Korea University</b>
          , Seoul, Republic of Korea (2019 - Present)
          <br />
          Deprtment of Cyber Defense
        </p>
        <p>
          <b>Seoul Science High School</b>
          , Seoul, Republic of Korea (2016 - 2018)
        </p>
        <p>
          {/* Resume link in latex */}
        </p>
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    localSearchPages {
      index
      store
    }
  }
`;

export default AboutPage;
