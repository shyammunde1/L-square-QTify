
import Carousel from "../carousel/Carousel";
import styles from "./Section.module.css"

const Section = () => {
  return (
    <>
      <div>
        <div className={styles.header}>
          <h3>New Album</h3>
          <h3>Show All</h3>
        </div>
        <Carousel></Carousel>
      </div>
    </>
  );
};

export default Section;
