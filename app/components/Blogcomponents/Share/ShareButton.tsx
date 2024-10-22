import React from 'react'
import { FacebookShare , PinterestShare, TwitterShare, WhatsappShare } from 'react-share-kit'

interface Blogshare {
  link : string 
}

const ShareButton:React.FC<Blogshare> = ({ link }) => {
  return (
    <div className='w-fit px-2 flex gap-2 flex-nowrap'>
        <FacebookShare url={link} size={32} />
        <TwitterShare url={link} size={32}/>
        <WhatsappShare url={link} size={32} />
        <PinterestShare  url={link} size={32} media={''} />
    </div>
  )
}

export default ShareButton