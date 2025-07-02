import React from "react";
import { useNavigate } from "react-router-dom";
const image_path = import.meta.env.VITE_TMDB_IMAGE_PATH;
function TrandingSction({ moviesByGenre, categories }) {
  const navigate = useNavigate();
  // console.log(moviesByGenre)
 
  return (
    <section className="pt-4 px-4 md:px-12 bg-black pb-4">
      <h2 className="text-2xl font-bold mb-6 text-white">{categories}</h2>
      <div className="flex overflow-x-scroll">
        {moviesByGenre.map((movie) => (
          <div
            key={movie.id}
            onClick={() => navigate(`/play/${movie.id}`)}
            className="flex-shrink-0 w-64 h-36 relative mr-4 cursor-pointer hover:scale-110 transition duration-700"
          >
            <img
              src={image_path + movie.backdrop_path}
              alt={movie.title}
              className="w-full h-auto rounded-md transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-md">
              <p className="text-center px-2 text-sm">{movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TrandingSction;
