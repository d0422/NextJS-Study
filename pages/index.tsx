import Head from "next/head";
import { useEffect, useState } from "react";

interface Imovie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home() {
  const [movies, setMovies] = useState<Imovie[]>([]);
  useEffect(() => {
    fetch("/api/movies")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);
  console.log(movies);
  return (
    <div>
      <Head>
        <title>Home | Next Movie</title>
      </Head>
      <div className="container">
        {movies?.map((movie) => (
          <div className="movie" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <h4>{movie?.original_title}</h4>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
