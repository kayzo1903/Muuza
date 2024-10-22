import { getData } from '@/app/util/Fetchs'
import React from 'react'
import Postscards from './Postscards'
import { PostInterfaces } from '@/app/util/PostDefn'

const Posts = async () => {
  const InfoData : PostInterfaces[] = await getData()

  return (
    <div className='flex w-full flex-wrap justify-center md:justify-start items-center   gap-4'>
      {
        InfoData.slice(0 , 8).map((items , index) =>{
          const { categories , mainImage ,  title , publishedAt , slug} = items
          const {title : cattilte } = categories[0]
 
          return (
              <Postscards 
              key={index}
               category={cattilte}
               date={publishedAt} 
               image={mainImage.asset.url}
               slug={slug.current}
               title={title} />
          )
        })
      }

    </div>
  )
}

export default Posts