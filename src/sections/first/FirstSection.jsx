import styles from "./FirstSection.module.css";

function FirstSection() {
  return (
    <div className={styles.firstSectionContainer}>
      <h1>Perfect Climate Solutions for Your Home and Office</h1>
      <p>
      Repair, installation, and maintenance by two trusted experts
      </p>
      <button>
        Contact us
      </button>
      <div>
        Gallery
      </div>
    </div>
  );
}

export default FirstSection;
