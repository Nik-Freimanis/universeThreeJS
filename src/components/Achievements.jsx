import React from "react";
import {Tilt} from 'react-tilt'
import {motion} from "framer-motion";

import {styles} from "../styles";
import {achievements} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const AchievementsCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    alt={'aboba'}
                    src={icon}
                    className='w-64 h-64 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const Achievements = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Achievements</p>
                <h2 className={styles.sectionHeadText}>Achievements</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
            </motion.p>

            <div className='mt-20 flex flex-wrap gap-10'>
                {achievements.map((achievements, index) => (
                    <AchievementsCard key={achievements.title} index={index} {...achievements} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
