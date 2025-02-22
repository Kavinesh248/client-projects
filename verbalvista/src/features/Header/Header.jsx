import styles from "./Header.module.css";
import { assets } from "../../assets/assets";
import { Link } from "react-scroll";
// import { useState } from "react";

const Header = function () {
  // const [isActive, setIsActive] = useState(true);

  // function handleClick() {}

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <Link to="/">
          <img
            src={assets.brandLogo}
            alt="brand logo"
            className={styles.logo}
          />
        </Link>
      </div>

      <nav className={`${styles.mainNav} flex`}>
        <ul className={styles.navHeader}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={600}
              spy={true}
              activeClass={styles.mainNavLinkActive}
              className={styles.mainNavLink}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={600}
              spy={true}
              activeClass={styles.mainNavLinkActive}
              className={styles.mainNavLink}
            >
              about
            </Link>
          </li>

          <li>
            <Link
              to="course"
              smooth={true}
              duration={600}
              spy={true}
              activeClass={styles.mainNavLinkActive}
              className={styles.mainNavLink}
            >
              course
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              smooth={true}
              duration={600}
              spy={true}
              activeClass={styles.mainNavLinkActive}
              className={styles.mainNavLink}
            >
              pricing
            </Link>
          </li>
        </ul>

        <button className={styles.ctaBtn}>
          Contact us <ion-icon name="logo-whatsapp"></ion-icon>
        </button>
      </nav>
    </div>
  );
};

export default Header;
