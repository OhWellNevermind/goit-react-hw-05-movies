import { Container } from 'components/Container';
import { useSearchParams } from 'react-router-dom';
import React from 'react';

import { MovieList } from 'components/List/MovieList';

const Movies = () => {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Container>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setSearchParams({ query: evt.currentTarget.elements.query.value });
        }}
      >
        <input
          name="query"
          className="border-[black] border-[1px] p-1"
          type="text"
          placeholder="Search"
          //   onChange={e => setSearchParams({ query: e.target.value })}
          //   value={searchParams.get('query') ?? ''}
        />
        <button type="submit">Search</button>
      </form>
      {/* {movies.length ? <MovieList listType="search" /> : ''} */}
      <MovieList listType="search" />
    </Container>
  );
};

export default Movies;
