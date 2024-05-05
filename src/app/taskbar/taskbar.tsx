'use client'
import Image from "next/image"
import Start from "./start";
import Clock from "./clock";


const Taskbar = () => {
    return(
        <div id="taskbar">
            <Start/>
            <div id="tray">
                <Image 
                src="/images/tray.png"
                alt=""
                fill={true}
                />
            </div>
            <div id="minimized-windows">
                <div id="minimized">
                    <div className="flex w-3 h-full relative">
                        <Image
                        src="/images/iexplorer.jpeg"
                        alt=""
                        fill={true}
                        />
                    </div>
                    <div>Subham Neogi</div>
                </div>
            </div>
           <Clock/>
        </div>
    ) 
}


export default Taskbar