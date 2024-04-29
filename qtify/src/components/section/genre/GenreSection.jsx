import { useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Carousel from "../../carousel/Carousel";
import Styles from "./GenreSection.module.css";
import Card from "../../card/Card";

const GenreSection = ({ data, title, type }) => {
  const [value, setValue] = useState("all");

  const tabsHandler = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 style={{ fontSize: "20px" }}>{title}</h3>
        <Tabs value={value} onChange={tabsHandler}>
          <Tab value="all" label="All" />
          <Tab value="rock" label="rock" />
          <Tab value="pop" label="pop" />
          <Tab value="jazz" label="jazz" />
          <Tab value="blues" label="blues" />
        </Tabs>
      </div>
      <div className={Styles.carouselContainer}>
        {value === "rock" && (
          <Carousel
            data={data}
            componentRender={(ele) => <Card data={ele} type={type} />}
            activeTab={value}
          />
        )}
        {value === "pop" && (
          <Carousel
            data={data}
            componentRender={(ele) => <Card data={ele} type={type} />}
            activeTab={value}
          />
        )}
        {value === "all" && (
          <Carousel
            data={data}
            componentRender={(ele) => <Card data={ele} type={type} />}
            activeTab={value}
          />
        )}
      </div>
    </div>
  );
};

export default GenreSection;
