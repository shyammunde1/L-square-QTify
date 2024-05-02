import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import Box from "@mui/material/Box";
import { LinearProgress, Typography } from "@mui/material";
import imgDemo from "../../assets/hero_headphones.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <Box
        className={styles.container}
        border={1}
        boxShadow="0px -2px 6px 0px #FFFFFF59"
        padding={2}
      >
        <img src={imgDemo} alt="testImg" />
        <div className={styles.player}>
          <div className={styles.playIcon}>
            <PlayArrowIcon />
          </div>
          <div className={styles.progressbar}>
            <Typography variant="body2" className={styles.label}>
              0.30
            </Typography>
            <div className={styles.progress}>
              <LinearProgress
                variant="determinate"
                value={10}
                style={{ width: "600px" }}
              />
            </div>
            <Typography variant="body2" className={styles.label} align="right">
              3.38
            </Typography>
          </div>
        </div>
        <div style={{ width: "100px" }}>{/* <h1>@samtech</h1> */}</div>
      </Box>
    </div>
  );
};

export default Footer;
