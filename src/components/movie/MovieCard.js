import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../button/Button';
import { tmdbAPI } from '../../config';

const MovieCard = ({ item }) => {
    const { title, poster_path, release_date, vote_average, id } = item;
    const navigate = useNavigate();
    return (
        <div className="movie-card h-full flex flex-col rounded-lg p-3 bg-slate-800 text-white select-none">
            <img src={tmdbAPI.image500(poster_path)} alt="" className="w-full h-[250px] object-cover rounded-lg mb-5" />
            <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <div className="flex item-center justify-between text-sm opacity-50 mb-10">
                    <span>{new Date(release_date).getFullYear()}</span>
                    <span>{vote_average}</span>
                </div>
                <Button onClick={() => navigate(`/movie/${id}`)}>Watch Now</Button>
            </div>
        </div>
    );
};

export default MovieCard;
