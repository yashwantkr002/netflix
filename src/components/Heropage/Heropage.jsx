import React from "react";
const image_path= import.meta.env.VITE_TMDB_ORIGINAL_IMAGE
const Heropage = ({trandingImg}) => {
  
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative h-[350px] md:h-[550px] bg-cover bg-center flex items-center justify-center" 
           style={{ backgroundImage: `url(${image_path+trandingImg.backdrop_path})` }}>
        <div className="relative text-center z-10 w-3/4"> 
          <h1 className="text-3xl md:text-5xl font-bold">{trandingImg.title}</h1>
          <p className="text-sm md:text-lg mt-2 h-24 md:h-auto overflow-hidden ">{trandingImg.overview}</p>
          <p className="text-sm md:text-lg mt-2">Release Date: {trandingImg.release_date}</p>
          <p className="text-sm md:text-lg mt-2">Rating: {trandingImg.vote_average}</p>
          <p><input type="button" value="Play"  className="w-24 h-10 rounded-md bg-red-600 text-white cursor-pointer"/> <input type="button" value="More Info"  className="w-24 h-10 rounded-md bg-red-600 text-white cursor-pointer"/></p>
          
        </div>
      </div>

      

      {/* Categories Section */}
      {/* {categories.map((category) => (
        <section key={category.name} className="py-8 px-4 md:px-12">
          <h2 className="text-2xl font-bold mb-6">{category.name}</h2>
          <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
            {category.movies.map((movie) => (
              <div key={movie.id} className="flex-shrink-0 w-40">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-auto rounded-md"
                />
                <p className="text-sm mt-2">{movie.title}</p>
              </div>
            ))}
          </div>
        </section>
      ))} */}
    </div>
  );
};

export default Heropage;
