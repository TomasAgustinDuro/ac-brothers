import styles from "./Card.module.css";


function Card({ title, text, icon }) {
  return (
    <div className={styles.CardContainer}>
      <div className={styles.TitleContainer}>
        {icon && <div className={styles.CardIcon}>{icon}</div>}
        <h3>{title}</h3>
      </div>
      <p>{text}</p>
    </div>
  );
}
export default Card;
