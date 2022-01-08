import React, { useState } from 'react';

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

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  return (
    <div className='gallery-item-wrapper'>
      <div></div>
      <div className='gallery-item'>
        <div className='gallery-item-info'>
          <h1 className='gallery-info-title'>{title}</h1>
          <h2 className='gallery-info-subtitle'>{subtitle}</h2>
          <p className='gallery-info-category'>{category}</p>
        </div>
        <div
          className='gallery-item-image'
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(1);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section data-scroll-section id='projects' className='gallery-wrap'>
      <div className='gallery'>
        <div className='gallery-counter'>
          <span>{activeImage}</span>
          <span className='divider' />
          <span>{images.length}</span>
        </div>
        {images.map((image, index) => (
          <GalleryItem
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

export default Gallery;