import React from 'react'
import Banner from './component/Banner'
import ServiceGallery from './component/ServiceGallery'
import HomeAbout from './component/HomeAbout'

const page = () => {
  return (
    <div>
      <Banner/>
      <ServiceGallery/>
      <HomeAbout/>
    </div>
  )
}

export default page
