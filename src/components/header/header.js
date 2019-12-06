import React from "react";
import { Link } from "gatsby";
import styles from "./header.module.less";
import links from "../../data/links";
// import BurgerMenu from "../burgerMenu/BurgerMenu";
import Menu from "../menu/Menu";
import MenuLogo from "../menuLogo/MenuLogo";
import MenuButton from "../menuButton/MenuButton";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  handleMenuClick = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  handleLinkClick = () => {
    this.setState({ menuOpen: false });
  };

  render() {
    return (
      <nav className={styles.nav}>
        <MenuLogo header></MenuLogo>
        <Menu open={this.state.menuOpen}>
          {links.map(item => (
            <li className={styles.navListItem}>
              <Link
                onClick={() => {
                  this.handleLinkClick();
                }}
                key={item.text}
                to={item.path}
                activeClassName={styles.activePage}
                className={styles.navigationLink}
              >
                {item.text}
              </Link>
            </li>
          ))}
          <li className={styles.navListItem}>
            <a
              onClick={() => {
                this.handleLinkClick();
              }}
              className={styles.navigationLink}
              href="#contact"
            >
              Contact
            </a>
          </li>
        </Menu>
        <MenuButton
          open={this.state.menuOpen}
          onClick={() => this.handleMenuClick()}
          color="white"
        />
      </nav>
    );
  }
}
export default Header;
