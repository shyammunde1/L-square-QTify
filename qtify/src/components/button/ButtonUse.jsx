import * as React from 'react';
import Button from '@mui/material/Button';
import "./ButtonUse.css"
export default function ButtonUse(props) {
    return (<div >
        <Button variant="contained" style={{backgroundColor:"black",color:"#00BD2B" }}>
            <span>{props.text}</span>
        </Button>
    </div>);
}