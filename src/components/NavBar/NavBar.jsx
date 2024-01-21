import React, { useEffect, useState } from 'react'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import useOnclickOutside from 'react-cool-onclickoutside'
import SideNavBar from '../SideNavBar/SideNavBar'


const NavBar = () => {
        const autoRef = useOnclickOutside(() => setIndexDropdown({ ...indexDropdown, auto:false}));
        const learnRef = useOnclickOutside(() => setIndexDropdown({ ...indexDropdown, learn:false}));
        const sideNavRef = useOnclickOutside(() => setToggle(false));

        const [indexDropdown, setIndexDropdown] = useState({auto:false, learn:false})

        const [scrollPos, setScrollPos] = useState(0);
        const [screen, setScreen] = useState(0)
        const [toggle, setToggle] = useState(false);


        useEffect(() => {
                function handleScroll() {
                  setScrollPos(window.pageYOffset);
                }
                //initialize
                handleScroll()

                window.addEventListener('scroll', handleScroll);
            
                return () => {
                  window.removeEventListener('scroll', handleScroll);
                };
        }, []);

        useEffect(() => {
                const handleResize = () => {
                        setScreen(window.innerWidth);
                }
                
                //initialize
                handleResize();

                window.addEventListener("resize", handleResize);

                return () => {
                        window.removeEventListener("resize", handleResize);
                };
        }, []);

  return (
        <>
                <div className={`landing_nav ${scrollPos >= 5  && "blur_navbar"} `} id="navBar">
                        <div className="topnav">
                                <a className="logo-box" href={"/"} >
                                        <div  className={"logo"} >
                                                <img src="/imgs/aa_logo.png" alt="site logo" width={30} height={30} />
                                        </div>

                                        <h1>Lucre3</h1>
                                </a>

                                {
                                        screen > 1200 ?
                                        <div className="btnBox app__flex">
                                                <a className="right_btn secondary" href='/#'>Log in</a>
                                                <a className="right_btn primary" href='/#'>Get started</a>
                                        </div>
                                        :
                                        <div className="ham_holder">
                                                <div id="menu-btn" className={`  ${"hamburger"} ${toggle? `${"open"}`:""}`}  onClick={()=>setToggle(val=>!val)} ref={sideNavRef}>
                                                        <span className={"hamburger1"}></span>
                                                        <span className={"hamburger2"}></span>
                                                        <span className={"hamburger3"} ></span>
                                                </div>
                                        </div>   
                                }


                        </div>
                        <div className="bottomnav">
                                <a className="" href='/#'><span>Cash</span></a>
                                <a className="" href='/#'><span>Bonds</span></a>
                                <button className="app__flex" onClick={()=>setIndexDropdown(val => ({ ...val, auto: !indexDropdown.auto }))} ref={autoRef}>
                                        <span>Automated Investing</span> { indexDropdown.auto ? <FaAngleDown /> : <FaAngleUp />}
                                        <AnimatePresence mode="wait">
                                                {
                                                        indexDropdown.auto && (
                                                                <motion.div className='submodal app__flex' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  onClick={(e)=>e.stopPropagation()}  >
                                                                        <div className="cta">
                                                                                <div className="imgBox">
                                                                                        <img src="/imgs/time_img_link.svg" alt="nav link img" loading='lazy'  />
                                                                                </div>
                                                                                <div className="cta_data">
                                                                                        <h6>Blog  ↗</h6>
                                                                                        <p className="b2">Nerd out with us and learn more about investing</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="links">
                                                                                <a className="b2" href='/#'><span>Socially Responsible (SRI)</span></a>
                                                                                <a className="b2" href='/#'><span>Retirement (IRAs)</span></a>
                                                                                <a className="b2" href='/#'><span>College (529s)</span></a>
                                                                                <hr />
                                                                                <a className="b2" href='/#'><span>Explore all investments</span></a>
                                                                        </div>
                                                                </motion.div>
                                                        )
                                                }
                                        </AnimatePresence>
                                </button>
                                <a className="" href='/#'><span>Stocks</span></a>
                                <button className="app__flex" onClick={()=>setIndexDropdown(val => ({ ...val, learn: !indexDropdown.learn }))} ref={learnRef}>
                                        <span>Learn</span> { indexDropdown.learn ? <FaAngleDown /> : <FaAngleUp />}
                                        <AnimatePresence mode="wait">
                                                {
                                                        indexDropdown.learn && (
                                                                <motion.div className='submodal app__flex' initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}    onClick={(e)=>e.stopPropagation()}  >
                                                                        <div className="cta">
                                                                                <div className="imgBox">
                                                                                        <img src="/imgs/blog_img_link.svg" alt="nav link img" loading='lazy' />
                                                                                </div>
                                                                                <div className="cta_data">
                                                                                        <h6>Blog  ↗</h6>
                                                                                        <p className="b2">Nerd out with us and learn more about investing</p>
                                                                                </div>
                                                                        </div>
                                                                        <div className="links">
                                                                                <a className="b2" href='/#'><span>Help Center</span></a>
                                                                                <a className="b2" href='/#'><span>Pricing</span></a>
                                                                                <a className="b2" href='/#'><span>Tax-Loss Harvesting</span></a>
                                                                                <a className="b2" href='/#'><span>Historical Performance</span></a>
                                                                                <a className="b2" href='/#'><span>Reviews</span></a>
                                                                        </div>
                                                                </motion.div>
                                                        )
                                                }
                                        </AnimatePresence>
                                </button>
                        </div>
                </div>


                <AnimatePresence mode="wait">
                        {
                                toggle && (
                                        <SideNavBar 
                                                toggle={toggle} 
                                                setToggle={setToggle} 
                                                sideNavRef={sideNavRef} 
                                                autoRef={autoRef}
                                                learnRef={learnRef}
                                                indexDropdown={indexDropdown}
                                                setIndexDropdown={setIndexDropdown}/>
                                )
                        }
                </AnimatePresence>
        </>
  )
}

export default NavBar