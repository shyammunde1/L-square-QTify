import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>FAQs</h1>
      </div>
      <div className={styles.accordionContainer}>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel1-content"
            id="panel1-header"
            className={styles.summary}
          >
            is QTify free to use?
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            yes ,This web app free to use any one can use It.
          </AccordionDetails>
        </Accordion>
        <Accordion className={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color="primary" />}
            aria-controls="panel2-content"
            id="panel2-header"
            className={styles.summary}
          >
            Can i download and listen to song offline?
          </AccordionSummary>
          <AccordionDetails className={styles.details}>
            sorry, We do not provide the download song service.
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
