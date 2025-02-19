import styles from "./Footer.module.css";

const Footer = function () {
  return (
    <div className={`${styles.footerContainer} container`}>
      <div className={styles.copyright}>
        &copy; 2025 VerbalVista. All rights reserved.
      </div>
      <nav className={styles.socialLinks}>
        <a href="">
          <ion-icon name="logo-whatsapp"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-instagram"></ion-icon>
        </a>
        <a href="">
          <ion-icon name="logo-facebook"></ion-icon>
        </a>
        <a href="mailto:verbalvista2025@gmail.com">
          <ion-icon name="mail-outline"></ion-icon>
        </a>
      </nav>
    </div>
  );
};

export default Footer;
