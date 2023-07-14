import React from "react";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";


export const Copyright = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
            <h4 className={`${styles.sectionSubText} py-10 text-center`}>© UUTT 2023. All rights reserved</h4>
            </motion.div>
        </>
    )
}