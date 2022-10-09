import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Imovie {
  id: number;
  original_title: string;
  poster_path: string;
}

export default function Home({
  results,
}: InferGetServerSidePropsType<GetServerSideProps>) {
  const router = useRouter();
  const move = (movie: Imovie) => {
    router.push(`/movies/${movie.original_title}/${movie.id}`);
  };
  return (
    <div>
      <Head>
        <title>Home | Next Movie</title>
      </Head>
      <div className="container">
        {results?.map((movie: Imovie) => (
          <div onClick={() => move(movie)} key={movie.id}>
            <div className="movie">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <h4>{movie?.original_title}</h4>
            </div>
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
export async function getServerSideProps() {
  const data = await fetch(`http://localhost:3000/api/movies`);
  const { results } = await data.json();
  return {
    props: {
      results,
    },
  };
}
