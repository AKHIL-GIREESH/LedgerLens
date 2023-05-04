import Image from 'next/image'
import React from 'react'
import Navbar from './Navbar'



const Article = () => {


  


  return (
<>
<Navbar/>
<div className="flex flex-col lg:flex-row bg-black text-white min-h-screen">
      <div className="lg:w-3/4 lg:mr-8 px-3 py-3">
        <Image
          src=""
          alt="Blog post header image"
          width={1200}
          height={600}
          className="object-cover w-full h-64 lg:h-96 rounded-xl"
        />
        <h1 className="text-3xl font-bold my-6">Title</h1>
    
        <p className="text-gray-600 my-6">
          Donec malesuada odio eget nisi hendrerit ultricies. Aliquam euismod, nunc vel porttitor
          fermentum, nibh quam fringilla diam, ut consequat justo elit id arcu. Nunc at purus
          ipsum. Mauris blandit lobortis convallis. Sed auctor, urna eu malesuada vehicula, neque
          augue finibus purus, at iaculis tortor velit eget nibh.
        </p>
      </div>
      <div className="lg:w-1/4">
        {/* <Ad /> */}
        <div className="my-6">
          <h3 className="text-xl font-bold mb-3">Top Readers</h3>
          {/* <BlogCard
            title="Blog Post Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/blog-post-thumbnail.jpg"
            slug="/blog/blog-post"
          />
          <BlogCard
            title="Blog Post Title"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            imageSrc="/images/blog-post-thumbnail.jpg"
            slug="/blog/blog-post"
          /> */}
        </div>
      </div>
    </div>
</>  )
}

export default Article
