//import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';
//import Image from 'next/image'
import Header from '../components/Header';
import {sanityClient, urlFor} from "../sanity";
import { Post } from '../typings';

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  //console.log(posts);
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Maestro Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      <Header />

      <div className='flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0'>
        <div className='px-10 space-y-5'>
          <h1 className="max-w-xl font-serif text-6xl">
            <span className="underline decoration-black decoration-4">
              Maestro
            </span> {" "}
            is a place to learn and read about tech.
          </h1>
          <h2>
            Learn about trending topics with thousands of readers.
          </h2>
        </div>
     
          <img className='hidden md:inline-flex h-32 lg:h-full' src="https://i.ibb.co/5KkL229/icon.png" alt="" />  
      </div>

      
      {/* post */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-5 md:p-6'>
        {posts.map(post => (
          <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className='border rounded-lg group cursor-pointer overflow-hidden' >
               <img src={urlFor(post.mainImage).url()!}  alt="" className='h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out' />
               <div className='flex justify-between p-5 bg-white'>
                  <div>
                    <p className='text-lg font-bold'>{post.title}</p>
                    <p className='text-xs'>{post.description} by {post.author.name}</p>
                  </div>
                   <img src={urlFor(post.author.image).url()!} alt="" className='h-12 w-12 rounded-full' />
               </div>
            </div>

          </Link>

        ))}

      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
   
  const query = `*[_type == "post"] {
    _id,
    title,
    author-> {
     name,
     image
    },
    description,
    mainImage,
    slug
  }`;

  const posts = await sanityClient.fetch(query);

  return{
    props: {
      posts,
    },
  }; 

};
