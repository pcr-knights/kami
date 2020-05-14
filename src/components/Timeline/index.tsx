import React, {Component} from 'react';
import Sidebar from "./Sidebar";
import Lines from "./Lines";
import styles from "./style.module.scss";

interface IProps {
    className?: string;
}

interface IState {

}

class Timeline extends Component<IProps, IState> {

    state = {

    };

    render() {
        const { className } = this.props;
        return (
            <div className={`${className || ""} ${styles.timeline}`}>
                <Sidebar className={styles.layoutSidebar} />
                <Lines className={styles.layoutLines} />
            </div>
        );
    }
}

export default Timeline;
