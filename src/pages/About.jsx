import React from 'react';
import project1 from '../assets/images/proj5.png';
import project2 from '../assets/images/proj6.png';

const About = () => {
  return (
    <section id="about" className='text-white p-8'>
      <h2 className='text-6xl font-bold mb-8'>
        About <span className='text-emerald-300'>Me</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='border border-white/20 rounded-lg p-6'>
         <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
        <p className='text-white/50 mb-6'>
            Ijtaba Hasan, a final-year BSAI student at BIIT, specializes in AI with hands-on experience in <b>machine learning</b>,
            <b>deep learning, NLP, and computer vision</b>. He has completed multiple internships and builds intelligent systems with
            practical skills in <b>React Native</b> for mobile integration of AI models.
        </p>

       <div className='rounded-lg p-4 mb-4 border border-white/20'>
  <code className='text-emerald-200/50'>
    skills = [<br />
    &nbsp;&nbsp;"Machine Learning",<br />
    &nbsp;&nbsp;"Deep Learning",<br />
    &nbsp;&nbsp;"Natural Language Processing (NLP)",<br />
    &nbsp;&nbsp;"Computer Vision",<br />
    &nbsp;&nbsp;"React Native",<br />
    &nbsp;&nbsp;"SQL & Database Management"<br />
    ]
  </code>
</div>

        </div>

        <div className='border border-white/20 rounded-lg p-6'>
         <h3 className='text-2xl font-bold mb-2'>02. Expertise</h3>
         <p className='text-white/50'>
           A skilled AI enthusiast with expertise in machine learning, deep learning, NLP, and computer vision. 
           Also experienced in React Native development, enabling the creation of intelligent mobile apps. Proficient
           in Python programming and well-versed in handling databases efficiently using SQL. Passionate about solving 
           real-world challenges through innovative AI-driven solutions and continuous learning.
        </p>
        <div className='mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden'>
        <img
        src={project1}
        alt="Project 1"
        className='absolute inset-0 w-full h-full object-cover'
        />
        </div>
        </div>
        <div className='border border-white/20 rounded-lg p-6'>
         <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
         <p className='text-white/50 mb-4'>
            A passionate AI-focused developer skilled in building intelligent systems using machine learning 
            and deep learning techniques. With strong backend experience in Python, SQL, and cloud platforms like AWS,
            he excels at designing scalable systems and integrating AI into real-world applications.
          </p>
          <div className='grid grid-cols-1 text-center gap-4'>
             <div className='border border-white/20 rounded-lg p-3'>
              <h4 className='text-emerald-300 font-medium mb-2'>Machine Learning (AI/ML)</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                 <li>Deep Learning</li>
                 <li>Computer Vision</li>
                 <li>Machine Learning</li>
                 <li>Natural Language Processing (NLP)</li>
              </ul>
             </div>
             <div className='border border-white/20 rounded-lg p-3'>
              <h4 className='text-emerald-300 font-medium mb-2'>Development</h4>
              <ul className='text-white/50 space-y-1 text-sm'>
                 <li>Python</li>
                 <li>React Native</li>
                 <li>SQL & Database Management</li>
              </ul>
             </div>
          </div>
        </div>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-8'>
         <div className='border border-white/20 rounded-lg p-6'>
         <div className='space-y-4'>
            <div>
                <label className='block text-sm font-medium mb-1'>
                    Front-end
                </label>
                <div className='w-full bg-white/10 rounded-full h-2'>
                  <div 
                  className='bg-emerald-300 h-2 rounded-full'
                  style={{width: "65%"}}>
                  </div>
                </div>
            </div>
             <div>
                <label className='block text-sm font-medium mb-1'>
                    Back-end
                </label>
                <div className='w-full bg-white/10 rounded-full h-2'>
                  <div 
                  className='bg-emerald-300 h-2 rounded-full'
                  style={{width: "75%"}}>
                  </div>
                </div>
            </div>
             <div>
                <label className='block text-sm font-medium mb-1'>
                   AI & ML
                </label>
                <div className='w-full bg-white/10 rounded-full h-2'>
                  <div 
                  className='bg-emerald-300 h-2 rounded-full'
                  style={{width: "90%"}}>
                  </div>
                </div>
            </div>
         </div>
         <h3 className='text-2xl font-bold mt-10 mb-2'>04. Approach</h3>
         <p className='text-white/50'>
        I adopt a solution-oriented approach to development, combining a deep understanding of AI algorithms with practical software engineering skills.
         I focus on building intelligent systems that not only solve real-world problems but are also optimized for user experience. My workflow emphasizes 
         clean data pipelines, model evaluation, and seamless integration of AI models into production-ready applications, particularly mobile and web platforms. </p> 
        </div>
        <div className='border border-white/20 rounded-lg p-6 flex flex-col justify-between'>
        <div className='relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden'>
          <img
          src={project2}
          alt="Project2"
          className='absolute inset-0 w-full h-full object-cover'/>
        </div>
        <div>
          <h3 className='text-2xl font-bold mt-2 mb-2'>05. Goals</h3>
         <p className='text-white/50'>
        Passionate about leveraging artificial intelligence to solve real-world challenges, 
        he aims to build intelligent systems that enhance everyday life. With a strong foundation 
        in machine learning and NLP, his goal is to contribute to innovative AI solutions that bridge
        research and practical impact. He also aspires to grow as a versatile developer combining AI with modern development tools. </p> 
        </div>
        </div>
     </div>

      
    </section>
  )
}

export default About
