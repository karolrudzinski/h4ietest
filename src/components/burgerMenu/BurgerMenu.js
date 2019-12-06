import React from "react";
import styles from "./BurgerMenu.module.less";

class BurgerMenu extends React.Component {
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

  handleClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div
        className={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick();
              }
        }
      >
        <div
          style={{ transform: this.state.open ? "rotate(45deg)" : "none" }}
          className={`${styles.line} ${styles.lineTop}`}
        />
        <div
          style={{
            transform: this.state.open ? "translateX(-16px)" : "none",
            opacity: this.state.open ? 0 : 1
          }}
          className={`${styles.line} ${styles.lineMiddle}`}
        />
        <div
          style={{
            transform: this.state.open ? "rotate(-45deg)" : "none"
          }}
          className={`${styles.line} ${styles.lineBottom}`}
        />
      </div>
    );
  }
}

export default BurgerMenu;
