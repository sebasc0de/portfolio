import { Work } from "../../../interfaces/Works";
import { Ping } from "../Ping";
import { Header } from "./Header";
import { ProgressBar } from "./ProgressBar";
import { Technologies } from "./Technologies";

export const CardLayout = (work: Work) => {
  return (
    <div className="fade-in-top relative shadow-sm shadow-black/20 rounded-lg flex flex-col">
      <Ping position="-right-1 top-0" online={work.online} size="w-3 h-3" />

      {/* Header */}
      <Header
        projectURL={work.url || ""}
        projectDesc={work.desc}
        projectTitle={work.displayName}
        projectLogo={work.img}
        githubURL={work.gitHub}
      />

      <hr />

      {/* Body */}
      <div className="p-3 flex flex-col gap-3">
        <ProgressBar progress={work?.progress || "10"} />
        <Technologies techs={work.tags} />
      </div>
    </div>
  );
};
