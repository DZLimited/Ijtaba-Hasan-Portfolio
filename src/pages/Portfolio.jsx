import React, { useState } from 'react';
import proj1 from '../assets/images/proj11.png'
import proj2 from '../assets/images/proj12.png'
import proj3 from '../assets/images/proj13.png'
import proj5 from '../assets/images/proj5.png'
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiChevronsDown } from 'react-icons/fi';
import { HiOutlineExternalLink } from 'react-icons/hi';

const porjects = [
    {
        title: "Vehicle Number Plate Detection",
        desc: "Built a system to detect and extract license plate numbers from vehicle images using OpenCV and YOLO object detection models.",
        devstack: "Python, OpenCV, YOLO",
        link:"#",
        git:"https://github.com/Ij-taba/predict_number.git",
        src: proj1,
        type: "Academic / CV-based AI Project",
    },
     {
        title: "Resume Screener",
        desc: " Developed a system that ranks resumes by matching them against job descriptions using semantic analysis.",
        devstack: "Python, NLP (spaCy), Scikit-learn",
        link:"https://www.linkedin.com/posts/ijtaba-hasan-509b58308_im-excited-to-share-that-ive-developed-activity-7329190244803616768-hsIh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAmaQIB0U5dKgFoeat5nq8e5AWa6CGDC7c",
        git:"https://github.com/Ij-taba/ResumeScreener.git",
        src: proj2,
        type: "AI-Based Automation / Recruitment Tool",
    },
     {
        title: "Chat with PDF",
        desc: "A smart assistant tool that allows users to interact with PDF files through natural language queries. It extracts and processes content using NLP techniques to provide accurate and contextual answers.",
        devstack: "Python, LangChain, OpenAI API, Streamlit, PyPDF2 / pdfminer",
        link:"https://www.linkedin.com/posts/ijtaba-hasan-509b58308_im-excited-to-share-that-ive-developed-activity-7329190244803616768-hsIh?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAmaQIB0U5dKgFoeat5nq8e5AWa6CGDC7c",
        git:"https://github.com/Ij-taba/chat-with-pdf.git",
        src: proj3,
        type: "AI/NLP Based – Intelligent Document Query System",
    },
     {
        title: "Text-to-Image Conversion App",
        desc: "Created a React Native frontend that integrates with an AI image generation API to convert text prompts into images.",
        devstack: "React / JavaScript (frontend), Model API (e.g., Replicate or Stability AI)",
        link:"https://www.linkedin.com/posts/ijtaba-hasan-509b58308_today-i-created-a-text-to-image-generator-activity-7237011828734668800-OH0Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEAmaQIB0U5dKgFoeat5nq8e5AWa6CGDC7c",
        git:"#",
        src: proj5,
        type: "AI-Enhanced Web Application",
    },
];

const Portfolio = () => {
  const [expendedIndex, setExpendedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpendedIndex(expendedIndex === index ? null : index);
  } 

  return (
    <div className='text-white py-16 md:py-24 ' id='portfolio'>
        <div className='container mx-auto px-4 '>
            <h2 className='text-6xl font-bold text-center mb-16'>
                Selected <span className='text-emerald-300'>Projects</span>
            </h2>

           <div className='space-y-8'>
            {porjects.map((project, index) => (
                <motion.div 
                  key={index}
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity:1, y:0}}
                  viewport={{once: true}}
                  transition={{duration: 0.5, delay: index * 0.1}}
                  className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    <div 
                     className='p-6 flex justify-between item-center cursor-pointer bg-black/20 border border-white/10'
                     onClick={() => toggleExpand(index)}>
                        <h3 className='text-4xl font-semibold'>{project.title}</h3>
                        <div className='flex items-center space-x-4'>
                            <span className='text-3xl font-light text-emerald-300'>
                                0{index+1}
                            </span>
                            <FiChevronsDown
                            className={`w-6 h-6 transform transition-transform ${
                                expendedIndex === index ? "rotate-100" : ""
                            }`}
                            />
                        </div>
                     </div>
                     <AnimatePresence>
                      {expendedIndex === index && (
                        <motion.div
                           initial = {{height: 0, opacity: 0}}
                           animate={{ height: "auto", opacity: 1}}
                           exit={{height:0 , opacity: 0}}
                           transition={{duration: 0.3}}
                           className="px-6 pb-6 bg-black/20 border border-white/10">

                            <div className='flex flex-col md:flex-row gap-8'>
                                <img 
                                  src={project.src}
                                  alt={project.title}
                                  className='w-full md:w-1/2 h-64 object-cover mt-3 rounded-lg'/>

                                 <div className='flex-1 mt-3'>
                                    <p className='text-white/70 mb-4'>{project.desc}</p>
                                    <p className='text-emerald-300 fontmedium mb-2'>Stack: {project.devstack}</p>
                                    <p className='text-emerald-400/60 font-medium mb-4 capitalize'>Type: {project.type}</p>
                                    <div className='flex justify-start items-center space-x-4'>
                                        <a
                                          href={project.link}
                                          className='text-emerald-400 hover:text-blue-300 transition-colors'>
                                            <FaLinkedin/>
                                          </a>
                                         <a
                                          href={project.git}
                                          className='text-emerald-400 hover:text-blue-300 transition-colors'>
                                            <FaGithub/>
                                          </a>

                                    </div>
                                </div> 
                            </div>
                           </motion.div>
                      )}
                     </AnimatePresence>
                </motion.div>
            ))}
           </div>

        </div>
    </div>
  )
}

export default Portfolio
