import React from 'react';
import { graphql } from 'gatsby';
import useFlexSearch from '../components/hooks/useFlexSearch';
import Layout from '../components/layout';
import SearchBar from '../components/search';
import Post from '../components/post';

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

const IndexRoute = ({
  data: {
    localSearchPages: { index, store },
  },
}: IndexRouteProps) => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('query');
  const [searchQuery, setSearchQuery] = React.useState(query || '');
  const results = useFlexSearch(searchQuery, index, store, { offset: 2 });

  return (
    <Layout>
      <SearchBar query={searchQuery} setQuery={setSearchQuery} />
      {results?.map((post) => (
        <Post title={post.title} link={post.path} series={post.series ? `${post.series} Ep. ${post.ep}` : null} key={post.id} />
      ))}
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
