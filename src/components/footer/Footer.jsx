import styles from "./Footer.module.css";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.FooterContainer}>
      <h3>2024 AC Brothers. All rights reserved.</h3>

      <div className={styles.FooterSocial}>
        <span>
          <FaInstagram size={30} />
        </span>
        <span>
          <FaTwitter size={30} />
        </span>
        <span>
          <FaFacebook size={30} />
        </span>
      </div>
    </div>
  );
}
export default Footer;
