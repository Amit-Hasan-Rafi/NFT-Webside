import React from 'react'
import Button from '../../Common/Button/Button'
import "./TopFold.css"
function TopFold() {
  return (
    <div className='top-fold absolute-center' >
      <div className='tf-left' >
        <div className='tf-heading'>
          Discover collect, & sell <span className='heading-gradient'>Extraodinary</span> NFT
        </div>
        <div className='tf-discription'>
          Make sure you must buy the most trending NFT out there, What can make your life easier.
        </div>
        <div className='tf-left-btns'>
          <Button btnType='PRIMARY' btnText='EXPLORE' />
          <Button btnType='SECONDARY' btnText='Create' customClass='tf-left-secondary-btn'/>
        </div>
        <div className='tf-left-info-section'>
          <div className='tf-left-info-items absolute-center' >
          <div className='tf-left-info-count'>400k+</div>
          <div className='tf-left-info-label'>Collection</div>
          </div>
          <div className='tf-left-info-items absolute-center' >
          <div className='tf-left-info-count'>20k+</div>
          <div className='tf-left-info-label'>Artists</div>
          </div>
          <div className='tf-left-info-items absolute-center' >
          <div className='tf-left-info-count'>523k+</div>
          <div className='tf-left-info-label'>Commumity</div>
          </div>
        </div>
      </div>
      <div className='tf-right'></div>
    </div>
  )
}

export default TopFold