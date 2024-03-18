import React,{useState} from "react";
import Button from "./Button";

const ButtonCounter = () => {

        const [clickCount, setClickCount] = useState(0);

        const handleIncrement = () => {
            setClickCount(clickCount + 1);
        };
 
        return (
            <>
            <Button onClick={handleIncrement}> Increment </Button>
            You have clicked {clickCount} times
            </>
        )
};

export default ButtonCounter;