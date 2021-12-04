import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexRoute = () => {
  const a = 1;
  console.log(a);

  return (
    <Layout>
      <SEO title="about" />
      <section className="About">
        <h1>Hojin Jung</h1>
        <h1>정호진</h1>
        <p>
          {/* 내 소개 및 소속 */}
          Undergraduate student at Korea University.
          <br />
          {/* 내 목표 */}
          {/* 어떤 공부를 해왔는지 */}
          {/* 내가 어떤 공부를 하고 있는지 */}
          {/* Resume in latex */}
          {/* Projects */}
          {/* Publications */}
          {/* Education */}
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

export default IndexRoute;
