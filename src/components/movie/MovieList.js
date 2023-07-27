import React, { useEffect, useState } from 'react';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieCard from './MovieCard';
import useSWR from 'swr';
import { fetcher } from '../../config';

//  https://api.themoviedb.org/3/movie/now_playing
// API KEY=5504b60886ea3b781bb83f3415f99a3d

const MovieList = ({ type = 'now_playing' }) => {
    const [movies, setMovies] = useState([]);
    const { data, error } = useSWR(
        `https://api.themoviedb.org/3/movie/${type}?api_key=5504b60886ea3b781bb83f3415f99a3d`,
        fetcher,
    );

    useEffect(() => {
        if (data && data.results) setMovies(data.results);
    }, [data]);
    console.log(movies);
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
