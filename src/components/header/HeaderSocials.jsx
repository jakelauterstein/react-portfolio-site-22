import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsYoutube} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/jake-lauterstein/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href="https://github.com/jakelauterstein" target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.youtube.com/channel/UChetJQuzKxBIiCJH6kMNFKw" target='_blank' rel='noreferrer'><BsYoutube /></a>
    </div>
  )
}

export default HeaderSocials