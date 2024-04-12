"use client"
import {motion} from "framer-motion"
const AboutPage = () => {
    return (
        <motion.div 
        classname="h-full" 
        initial={{y:"-200vh"}} 
        animate={{y:"0%"}} 
        transition={{duration:1}}
        > 
        {/* CONTAINER */}
        <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            {/*BIOGRAPHY CONTAINER*/ }
            <div className="flex flex-col gap-12 justify-center "> 
        <h1 className="font-bold text-2xl">ABOUT</h1>
        <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum, 
            aperiam magni ex sequi quasi, dolor natus accusantium voluptas 
            fugit voluptatibus obcaecati itaque et voluptate dolores impedit excepturi ipsum? Necessitatibus.
        </p>
        <span className="italic"> Lorem ipsum dolor sit amet consectetur adipisicing elit</span>
        <div className="self-end"></div>
        
            </div>
        {/* TEXT CONTAINER */}
            <div className=""> </div>
        {/* SVG CONTAINER */}
        <div></div>
        </div>
        </motion.div>
    )
}
export default AboutPage;