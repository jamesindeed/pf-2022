import React from 'react';

export default function Featured() {
  return (
    <section className='featured-section' data-scroll-section>
      <div className='featured-row-layout'>
        <h6>1. Interior Design | Site</h6>
        <img
          src='https://cdn.dribbble.com/users/1430543/screenshots/16777122/media/290d8f5c51cbebe68326d5a6c5136cf0.png?compress=1&resize=1600x1200&vertical=top'
          data-scroll
        />
      </div>
      <div className='featured-column-layout'>
        <h6>2. Artwork Site</h6>
        <img
          src='https://cdn.dribbble.com/users/228368/screenshots/16950744/media/7dbc1e0484d18fce73ba825e67dceeae.png?compress=1&resize=1600x1200&vertical=top'
          data-scroll
        />
      </div>
    </section>
  );
}
