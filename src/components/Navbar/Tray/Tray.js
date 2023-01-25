import { MessageWidget } from "../NavTools/MessageWidget";
import { ShapesWidget } from "../NavTools/ShapesWidget";
import { BellWidget } from "../NavTools/BellWidget";
import { User } from "../NavTools/User";

export const Tray = () => {
  return (
    <div className="trayContainer">
      <MessageWidget></MessageWidget>
      <ShapesWidget></ShapesWidget>
      <BellWidget></BellWidget>
      <User></User>
    </div>
  );
};
