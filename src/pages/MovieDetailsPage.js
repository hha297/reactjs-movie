import React from 'react';
import { useParams } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher, tmdbAPI } from '../config';
// import Swiper from 'swiper/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import MovieCard from '../components/movie/MovieCard';

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieDetails(movieId), fetcher);
    if (!data) return null;
    const { backdrop_path, poster_path, title, genres, overview } = data;
    return (
        <div className="py-10">
            <div className="w-full h-[716px] relative">
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div
                    className="w-full h-screen bg-cover bg-no-repeat"
                    style={{ backgroundImage: `url(${tmdbAPI.imageOrg(backdrop_path)})` }}
                ></div>
            </div>
            <div className="h-[400px] w-[400px] mx-auto -mt-[240px] relative z-10 ">
                <img src={tmdbAPI.imageOrg(poster_path)} alt="" className="w-full h-full object-cover rounded-full" />
            </div>
            <h1 className="text-center text-3xl font-bold text-white my-8">{title}</h1>
            {genres.length > 0 && (
                <div className="flex item-center justify-center gap-x-5 mb-10">
                    {genres.map((item) => (
                        <span
                            key={item.id}
                            className="p-y-2 px-4 border-primary text-primary border rounded cursor-pointer hover:bg-gray-100"
                        >
                            {item.name}
                        </span>
                    ))}
                </div>
            )}
            <p className="text-center text-sm leading-relaxed max-w-[800px] mx-auto mb-10">{overview}</p>
            <MovieCredits></MovieCredits>
            <MovieVideos></MovieVideos>
            <MovieSimilar></MovieSimilar>
        </div>
    );
};

function MovieCredits() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieType(movieId, 'credits'), fetcher);
    if (!data) return null;
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    console.log(cast);
    return (
        <div>
            <h2 className="text-center text-3xl mb-10">Cast</h2>
            <div className="grid grid-cols-8 gap-5">
                {cast.slice(0, 16).map((item) => (
                    <div className="cast-item " key={item.id}>
                        <img
                            src={tmdbAPI.imageOrg(item.profile_path)}
                            alt=""
                            className="w-[120px] h-[120px] object-cover rounded-full ml-6 mb-3"
                        />
                        <h3 className="text-xl font-medium text-center mb-3">{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

//<iframe width="885" height="498" src="https://www.youtube.com/embed/pIhAC2jkvhM" title="Eustass &quot;Captain&quot; Kid – Kẻ Điên Đi Trong Đêm Tối | Cảm nhân vật One Piece" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
function MovieVideos() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieType(movieId, 'videos'), fetcher);
    if (!data) return null;
    const { results } = data;
    if (!results || results.length <= 0) return null;
    return (
        <div className="py-10">
            <div className="flex flex-col gap-5">
                {results.slice(0, 3).map((item) => (
                    <div className="" key={item.id}>
                        <h3 className="mb-5 text-xl text-white p-3 bg-secondary inline-block">{item.name}</h3>
                        <div key={item.id} className="w-full aspect-video">
                            <iframe
                                width="485"
                                height="498"
                                src={`https://www.youtube.com/embed/${item.key}`}
                                title="Youtube"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                className="w-full h-full object-fill mb-10 rounded-lg"
                            ></iframe>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function MovieSimilar() {
    const { movieId } = useParams();
    const { data } = useSWR(tmdbAPI.getMovieType(movieId, 'similar'), fetcher);
    if (!data) return null;
    const { results } = data;
    if (!results || results.length <= 0) return null;
    return (
        <div className="py-10">
            <h2 className="text-3xl font-medium mb-10">Similar movies</h2>
            <div className="movie-list">
                <Swiper grabCursor={'true'} spaceBetween={40} slidesPerView={'auto'}>
                    {results.length > 0 &&
                        results.map((item) => (
                            <SwiperSlide key={item.id}>
                                <MovieCard item={item}></MovieCard>
                            </SwiperSlide>
                        ))}
                </Swiper>
            </div>
        </div>
    );
}
export default MovieDetailsPage;
