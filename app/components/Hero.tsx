import React from 'react'
const Hero = () => {
    return(
        <div className= 'relative flex flex-col h-full w-full'>
            <video
                autoPlay
                muted
                loop
                className ='absolute top-[-140px] left-0 z-[1] w-full h-full object-cover'
            >

                <source src='blackhole.webm' type='video/webm'/>
            </video>


        </div>
    )

    }
    export default Hero