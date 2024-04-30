import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import Carousel from "../../carousel/Carousel";
import Card from "../../card/Card";
import sortByGenre from "../../../utils/sortByGenre";

import Styles from "./GenreSection.module.css";

const GenreSection = ({ data, title, type, genreList }) => {
  const [value, setValue] = useState("all");
  const [songsData, setSongsData] = useState([]);

  const tabsHandler = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setSongsData(sortByGenre(data, value));
  }, [value, data]);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3 style={{ fontSize: "20px",marginLeft:"30px", padding:"2px" }}>{title}</h3>
        <Tabs className="tablist" value={value} onChange={tabsHandler}>
          {genreList?.map((genre) => (
            <Tab
              style={{color:"white"}}
              value={genre.key}
              label={genre.label}
              key={genre.key}
            />
          ))}
        </Tabs>
      </div>
      <div className={Styles.carouselContainer}>
        <Carousel
          data={songsData}
          componentRender={(ele) => <Card data={ele} type={type} />}
          activeTab={value}
        />
      </div>
    </div>
  );
};

export default GenreSection;
