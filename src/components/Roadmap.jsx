import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {styles} from "../styles";
import {roadmap} from "../constants";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";

const RoadmapCard = ({roadmap}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{background: "#1d1836", color: "#fff"}}
            contentArrowStyle={{borderRight: "7px solid  #232631"}}
            date={roadmap.date}
            iconStyle={{background: roadmap.iconBg}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img src={roadmap.icon} alt={roadmap.sub_title} className="w-[60%] h-[60%] object-contain"/>
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{roadmap.title}</h3>
                <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>{roadmap.sub_title}</p>
            </div>
            <ul className="mt-5 list-disc ml-5 space-y-2">
                {roadmap.points.map((point, index) => (
                    <li key={`roadmap-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Roadmap = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} text-center`}>Roadmap</p>
                <h2 className={`${styles.sectionHeadText} text-center`}>Roadmap</h2>
            </motion.div>
            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {roadmap.map((roadmap, index) => (
                        <RoadmapCard key={`roadmap-${index}`} roadmap={roadmap}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Roadmap, "roadmap");
