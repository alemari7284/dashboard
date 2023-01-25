import { Blocks } from "../VNavTools/Blocks";
import { Calendar } from "../VNavTools/Calendar";
import { Clipboard } from "../VNavTools/Clipboard";
import { Clock } from "../VNavTools/Clock";
import { Gear } from "../VNavTools/Gear";
import { Lifering } from "../VNavTools/Lifering";

export const VTray = () => {
  return (
    <div className="verticalTray">
      <Blocks />
      <Clock />
      <Clipboard />
      <Lifering />
      <Calendar />
      <Gear />
    </div>
  );
};
