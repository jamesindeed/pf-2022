import React, { useRef, useEffect, useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';
import cn from 'classnames';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const images = [
  {
    src: 'https://images.unsplash.com/photo-1566204773863-cf63e6d4ab88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1345&q=100',
    title: 'Pamela Peters',
    subtitle: 'Portfolio Website',
    category: 'Website',
  },
  {
    src: 'https://images.unsplash.com/photo-1558603668-6570496b66f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=100',
    title: 'Todoly',
    subtitle: 'Todo app to better your life',
    category: 'Application',
  },
  {
    src: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=100',
    title: 'Extra',
    subtitle: 'Software as a service',
    category: 'SAAS',
  },
  {
    src: 'https://images.unsplash.com/photo-1611145367651-6303b46e4040?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2006&q=100',
    title: 'Golden Pothos',
    subtitle: 'New Zealand',
    category: 'Photography',
  },
];

function ProjectItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn('project-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div></div>
      <div className='project-item'>
        <div className='project-item-info'>
          <h1 className='project-info-title'>{title}</h1>
          <h2 className='project-info-subtitle'>{subtitle}</h2>
          <p className='project-info-category'>{category}</p>
        </div>
        <div
          className='project-item-image'
          style={{ backgroundImage: `url(${src})` }}
        ></div>
        {/* <img className='project-item-image' src={src} /> */}
      </div>
      <div></div>
    </div>
  );
}

const Projects = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section id='projects' className='project-wrap'>
      <div className='project'>
        <div className='project-counter'>
          <span>{activeImage}</span>
          <span className='divider' />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <ProjectItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
