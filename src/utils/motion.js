// export const blurAnimation = {
//     hidden: { filter: "blur(10px)", opacity: 0 },
//     show: {
//         filter: "blur(0px)",
//         opacity: 1,
//         transition: {
//             duration: 0.5,
//             ease: "easeOut",
//         },
//     },
// };

export const textVariant = (delay) => {
    return {
        hidden: {
            y: -50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay: delay,
            },
        },
    };
};

// export const letterAnimation = {
//     hidden: { opacity: 0 },
//     show: {
//         opacity: 1,
//         transition: {
//             staggerChildren: 0.1, // Задержка между появлением каждой буквы
//         },
//     },
// };
//
// export const letterAnimationItem = {
//     hidden: { opacity: 0, y: 20 },
//     show: {
//         opacity: 1,
//         y: 0,
//         transition: {
//             duration: 0.5,
//             ease: "easeOut",
//         },
//     },
// };


export const fadeIn = (direction, type, delay, duration) => {
    return {
        hidden: {
            x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
            y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: type,
                delay: delay,
                duration: duration,
                ease: "easeOut",
            },
        },
    };
};

export const staggerContainer = (staggerChildren, delayChildren) => {
    return {
        hidden: {},
        show: {
            transition: {
                staggerChildren: staggerChildren,
                delayChildren: delayChildren || 0,
            },
        },
    };
};
