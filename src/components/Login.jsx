import React from "react";
import {styles} from "../styles.js";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion.js";


export const LoginText = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
            <h4 className={`${styles.sectionDescription} py-10 text-center`}>Login for members only FIDO Alliance hardware</h4>
            </motion.div>
        </>
    )
}