import Image from "next/image";
import Taskbar from './taskbar/taskbar'
import Browser from "./browser/browser";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden justify-between">
      <div id="desktop">
        <div id="applications">
          <Image
          src="/images/applications.png"
          alt="Windows Applications Images"
          fill={true}
          />
        </div>
        <div id="browser">
          <div id="browser-head">
          <Image
          src="/images/browser_head.png"
          alt="Head of browser"
          fill={true}
          />
          </div>
          <div id="browser-window">
            <Browser/>
          </div>
          <div id="browser-foot">
            <Image
            src="/images/browser_foot.png"
            alt="Foot of browser"
            fill={true}
            />
          </div>
        </div>
        <div className="p-4 w-full relative">
          <Image
            src="/images/clippy.gif"
            alt="Clippy"
            width={120}
            height={260}
          />
        </div>
      </div>
      <div className="h-6 bg-gray-taskbar">
        <Taskbar/>
      </div>
    </div>
  );
}
