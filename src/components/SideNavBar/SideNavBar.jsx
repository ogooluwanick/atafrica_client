import React from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import { RxCross1 } from "react-icons/rx"
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'


const SideNavBar = ({toggle ,setToggle  ,sideNavRef, autoRef,learnRef, indexDropdown, setIndexDropdown}) => {
  return (
        <motion.div className='sideNavbar' initial={{y:"-100%"}} animate={{y:"0%"}} exit={{y:"-100%"}} ref={sideNavRef}>
                <div className="sideBody">
                        <div className="header">
                                <a href="/"><h5>L3</h5></a>
                                <RxCross1 onClick={()=>setToggle(false)} />
                        </div>

                        <div className="links">
                                <a className="b1 app__flex" href='/#' onClick={()=>setToggle(false)}><span>Cash</span></a>
                                <a className="b1 app__flex" href='/#' onClick={()=>setToggle(false)}><span>Bonds</span></a>
                                <button className="app__flex" onClick={()=>setIndexDropdown(val => ({ ...val, auto: !indexDropdown.auto }))} ref={autoRef}>
                                        <div className="app__flex">
                                                <span>Automated Investing</span> { indexDropdown.auto ? <FaAngleDown /> : <FaAngleUp />}
                                        </div>
                                        <AnimatePresence mode="wait">
                                                {
                                                        indexDropdown.auto && (
                                                                <motion.div className='submodal app__flex' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  onClick={(e)=>e.stopPropagation()}  >
                                                                        <a className="cta" href='/#' onClick={()=>setToggle(false)}>
                                                                                <div className="imgBox">
                                                                                        <img src="/imgs/time_img_link.svg" alt="nav link img" loading='lazy'  />
                                                                                </div>
                                                                                <div className="cta_data">
                                                                                        <h6>Blog  ↗</h6>
                                                                                        <p className="b2">Nerd out with us and learn more about investing</p>
                                                                                </div>
                                                                        </a>
                                                                        <div className="links">
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Socially Responsible (SRI)</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Retirement (IRAs)</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>College (529s)</span></a>
                                                                                <hr />
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Explore all investments</span></a>
                                                                        </div>
                                                                </motion.div>
                                                        )
                                                }
                                        </AnimatePresence>
                                </button>
                                <a className="b1 app__flex" href='/#' onClick={()=>setToggle(false)}><span>Stocks</span></a>
                                <button className="app__flex" onClick={()=>setIndexDropdown(val => ({ ...val, learn: !indexDropdown.learn }))} ref={learnRef}>
                                        <div className="app__flex">
                                                <span>Learn</span> { indexDropdown.learn ? <FaAngleDown /> : <FaAngleUp />}
                                        </div>

                                        <AnimatePresence mode="wait">
                                                {
                                                        indexDropdown.learn && (
                                                                <motion.div className='submodal app__flex' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}    onClick={(e)=>e.stopPropagation()}  >
                                                                        <a className="cta" href="/#" onClick={()=>setToggle(false)}>
                                                                                <div className="imgBox">
                                                                                        <img src="/imgs/blog_img_link.svg" alt="nav link img" loading='lazy' />
                                                                                </div>
                                                                                <div className="cta_data">
                                                                                        <h6>Blog  ↗</h6>
                                                                                        <p className="b2">Nerd out with us and learn more about investing</p>
                                                                                </div>
                                                                        </a>
                                                                        <div className="links">
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Help Center</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Pricing</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Tax-Loss Harvesting</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Historical Performance</span></a>
                                                                                <a className="b2" href='/#' onClick={()=>setToggle(false)}><span>Reviews</span></a>
                                                                        </div>
                                                                </motion.div>
                                                        )
                                                }
                                        </AnimatePresence>
                                </button>
                        </div>

                        <div className="btnBox app__flex">
                                <a className="right_btn secondary" href='/#'  onClick={()=>setToggle(false)}>Log in</a>
                                <a className="right_btn primary" href='/#' onClick={()=>setToggle(false)}>Get started</a>
                        </div>
                </div>
        </motion.div>
  )
}

export default SideNavBar