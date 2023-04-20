import {
  github,
  instagram,
  linkedin,
  youtube,
} from "../../data/sebasc0de/RRSSS.json";
export const RRSS = () => {
  return (
    <div className="absolute flex gap-1.5 top-2 right-2">
      <a
        href={linkedin}
        className="w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg"
      >
        <img src="/logos/linkedin.png" />
      </a>
      <a
        href={github}
        className="w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg"
      >
        <img src="/logos/github.png" />
      </a>
      <a
        href={instagram}
        className="w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg"
      >
        <img src="/logos/instagram.png" />
      </a>
      {/* <a
    href="https://www.twitch.tv/sebasc0de"
    className="w-6 h-6 p-1 bg-white rounded-md drop-shadow-lg"
  >
    <img src="/icons/twich.png" />
  </a> */}
      <a
        href={youtube}
        className="w-6 h-6 p-0.5 bg-white rounded-md drop-shadow-lg"
      >
        <img src="/logos/youtube.png" />
      </a>
    </div>
  );
};
