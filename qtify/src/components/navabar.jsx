import ButtonUse from "./ButtonUse";
import SearchBox from "./SearchBox";


function Navbar(){
    const buttonName="Give Feedback"
    return <>    
    <ButtonUse text={buttonName}/>
    <SearchBox />
    </>
}

export default Navbar;