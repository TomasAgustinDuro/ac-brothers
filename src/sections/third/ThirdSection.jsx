import styles from "./ThirdSection.module.css";
import bro from "../../assets/brothers.jpeg";

function ThirdSection() {
  return (
    <div className={styles.ThirdSectionContainer}>
      <img src={bro} alt="" />
      <div className={styles.TextContainer}>
        <h2>About AC Brothers</h2>
        <p>
          With over 15 years of experience in the local market, AC Brothers is
          your trusted partner for all air conditioning needs. Our commitment to
          quality service and customer satisfaction sets us apart in the
          industry As two brothers passionate about providing perfect climate
          solutions, we bring expertise, reliability, and a personal touch to
          every job we undertake.
        </p>
      </div>
    </div>
  );
}
export default ThirdSection;
