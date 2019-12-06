import React from "react";
import styles from "./menu.module.less";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    return (
      <div
        style={{
          top: this.state.open ? 0 : "-400px"
        }}
        className={styles.navList}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Menu;
