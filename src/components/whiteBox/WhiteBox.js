import React from "react";
import styles from "./whiteBox.module.less";
import "./whiteBox.less";
import whiteBoxLogos from "../../data/whiteBoxLogos";

const WhiteBox = ({ children, section, text, featured }) => (
  <>
    {featured ? (
      <section className={`${styles.featuredSection}`}>
        <div className={styles.wrapper}>
          <div className={styles.whiteBox}>
            <h2 className="sectionHeading ">{text}</h2>
            <div className={styles.logoRow}>
              {whiteBoxLogos.feat.map(item => (
                <div className={styles.featuredBox}>
                  <img
                    className={styles.boxImg}
                    src={item.img}
                    alt="background shape"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    ) : (
      <section className={`${styles.clientsSection} wrapper`}>
        <div className={styles.whiteBox}>
          <h2 className="sectionHeading ">{text}</h2>

          <div className={styles.clientLogoContainer}>
            <div className={`${styles.fadeRow} ${styles.fadeRow1}`}>
              <div className={styles.logoRow}>
                {whiteBoxLogos.feat.map(item => (
                  <div className={styles.clientBox}>
                    <img
                      className={styles.boxImg}
                      src={item.img}
                      alt="background shape"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.fadeRow} ${styles.fadeRow2}`}>
              <div className={styles.logoRow}>
                {whiteBoxLogos.feat.map(item => (
                  <div className={styles.clientBox}>
                    <img
                      className={styles.boxImg}
                      src={item.img}
                      alt="background shape"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={`${styles.fadeRow} ${styles.fadeRow3}`}>
              <div className={styles.logoRow}>
                {whiteBoxLogos.feat.map(item => (
                  <div className={styles.clientBox}>
                    <img
                      className={styles.boxImg}
                      src={item.img}
                      alt="background shape"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )}
  </>
);
export default WhiteBox;
