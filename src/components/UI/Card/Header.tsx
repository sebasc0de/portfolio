interface Props {
  projectLogo?: string;
  projectTitle?: string;
  projectDesc?: string;
  githubURL?: string;
  projectURL: string;
}

export const Header = ({
  projectTitle,
  projectDesc,
  projectLogo,
  projectURL,
  githubURL,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-3 h-fit py-8 px-3">
      <img src={projectLogo} className="w-20 md:w-14 object-contain" />
      <div className="leading-4 w-fit">
        <h5 className="font-bold mb-2">{projectTitle}</h5>
        <p className="text-gray-500 mb-1 text-xs">{projectDesc}</p>

        <div className="flex gap-5">
          <a
            href={projectURL}
            target="_blank"
            className="fit underline text-xs mt-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Ver proyecto
          </a>
          <a
            href={githubURL}
            target="_blank"
            className=" fit underline text-xs mt-2 text-blue-600 hover:text-blue-700 font-medium"
          >
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
