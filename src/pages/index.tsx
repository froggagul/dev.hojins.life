import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

interface IndexRouteProps {
  data: {
    localSearchPages: {
      index: string,
      store: {
        [id: string]: {
          id: string,
          title: string,
          date: string,
          path: string,
          series?: string,
          ep?: number | string,
        }
      },
    }
  }
}

const IndexRoute = () => {
  return (
    <Layout>
      <SEO title="home" />
      <h1>coming soon...</h1>
      
      {/* 이름, 영어 */}
      {/* 사진 */}
      {/* contact */}
      {/* 내 목표 */}
      {/* 내 소속 */}
      {/* education */}
      {/* project */}
      {/* publications if exists */}
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
