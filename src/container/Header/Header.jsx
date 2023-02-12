import React from 'react'

import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header app__wrapper section__padding' id='home'>
      <div className='app__wrapper_info'>
        <img src={images.spoon} alt='spoon' className='spoon_img' />
      </div>
      <div className='app__wrapper_img'></div>
    </div>
  )
}

export default Header
