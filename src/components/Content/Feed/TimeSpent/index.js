import { TitleMaker } from "../../TitleMaker";
import { Chart } from "./Chart";

export const TimeSpent = () => {
  return (
    <div className="timeSpent">
      <TitleMaker
        className={"sectionTitle"}
        title={"Time Spent on projects"}
        opts={[
          { value: "twodays", label: "Last 2 days" },
          { value: "threedays", label: "Last 3 days" },
          { value: "fourdays", label: "Last 4 days" },
          { value: "fivedays", label: "Last 5 days" },
          { value: "sixdays", label: "Last 6 days" },
        ]}
      />
      <Chart />
    </div>
  );
};
