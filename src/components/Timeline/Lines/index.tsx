import React from "react";
import Header from "./Header";
import Body from "./Body";
import styles from "./style.module.scss";

interface IProps {
  className?: string;
}

const Lines: React.FC<IProps> = ({className}) => (
    <div className={`${className} ${styles.lines}`}>
        <Header />
        <Body />
    </div>
)

export default Lines;
