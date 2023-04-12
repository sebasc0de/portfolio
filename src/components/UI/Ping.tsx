interface Props {
  position: string;
  size: string;
  online?: boolean;
}

export const Ping = ({
  online = true,
  position = "right-0 top-0",
  size = "w-2.5 h-2.5",
}: Props) => {
  const COLOR = online ? "bg-green-600" : "bg-red-600";

  return (
    <>
      <div
        className={`${size} block ${COLOR} absolute rounded-full ${position} z-10`}
      ></div>
      <div
        className={`${size} animate-ping z-20 block ${COLOR} absolute rounded-full ${position}`}
      ></div>
    </>
  );
};
