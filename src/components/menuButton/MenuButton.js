import React from "react";
import styles from "./menuButton.module.less";

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false
      // color: this.props.color ? this.props.color : "black"
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
    // const abcd = {
    //   line: {
    //     height: "2px",
    //     width: "20px",
    //     background: this.state.color,
    //     transition: "all 0.2s ease"
    //   },
    //   lineTop: {
    //     transform: this.state.open ? "rotate(45deg)" : "none",
    //     transformOrigin: "top left",
    //     marginBottom: "5px"
    //   },
    //   lineMiddle: {
    //     opacity: this.state.open ? 0 : 1,
    //     transform: this.state.open ? "translateX(-16px)" : "none"
    //   },
    //   lineBottom: {
    //     transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
    //     transformOrigin: "top left",
    //     marginTop: "5px"
    //   }
    // };
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

export default MenuButton;
