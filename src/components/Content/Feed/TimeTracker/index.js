import { TitleMaker } from "../../TitleMaker";
import { Record } from "./Record";
import { faBugSlash } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faCommentDollar } from "@fortawesome/free-solid-svg-icons";

export const TimeTracker = () => {
  return (
    <div className="timeTracker">
      <TitleMaker
        className={"sectionTitle"}
        title={"Time tracker"}
        opts={[
          { value: "today", label: "Today" },
          { value: "yesterday", label: "Yesterday" },
        ]}
      />
      <Record
        faMain={faBugSlash}
        title={"Fixing bug"}
        project={"Project X"}
        desc={"Billable"}
        schedule={"3:00 - 3:30 PM"}
        time={"0.30m"}
      />
      <Record
        faMain={faPenFancy}
        title={"Illustration"}
        project={"Acme"}
        desc={"Billable"}
        schedule={"4:00 - 4:30 PM"}
        time={"0.30m"}
      />
      <Record
        faMain={faCommentDollar}
        title={"Filling tax return"}
        project={"Office"}
        desc={"Billable"}
        schedule={"5:00 - 5:30 PM"}
        time={"0.30m"}
      />
    </div>
  );
};
