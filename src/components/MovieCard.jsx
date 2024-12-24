import React from 'react';

const MovieCard = ({ allMovieData = [], loading }) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!allMovieData || allMovieData.length === 0) {
    return <div>No movies found. Try searching for something else!</div>;
  }

  return (
    <div>
      <div className='main flex px-4 flex-wrap lg:px-10'>
        {allMovieData.map((item, index) => {
          const { Poster, Title, Year } = item;
          return (
            <div key={index} className='child p-2 lg:w-1/4 w-full'>
              <div className='sub_child bg-[#40407a] p-3 rounded-2xl'>
                <img src={Poster} alt="img" className='w-full rounded-lg mb-2' />
                <h2 className='text-white text-xl font-bold'>{Title}</h2>
                <h2 className='text-white text-lg mb-2'>Year: {Year}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieCard;
