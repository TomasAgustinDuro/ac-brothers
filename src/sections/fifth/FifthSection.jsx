import React, { useState } from "react";
import styles from "./FifthSection.module.css";
import resend from "../../components/resend";

function FifthSection() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await resend.emails.send({
        to: "durotomaas@gmail.com", // Replace with your email
        from: formData.email,
        subject: formData.subject,
        text: formData.message,
      });
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email.");
    }
  };

  return (
    <div className={styles.FifthSectionContainer}>
      <h2>Contact us</h2>

      <form className={styles.FormContainer} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="subject"
            value={formData.subject}
            onChange={handleChange}
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            id="message"
            name="message"
            placeholder="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>

      <p><strong>Call us: </strong>1234-5678</p>
      <p><strong>Whatsapp: </strong>1234-5678</p>
    </div>
  );
}

export default FifthSection;