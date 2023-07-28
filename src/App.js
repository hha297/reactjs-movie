import { Fragment } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import MovieCard from './components/movie/MovieCard';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/scss';
import MovieList from './components/movie/MovieList';
import Banner from './components/banner/Banner';
import Header from './layouts/Header';
import Main from './layouts/Main';
import HomePage from './pages/HomePage';
import MoviePage from './pages/MoviePage';
import MovieDetailsPage from './pages/MovieDetailsPage';

function App() {
    return (
        <Fragment>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route
                        path="/"
                        element={
                            <>
                                <Banner />
                                <HomePage />
                            </>
                        }
                    ></Route>
                    <Route path="/movie" element={<MoviePage />}></Route>
                    <Route path="/movie/:movieId" element={<MovieDetailsPage />}></Route>
                </Route>
            </Routes>
        </Fragment>
    );
}

export default App;
