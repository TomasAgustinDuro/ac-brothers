import styles from "./SecondSection.module.css";
import Card from "../../components/card/Card";

function SecondSection() {
  return (
    <div className={styles.ServicesContainer}>
      <h2>Our Services</h2>
      
      <div className={styles.CardsContainer}>
        <Card title="Repair" text="Quick and reliable AC repair services" />
        <Card
          title="Maintenance"
          text="Regular maintenance to keep your AC 
running efficiently"
        />
        <Card
          title="Installation"
          text="Expert installation of new AC systems"
        />
      </div>
    </div>
  );
}
export default SecondSection;
