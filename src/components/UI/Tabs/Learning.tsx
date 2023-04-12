import { useMemo } from "react";
import { LearningSkills } from "../../../data/LearningSkills";
import { LearningSkill } from "../LearningSkill";

export const Learning = ({ display }: { display: number }) => {
  const learnSkills = useMemo(() => LearningSkills, [LearningSkills]);

  return (
    <div
      className={
        display === 1 ? "flex flex-col tabItemsContainer gap-8 p-5" : "hidden"
      }
    >
      {learnSkills.map((item) => (
        <LearningSkill key={item.id} {...item} />
      ))}
    </div>
  );
};
