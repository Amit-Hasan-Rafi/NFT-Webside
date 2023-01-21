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
          <Button btnType='SECONDARY' btnText='Create' customClass='tf-left-secondary-btn' />
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
      <div className='tf-right'>
        <div className='tf-right-bg-blop'></div>
        <div>
          <img className='tf-right-diamond-extra-pic' src='https://media2.giphy.com/media/cLAPUz8Jvm1oczApig/200w.webp?cid=ecf05e47o1xj2zx22h0h85hykxc9401n6z38iukb7dwkqlve&rid=200w.webp&ct=g' />
        </div>
        <div className='tf-right-diamond'>
          <div className='tf-right-diamond-items absolute-center'>
            <img className='tf-right-diamond-img' alt='diamond-banner' src='https://media1.giphy.com/media/ho0xXatV7b3Fo1ZRXN/giphy.gif?cid=ecf05e47zjtgmxmmywrtblghig11t1w09kydknltjef62me2&rid=giphy.gif&ct=g' />
          </div>
          <div className='tf-right-diamond-items absolute-center'>
            <img className='tf-right-diamond-img' alt='diamond-banner' src='https://media1.giphy.com/media/sEJ2mFp8LOLwWWPzd4/giphy.gif?cid=ecf05e476c14mpa65vy9oh3arrwveyj1rcq63nbmok9i0tnt&rid=giphy.gif&ct=g' />
          </div>
          <div className='tf-right-diamond-items absolute-center'>
            <img className='tf-right-diamond-img' alt='diamond-banner' src='https://media3.giphy.com/media/w334hyb3HGGGGHWvRw/giphy.gif?cid=ecf05e47pcdswvmfo6wy7yq9izebl9w3a4izymx4x8d09y6o&rid=giphy.gif&ct=g' />
          </div>
          <div className='tf-right-diamond-items absolute-center'>
            <img className='tf-right-diamond-img' alt='diamond-banner' src='https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=ecf05e47zjtgmxmmywrtblghig11t1w09kydknltjef62me2&rid=giphy.gif&ct=g' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopFold