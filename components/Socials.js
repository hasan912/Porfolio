import Link from 'next/link'

import {RiWhatsappLine,RiInstagramLine,RiFacebookLine,RiLinkedinLine,RiDribbbleLine,RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return( 
  <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://wa.link/lx08cc'} className=' hover:text-accent transition-all duration-300'><RiWhatsappLine/></Link>
    <Link href={'https://www.instagram.com/muhammed_hasan_baig/'} className=' hover:text-accent transition-all duration-300'><RiInstagramLine/></Link>
    <Link href={'https://www.facebook.com/profile.php?id=61551143001195'} className=' hover:text-accent transition-all duration-300'><RiFacebookLine/></Link>
    <Link href={'https://www.linkedin.com/in/muhammadhasanbaig/'} className=' hover:text-accent transition-all duration-300'><RiLinkedinLine/></Link>
    <Link href={'https://dribbble.com/m_hasan_baig'} className=' hover:text-accent transition-all duration-300'><RiDribbbleLine/></Link>
    <Link href={'https://github.com/hasan912'} className=' hover:text-accent transition-all duration-300'><RiGithubLine/></Link>
  
  
  </div>
)};

export default Socials;
