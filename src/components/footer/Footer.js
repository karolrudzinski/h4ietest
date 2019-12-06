import React from "react";
import styles from "./footer.module.less";
import links from "../../data/links";
import { Link } from "gatsby";
import pin from "../../images/footer/pin.svg";
import MenuLogo from "../menuLogo/MenuLogo";
import faceMichal from "../../images/faces/michal.png";
import faceBrian from "../../images/faces/brian.png";

const Footer = ({}) => {
  return (
    <footer className={styles.footer} id="contact">
      <div className={`${styles.footerInner} ${"wrapper"}`}>
        <MenuLogo footer></MenuLogo>
        <div className={styles.footerListContainer}>
          <nav className={styles.navigationFooter}>
            <ul className={styles.footerList}>
              {links.map(item => (
                <li className={styles.navListItem}>
                  <Link
                    key={item.path}
                    to={item.path}
                    className={styles.navigationLink}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
              <li className={styles.navListItem}>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className={styles.navigationLink}
                  href="https://www.hype4.com/blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <ul className={styles.adressList}>
            <li className={styles.adressItem}>
              <img src={pin} alt="" />
              <div className={styles.adressText}>
                <p className={styles.contactPara}>29 Redleaf House,</p>
                <div className={styles.adressBreak}>
                  <p className={styles.contactPara}>Townspark Longford,</p>
                  <p className={styles.contactPara}>Ireland</p>
                </div>
              </div>
            </li>
            <li className={styles.adressItem}>
              <img src={pin} alt="" />
              <div className={styles.adressText}>
                <p className={styles.contactPara}>63-66 Hatton Garden</p>
                <div className={styles.adressBreak}>
                  <p className={styles.contactPara}>London</p>
                  <p className={styles.contactPara}>UK</p>
                </div>
              </div>
            </li>
          </ul>
          <div className={styles.contactBox}>
            <p className={styles.contactPara}>Contact us</p>
            <ul className={styles.contactList}>
              <li>
                <a
                  className={`${styles.contactListLink} ${styles.textGradient}`}
                  href="mailto:hello@hype4.com"
                >
                  hello@hype4.ie
                </a>
              </li>
              <li>
                <a
                  className={`${styles.contactListLink} ${styles.textGradient}`}
                  href="tel:+353(87)6578771"
                >
                  +353 (87) 657 8771
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.contactBoxAdditional}>
            <p className={styles.contactPara}>Additional Contacts</p>
            <ul className={styles.additionalList}>
              <li className={styles.additionalItem}>
                <div className={styles.additionalItemImg}>
                  <img src={faceBrian} alt="" />
                </div>
                <div className={styles.additionalItemText}>
                  <p className={styles.contactName}>Brian Egan</p>
                  <a
                    className={`${styles.contactMail} ${styles.footerUnderlineLink}`}
                    href="mailto:mike@hype4.com"
                  >
                    brian@hype4.ie
                  </a>
                  <div className={styles.contactSocial}>
                    <div
                      className={`${styles.contactIcon} ${styles.iconLinkedIn}`}
                    >
                      <a
                        href="https://www.linkedin.com/in/brianpatrickegan"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="linkDiv"
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
              <li className={styles.additionalItem}>
                <div className={styles.additionalItemImg}>
                  <img src={faceMichal} alt="" />
                </div>
                <div className="additionalItemText">
                  <p className={styles.contactName}>Michał Malewicz</p>
                  <a
                    className={`${styles.contactMail} ${styles.footerUnderlineLink}`}
                    href="mailto:mike@hype4.com"
                  >
                    mike@hype4.com
                  </a>
                  <div className={styles.contactSocial}>
                    <div
                      className={`${styles.contactIcon} ${styles.iconLinkedIn}`}
                    >
                      <a
                        href="https://www.linkedin.com/in/michalmalewicz/"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="linkDiv"
                      ></a>
                    </div>
                    <div
                      className={`${styles.contactIcon} ${styles.iconTwitter}`}
                    >
                      <a
                        href="https://twitter.com/michalmalewicz"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="linkDiv"
                      ></a>
                    </div>
                    <div
                      className={`${styles.contactIcon} ${styles.iconMedium}`}
                    >
                      <a
                        href="https://medium.com/@michalmalewicz"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="linkDiv"
                      ></a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerLine}></div>
        <div className={styles.socialWrap}>
          <div className={styles.linkWrap}>
            <p className={styles.contactPara}>
              Copyright © 2012-2019 Dogbyt Ltd. Trading as HYPE4.ie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
