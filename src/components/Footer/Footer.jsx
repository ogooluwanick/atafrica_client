import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import "./Footer.scss"
import { Link, animateScroll as scroll } from 'react-scroll';



const Footer = () => {

  return (
        <div className="footer">
                <hr style={{opacity:1, margin:"40px 0"}} />

                <div className="footer_content">
                        <div className="footer_child">
                                <a className="logo-box" href={"/"} >
                                        <div  className={"logo"} >
                                                <img src="/imgs/aa_logo.png" alt="site logo" width={30} height={30} />
                                        </div>

                                        <h1>Lucre3</h1>
                                </a>

                                <div className="nation">
                                        <div  className={"logo"} >
                                                <img src="/imgs/nig_flag.svg" alt="site logo" width={30} height={30} />
                                        </div>

                                        <p className="b2">Africa</p>

                                </div>

                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Investing
                                </p>

                                <a className="b2" href={"/#"}>Automated Investing</a>
                                <a className="b2" href={"/#"}>Stock Investing</a>
                                <a className="b2" href={"/#"}>Explore all investments</a>
                                <a className="b2" href={"/#"}>Retirement</a>
                                <a className="b2" href={"/#"}>College</a>
                                <a className="b2" href={"/#"}>Socially Responsible</a>
                                <a className="b2" href={"/#"}>Pricing</a>
                                <a className="b2" href={"/#"}>Tax-loss Harvesting</a>
                                <a className="b2" href={"/#"}>Historical Performance</a>
                                <Link className="b2" style={{cursor:"pointer"}}  to="top" smooth={true} duration={100} onClick={()=>scroll.scrollToTop()}>
                                        Back to top
                                </Link>

                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Company
                                </p>

                                <a className="b2" href={"/#"}>About Us</a>
                                <a className="b2" href={"/#"}>Newsroom</a>
                                <a className="b2" href={"/#"}>Reviews</a>
                                <a className="b2" href={"/#"}>Careers</a>
                                <a className="b2" href={"/#"}>Legal</a>
                                <a className="b2" href={"/#"}>Sitemap</a>
                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Legal
                                </p>
                                
                                <a className="b2" href="/">Terms of service</a>
                                <a className="b2" href="/">Privacy policy</a>
                                <a className="b2" href="/">Accessibility</a>
                                <a className="b2" href={"/#"}>Whitepapers</a>
                        </div>
                        <div className="footer_child">
                                <p className="b2">
                                        Contact
                                </p>

                                <a className="b2" href={"mailto:info@lucre3.africa"}>info@lucre3.africa</a>
                                <a className="b2" href={"tel:+234 000 444 3333"}>+234 000 444 3333</a>

                                <div className="socials">
                                        <a href="https://www.facebook.com/lucre3" target="_blank" rel="noopener noreferrer" ><FaFacebookF aria-label='Lucre3 facebook'/></a>
                                        <a href="https://www.tiktok.com/@lucre3" target="_blank" rel="noopener noreferrer" ><FaTiktok aria-label='Lucre3 tictok'/></a>
                                        <a href={`https://www.instagram.com/lucre3`} target='_blank' rel="noopener noreferrer"><AiFillInstagram aria-label='Lucre3 instagram'/></a>
                                        <a href="http://wa.me/80004443333" target="_blank" rel="noopener noreferrer"  ><FaLinkedinIn aria-label='Lucre3 whatsapp'/></a>
                                </div>
                        </div>
                </div>
                <hr style={{opacity:1}} />
                <p className='b2 copy_reserved'>
                        © 2023 Lucre3 Inc. All rights reserved.<br/>
                        For further details see our Legal Disclosures. By using this website, you accept our Terms of Use and Privacy Policy. <br/>
                        For information about filing a complaint please visit How to File a Complaint.
                </p>
        </div>
  )
}

export default Footer