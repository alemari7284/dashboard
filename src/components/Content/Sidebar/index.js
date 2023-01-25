import { Daily } from "./Daily";
import { Report } from "./Report";
import { Integration } from "./Integration";

export const Sidebar = () => {
  return (
    <div className="sidebarWrapper">
      <Daily />
      <Report />
      <Integration />
    </div>
  );
};
