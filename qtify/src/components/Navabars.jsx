import ButtonUse from "./ButtonUse";
import SearchBox from "./SearchBox";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../assets/logo.png";

import "./Navabars.css";

function Navbar() {
  const buttonName = "Give Feedback";
  return (
    <>
      <AppBar position="static">
        <Toolbar className="container-item">
          <img src={logo} alt="logo_img" />
          <SearchBox />
          <ButtonUse text={buttonName} />
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
