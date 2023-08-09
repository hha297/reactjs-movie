import React from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../../apiConfig/config';

//  https://api.themoviedb.org/3/movie/now_playing
// API KEY=5504b60886ea3b781bb83f3415f99a3d

const MovieList = ({ type = 'now_playing' }) => {
    const { data } = useSWR(tmdbAPI.getMovieList(type), fetcher);

    const movies = data?.results || [];
    return (
        <div className="movie-list">
            <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
                {movies.length > 0 &&
                    movies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieList;
