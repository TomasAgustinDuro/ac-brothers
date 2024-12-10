import styles from "./FourthSection.module.css";
import Card from "../../components/card/Card";
import { FaRegUser } from "react-icons/fa";

function FourthSection() {
  return (
    <div className={styles.OpinionContainer}>
      <h2>What our clients say</h2>

      <div className={styles.CardContainer}>
        <Card
          icon={<FaRegUser />}
          title="Jonh Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt"
        />
        <Card
          icon={<FaRegUser />}
          title="Jane Smith"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt"
        />
        <Card
          icon={<FaRegUser />}
          title="Mike Johnson"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing 
elit, sed do eiusmod tempor incididunt"
        />
      </div>
    </div>
  );
}
export default FourthSection;
