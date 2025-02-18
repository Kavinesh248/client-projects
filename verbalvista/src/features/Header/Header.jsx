import styles from "./Header.module.css";
import { assets } from "../../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

const Header = function () {
  const [isActiveLink, setIsActiveLink] = useState(false);

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
            <NavLink
              to="/about "
              onClick={() => setIsActiveLink(true)}
              className={
                isActiveLink
                  ? `${styles.mainNavLink} ${styles.mainNavLinkActive}`
                  : styles.mainNavLink
              }
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.mainNavLink}>about</NavLink>
          </li>

          <li>
            <NavLink className={styles.mainNavLink}>course</NavLink>
          </li>
          <li>
            <NavLink className={styles.mainNavLink}>pricing</NavLink>
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
