import {useState} from "react";


const Clock = () => {

   const [time, setState] = useState(
    new Intl.DateTimeFormat('default',
    {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric'
    }).format(new Date()).toString())

    const UpdateTime = () => {
        let timeNow = new Intl.DateTimeFormat('default',
        {
            hour12: true,
            hour: 'numeric',
            minute: 'numeric'
        }).format(new Date()).toString();
        setState(timeNow)
    }

    setInterval(UpdateTime, 2000)

    return(
        <div id="clock">
            {time}
        </div>
    ) 
}


export default Clock