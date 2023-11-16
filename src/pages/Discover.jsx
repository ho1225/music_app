import { Error, Loader, SongCard } from "../components";
import { genres } from "../assets/constants";

import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { useDispatch, useSelector } from "react-redux";

const Discover = () => {
  const dispatcher = useDispatch();
  const { isPlaying, activeSong } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = "Pop";

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-left">
          Discover {genreTitle}
        </h2>
        <select
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
          onChange={() => {}}
          value=""
        >
          {genres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genreTitle}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-wrap justify-start sm:justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            i={i}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;