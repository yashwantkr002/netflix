import React,{useState} from "react";
import { useParams } from "react-router-dom";
import tmdb from '../../conf/conf';
import axios from "axios";
function PlayContainer({}) {
  const { id } = useParams();
  const [ Play,setPlay]=useState(false)
  const [trandingImg, setTrandingImg] = useState({});
  const image_path = import.meta.env.VITE_TMDB_ORIGINAL_IMAGE;
  const [ movie, setMovie ] = useState([]);
  const youtubeid =import.meta.env.VITE_YOUTUBE_API_KEY
  const yubebaseUrl=import.meta.env.VITE_YOUTUBE_ENDPOINT
  const fetchMovieById = async (externalId) => {
    try {
      const response = await tmdb.get(`/movie/${externalId}`);
      const movie = response.data;    
      setTrandingImg(movie);            
    } catch (error) {
      console.log(error);
    }
  
  };
  async function playMovies(query) {
    try {
      const response = await axios.get(yubebaseUrl, {
        params: {
          q: query, 
          type: 'video',
          key: youtubeid, 
        }
      })
      const videoId = response.data.items[0].id.videoId
      const url = `https://www.youtube.com/embed/${videoId}`
      setMovie(url)
      
    } catch (error) {
      
    }
  }
  fetchMovieById(id)

  return (
    // image_path
    <div className="bg-gray-900 text-white relative">
      {/* Hero Section */}
      <div
        className="relative h-[350px] md:h-[550px] bg-cover bg-center flex items-center justify-center "
        style={{
          backgroundImage: `url(${image_path+trandingImg.backdrop_path})`,
        }}
      >
        <div className="relative text-center z-10 w-3/4">
          <h1 className="text-3xl md:text-5xl font-bold">{trandingImg.title}</h1>
          <p className="text-sm md:text-lg mt-2 h-24 md:h-auto overflow-hidden ">
            {trandingImg.overview}
          </p>
          <p className="text-sm md:text-lg mt-2">Release Date: {trandingImg.release_date}</p>
          <p className="text-sm md:text-lg mt-2">Rating: {trandingImg.vote_average}</p>
          <p>
            <input
              onClick={() => {
                setPlay(true),playMovies(trandingImg.overview)
              }}
              type="button"
              value="Play"
              className="w-24 h-10 rounded-md bg-red-600 text-white cursor-pointer mr-2"
            />{" "}
            <input
              type="button"
              value="More Info"
              className="w-24 h-10 rounded-md bg-red-600 text-white cursor-pointer ml-3"
            />
          </p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center rounded-md">
        <p className="text-center px-2 text-sm">{}</p>
      </div>

      <div className={`${Play?"block":"hidden"}  absolute inset-0 w-screen h-[400px] md:h-[550px] z-10 bg-blue-600`}>
        <iframe
          className="w-full h-full object-cover"
          controls
          playsInline={true}
          autoPlay={true}
          src={movie}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default PlayContainer;
