import React from 'react'

import { images } from '../../constants'
const SubHeading = () => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>Title</p>
      <img src={images.spoon} alt='spoon' className='spoon_img' />
    </div>
  )
}

export default SubHeading
