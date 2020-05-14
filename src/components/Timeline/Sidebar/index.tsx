import React from "react";
import Header from "./Header";
import Body from "./Body";
import styles from "./style.module.scss";

interface IProps {
    className?: string;
}


const Sidebar: React.FC<IProps> = ({className}) => (
    <div className={`${className || ""} ${styles.sideBar}`}>
        <Header />
        <Body />
    </div>
)

export default Sidebar;
