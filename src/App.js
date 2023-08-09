import { Fragment, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import 'swiper/scss';

import Banner from './components/banner/Banner';

import Main from './layouts/Main';

const HomePage = lazy(() => import('./pages/HomePage'));
const MovieDetailsPage = lazy(() => import('./pages/MovieDetailsPage'));
const MoviePage = lazy(() => import('./pages/MoviePage'));
//const MoviePage = lazy(() => import('./pages/MoviePageV2'));

function App() {
    return (
        <Fragment>
            <Suspense fallback={<></>}>
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
            </Suspense>
        </Fragment>
    );
}

export default App;
