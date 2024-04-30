import * as React from 'react';
import Button from '@mui/material/Button';
import "./ButtonUse.css"
export default function ButtonUse(props) {
    return (<div >
        <Button variant="contained" style={{backgroundColor:"#121212",color:"#34c94b" }}>
            <span>{props.text}</span>
        </Button>
    </div>);
}