import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';
import './blog.scss'
import { useEffect, useState } from "react";

import post1 from './../../assets/images/posts/1.png'
import post2 from './../../assets/images/posts/2.png'
import post3 from './../../assets/images/posts/3.png'

function Blog() {
  useEffect(() => {
    const header = document.querySelector('header');
    header.classList.add('is-scrolled')

    const handleScroll = () => {
      if (window.scrollY > 0) {
        const header = document.querySelector('header');
        header.classList.add('is-scrolled');
      } else {
        const header = document.querySelector('header');
        header.classList.add('is-scrolled-blog')
        console.log(123);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      const header = document.querySelector('header');
      if (header) {
        header.classList.remove('is-scrolled');
      }
    };
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });

  const animationVariants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <section className='flex justify-center flex-col items-center'>
          <div className="container mt-32">
            <h2 className="title-black mb-12">Blog</h2>
            <div className="flex gap-10">
             <p className="flex gap-4 content-center category all">
                  <div className="marker"></div>
                  All
             </p>
             <p className="flex gap-4 content-center category all">
                  <div className="marker"></div>
                    About
             </p>
             <p className="flex gap-4 content-center category all">
                  <div className="marker"></div>
                  Coding
             </p>
             <p className="flex gap-4 content-center category all">
                  <div className="marker"></div>
                  Design
             </p>
             <p className="flex gap-4 content-center category all">
                  <div className="marker"></div>
                  News
             </p>
            </div>
          </div>

      </section>
      <section id="posts" className="posts">
            <div className='container grid mb-32 grid-cols-3 justify-beetwen gap-4'>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                    <img src={post1} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 60
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                     <img src={post2} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 120
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                     <img src={post3} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                     <img src={post3} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 60
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                     <img src={post3} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    variants={animationVariants}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 120
                    }}               
                    className='flex flex-col cursor-pointer'
                >
                     <img src={post3} />
                    <p className='ac-wide mt-4' style={{fontSize: '24px'}}>
                        Services
                    </p>
                    <p className='mt-4'>
                        Development of websites and web applications for lovers of he future Development  and web applications forlovers of the future Deveopment  for lovers of the future
                    </p>
                </motion.div>
            </div>
        </section>
    </>

  );
}

export default Blog;