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
          src="https://images.unsplash.com/photo-1682685797741-f0213d24418c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="Blog post header image"
          width={1200}
          height={600}
          className="object-cover w-full h-64 lg:h-96 rounded-xl"
        />
        <h1 className="text-3xl font-bold my-6">Title</h1>
    
        <p className="text-gray-600 my-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."        </p>
      </div>
      <div className="lg:w-1/4">
        {/* <Ad /> */}
        <div className="my-6">
          <h3 className="text-xl font-bold mb-3">Top Readers</h3>
          <article
  className="flex items-end justify-between mt-5 rounded-xl border border-gray-100 bg-white p-6"
>
<div>
      <p className="text-sm text-gray-500">User1</p>

      <p className="text-xl font-medium text-gray-900">23 Articles Read</p>
    </div>
  <div className="flex items-center gap-4">
 
  
  </div>
</article>
<article
  className="flex items-end justify-between mt-5 rounded-xl border border-gray-100 bg-white p-6"
>
<div>
      <p className="text-sm text-gray-500">User5</p>

      <p className="text-xl font-medium text-gray-900">15 Articles Read</p>
    </div>
  <div className="flex items-center gap-4">
   

  
  </div>
</article>

<article
  className="flex items-end justify-between mt-5 rounded-xl border border-gray-100 bg-white p-6"
>
<div>
      <p className="text-sm text-gray-500">User4</p>

      <p className="text-xl font-medium text-gray-900">4 Articles Read</p>
    </div>
  <div className="flex items-center gap-4">
  

  
  </div>
</article>
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
