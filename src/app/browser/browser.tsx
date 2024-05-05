'use client'
import Image from "next/image"

const Browser = () => {
    return(
        <div className="window">
            <div className="grid grid-flow-col auto-cols-max">
                <div className="box-border p-2 border-double border-4 border-gray-500">
                    <Image
                    src="/images/me.jpg"
                    alt="Profile picture"
                    width={250}
                    height={400}
                    />
                </div>
                <div className="p-6 flex flex-col">
                    <div className="p-1 text-5xl">Subham Neogi</div>
                    <div className="p-1 text-xl">Software Engineer @ Microsoft, Bangalore</div>
                    <div className="p-1 text-xl">B.Tech (CSE), IIEST Shibpur (2018-2022)</div>
                    <div className="p-2 flex flex-row justify-between">
                        <a href="https://www.linkedin.com/in/subham-neogi-b9a848167/" target="_blank">
                            <Image 
                            src="/images/linkedin.png"
                            alt="LinkedIn"
                            width={40}
                            height={40}
                            />
                        </a>
                        <a href="https://github.com/Subham-Neogi" target="_blank">
                            <Image 
                            src="/images/github.png"
                            alt="GitHub"
                            width={38}
                            height={38}
                            />
                        </a>
                        <a href="https://twitter.com/lurker_subham" target="_blank">
                            <Image 
                            src="/images/twitter.png"
                            alt="Twitter"
                            width={40}
                            height={40}
                            />
                        </a>
                    </div>
                </div>
            </div>            
        </div>
    ) 
}


export default Browser