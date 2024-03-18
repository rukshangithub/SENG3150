import React,{useState} from "react";
import Button from "./Button";

const ButtonCounter = () => {

        const [clickCount, setClickCount] = useState(0);

        const handleIncrement = () => {
            setClickCount(clickCount + 1);
        };
 
        const handleDecrement = () => {
            setClickCount(clickCount - 1);
        };

        return (
            <>
            <Button Color="Green" onClick={handleIncrement}> Increment </Button>
            You have clicked {clickCount} times
            <Button onClick={handleDecrement}> Decrement </Button>

            </>
        )
};

export default ButtonCounter;