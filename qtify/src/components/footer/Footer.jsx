import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";
import imgDemo from "../../assets/hero_headphones.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div >
      <Box className={styles.container} border={1} boxShadow="0px -2px 6px 0px #FFFFFF59" padding={2}>
        <img src={imgDemo} alt="testImg" />
        <div>
          <PlayArrowIcon />
          <LinearProgress variant="determinate" value={30} />
        </div>
      </Box>
    </div>
  );
};

export default Footer;
