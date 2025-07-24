import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaLemon } from 'react-icons/fa'
import { SiFramer, SiFigma, SiReact, SiNodedotjs, SiTensorflow, SiSpacy, SiPython, SiOpencv } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'

const stackItem = [
    {
        id: 1,
        name: "AI",
        icon: <AiOutlineRobot size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 2,
        name: "React",
        icon: <SiReact size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 3,
        name: "ML",
        icon: <SiTensorflow size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 4,
        name: "Python",
        icon: <SiPython size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 5,
        name: "NLP",
        icon: <SiSpacy size={100}/>,
        color: "text-emerald-200",
    },
    {
        id: 6,
        name: "CV",
        icon: <SiOpencv size={100}/>,
        color: "text-emerald-200",
    },
]

const Stack = () => {
    const controls = useAnimation();
    
    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }else{
            controls.start("hidden");
        }
    }, [controls, inView]);
    return (
    <section
       className='py-12 md:py-29 max-w-[1200px] mx-auto text-center'
       id='stack'
       >
        <h2 className='text-7xl text-gray-100 font-bold mb-20'>My Stack</h2>
        <div className='flex flex-wrap justify-center gap-8' ref={ref}>
            {
                stackItem.map((item, index) => (
                    <motion.div
                    key={item.id}
                    custom={index}
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: (index) => ({
                            opacity:0,
                            y: index % 2 === 0 ? -100 : 100,
                        }),
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 1.5,
                            },
                        },
                    }}
                    className='bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl
                               p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300'
                    >
                        <div className={`mb-4 ${item.color}`}>{item.icon}</div>
                        <p className='text-white/20 text-xl'>{item.name}</p> 
                    </motion.div>
                ))
            }
        </div>
       </section>
  )
}

export default Stack
