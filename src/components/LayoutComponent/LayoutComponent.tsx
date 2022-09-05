import { FC } from "react";
import Appbar from "../Appbar/Appbar";
import SideBar from "../SideBar/SideBar";

import "./LayoutComponent.scss";

type Props = {
  children?: React.ReactNode;
};

const LayoutComponent: FC<Props> = ({ children }) => {
  return (
    <div className="layout-container">
      <SideBar />
      <main className="main">
        <Appbar />
        {children}
      </main>
    </div>
  );
};

export default LayoutComponent;
