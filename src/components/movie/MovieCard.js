import React from 'react';

const MovieCard = ({ item }) => {
    const { title, poster_path, release_date, vote_average } = item;
    return (
        <div className="movie-card h-full flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none">
            <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt=""
                className="w-full h-[250px] object-cover rounded-lg mb-5"
            />
            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <div className="flex item-center justify-between text-sm opacity-50 mb-10">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <button className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium mt-auto">
                    Watch Now
                </button>
            </div>
        </div>
    );
};

export default MovieCard;
