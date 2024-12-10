import styles from "./FirstSection.module.css";
import bro from '../../assets/brothers.jpeg'

function FirstSection() {
  return (
    <div className={styles.firstSectionContainer}>
      <div className={styles.textContainer}>
        <h1>Perfect Climate Solutions for Your Home and Office</h1>
        <p>Repair, installation, and maintenance by two trusted experts</p>
        <button>Contact us</button>
      </div>

      <div>
        <img src={bro} alt="" />

      </div>
    </div>
  );
}

export default FirstSection;
