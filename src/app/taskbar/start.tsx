import Image from "next/image"
import {useState} from "react";


const Start = () => {

   const [state, setState] = useState("start")

    const OnStartPressed = () => {
        setState(state == "start" ? "start-pressed" : "start");
    }

    return(
        <button id={state} onClick={OnStartPressed}>
            <Image 
            src="/images/start.png"
            alt="Click here to begin"
            fill={true}
            />
        </button>
    ) 
}


export default Start