import { Circle } from "./VNavTools/Circle";
import { VTray } from "./VTray/VTray";
import { Add } from "./VNavTools/Add";

export const VerticalNavbar = () => {
  return (
    <div className="verticalNavbar">
      <Circle />
      <VTray />
      <Add />
    </div>
  );
};
