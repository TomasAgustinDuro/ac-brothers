import styles from "./FifthSection.module.css";

function FifthSection() {
  return (
    <div className={styles.FifthSectionContainer}>
      <h2>Contact us</h2>

      <div className={styles.FormContainer}>
        <div className={styles.formGroup}>        
          <input type="text" id="email" name="email" placeholder="email" />
        </div>

        <div className={styles.formGroup}>    
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="message"
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
            Send Message
        </button>
      </div>

      <p><strong>Call us: </strong>1234-5678</p>
      <p><strong>Whatsapp: </strong>1234-5678</p>
    </div>
  );
}
export default FifthSection;
