/* import React ,{useState , useEffect} from "react"; */

// import { useAuth } from "../../../auth/context/AuthProvider";
import Banner from "../components/banner/Banner";
// import Slider from "../../../common/components/slider/Slider";
// import useFetch from "../../../common/hooks/useFetch";
// import { getPopularMovies } from "../services/getPopularMovies";
import useFetch from "../customHooks/useFetch";
import getPopularMovies from "../features/movies/utils/getPopularMovies";
import Slider from "../components/slider/Slider";
import getTopRatedMovies from "../features/movies/utils/getTopRatedMovies";
import getPopularseries from "../features/series/utils/getPopularSeries";
import getTopRatedSeries from "../features/series/utils/getTopRatedSeries";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect } from "react";
import styles from "./Browse.module.css";

const Browse = () => {
  const { data: popularMovies } = useFetch(getPopularMovies);

  const { data: topRatedMovies } = useFetch(getTopRatedMovies);

  const { data: popularSeries } = useFetch(getPopularseries);

  const { data: TopRatedSeries } = useFetch(getTopRatedSeries);

  //   const { isAuth, login, logout } = useAuth();
  //   console.log(isAuth, login, logout);

  const { isAuth, user } = useContext(AuthContext);
  console.log(isAuth, user.email);

 /*  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]); */
  
  /* Hace un useEffect que cambie de valor del array aleatoriamente */
  

  return (
    <>
      <Banner item={popularMovies[0]} />
      <div className={styles.titleStyle}>Películas más vistas</div>
      <Slider items={popularMovies} />
      <div className={styles.titleStyle}>Películas mejor valoradas</div>
      <Slider items={topRatedMovies} />
      <div className={styles.titleStyle}>Series más vistas</div>
      <Slider items={popularSeries} />
      <div className={styles.titleStyle}>Series mejor valoradas</div>
      <Slider items={TopRatedSeries} />
    </>
  );
};

export default Browse;
