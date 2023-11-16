import { FaPauseCircle, FaPlayCircle } from "react-icons/fa";

const PlayPause = ({ song, handlePause, handlePlay, isPlaying, activeSong }) =>
  isPlaying && activeSong.title === song.title ? (
    <FaPauseCircle className="text-gray-300 text-4xl" onClick={handlePause} />
  ) : (
    <FaPlayCircle className="text-gray-300 text-4xl" onClick={handlePlay} />
  );

export default PlayPause;
