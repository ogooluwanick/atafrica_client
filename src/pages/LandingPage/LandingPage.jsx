import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa';
import RiskCalculator from '../../components/RiskCalculator/RiskCalculator';

const LandingPage = () => {
        // eslint-disable-next-line no-unused-vars
        const [scrollPos, setScrollPos] = useState(0);
        const [screen, setScreen] = useState(0)

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
    <div className='landingPage app__container'>
        <div className="hero_container  app__flex" >
                <motion.div  whileInView={{y:["-20px", "0px"], opacity:[0,1]}}  className="hero_data">
                        <h1>Managed investing made to grow your wealth</h1>
                        <p className="b1">We'll build you a smart, sophisticated investment portfolio designed to help you achieve your goals.</p>
                        <button className="right_btn primary">Get started</button>
                </motion.div>
                <motion.div  whileInView={{y:["20px", "0px"], opacity:[0,1]}}  className="hero_vid">
                        <video width="480" height="270"  aria-hidden="true"
                                aria-label="video"
                                autoPlay
                                muted
                                playsInline
                                loop
                                preload="auto" 
                                poster='/imgs/v1_preview.png'
                        >
                                <source src="/vids/v1.webm" type="video/webm"/>
                                <track kind="captions" src=""/>
                        </video>
                </motion.div>
        </div>

        <RiskCalculator />

        <div className="usecases">
                <h2>Professionally managed portfolios, tailored to you.</h2>

                <div className="uses app__flex">
                        <div className="">
                                <h5>Reliable and diversified</h5>
                                <p className='b1'>
                                        Your money is invested in a wide range of asset classes across the market. It's a time-tested way to help maximize returns while minimizing risk.
                                </p>
                        </div>
                        <div className="">
                                <h5>Made for modern investors</h5>
                                <p className='b1'>
                                        Get access to rare, innovative investing opportunities without high fees. Enjoy intuitive tech and get human help along the way.
                                </p>
                        </div>
                        
                        <div className="">
                                <h5>Supported by experts</h5>
                                <p className='b1'>
                                        Our in-house investment team will customize a portfolio to suit your risk tolerance and goals. They keep a close eye on market trends and opportunities, so you don’t have to.
                                </p>
                        </div>
                </div>
        </div>

        <div className="our_pros" style={{alignItems:"flex-start", gap:screen>900?"88px":"120px",justifyContent:"flex-end",flexDirection:screen>900 ? "row-reverse" : "column-reverse"}}>
                <motion.div  whileInView={{y:["-16px", "0px"], opacity:[0,1]}}  className="right_child desc_cta">
                        <h4>Invest with confidence</h4>

                        <h6>Withstand market highs and lows</h6>
                        <p className="b2">Gain access to professional cobtruction services at any time, ensuring convenience and reliability. Experience the flexibility of obtaining expert assistance whenever you need it.</p>
                     
                        <h6>Make the most of your money</h6>
                        <p className="b2">In the background, we&apos;re taking care of the little things that make a big difference, like asset allocation, rebalancing, and dividend reinvestment.</p>
                        
                        <h6>Trusted advice, any time</h6>
                        <p className="b2">Our advisors are here to help at every stage of your money journey — and as fiduciaries, they'll always put your financial best interests first.</p>


                        <a className="right_btn primary" href={"/homeowners"}>
                                <span>See more</span>
                                {/* <SvgRight id="svgright"   /> */}
                        </a>
                </motion.div>
                <div className="left_child desc_img">
                        
                        <div className="">
                                <img src="/imgs/hero_zoe.avif" alt="site logo" width={505} height={560} />
                        </div>
                        <motion.div whileInView={{x:["0px", screen>900?"16px":"11px"],y:["0px", screen>900?"16px":"11px"]}} className="img_before" />

                        <p className="b3"><b>ZOE WOLPERT</b>, ADVISOR, CIM® (CHARTERED INVESTMENT MANAGER)</p>

                </div>
        </div>

        <div className="features">
                <div className="top_row">
                        <div className="leftchild">
                                <h3>Investing that fits your goals and values</h3>
                                <p className="b1">We’ll get to know you and what you’re saving for, then place you in a portfolio that helps you get there.</p>

                                <div className="feature" style={{backgroundColor:"#f9f2ef"}} >
                                        <h4>Classic portfolio</h4>
                                        
                                        <p className="b1">
                                                Smart and diversified, built for long-term growth in fluctuating markets with a wide range of low-fee ETFs.
                                        </p>
                                        <button><FaArrowRight /></button>
                                        <img src="/imgs/h_pie.avif" alt="hero deco" style={{width:"250px", height:"170px"}} />
                                </div>
                        </div>
                        <div className="rightchild feature" style={{backgroundColor:"#f1f0f0"}}>
                                <h4>Socially responsible investing</h4>

                                <p className="b1">
                                        Invest according to your faith with Canada's first ever Shariah-complaint ETF, certified by Islamic scholars and verified with a Fund Fatwa.                               
                                </p>
                                <button><FaArrowRight /></button>
                                <img src="/imgs/h_plant.avif" alt="hero deco" style={{width:"220px", height:"330px"}} />

                        </div>
                </div>
                <div className="bottom_row feature" style={{backgroundColor:"#e4e9d3",  maxHeight:screen>975 && "340px"}} >
                        <h4>Halal investing</h4>
                        <p className="b1">
                                Invest according to your faith with Canada&apos;s first ever Shariah-complaint ETF, certified by Islamic scholars and verified with a Fund Fatwa.
                        </p>
                        <button><FaArrowRight /></button>
                        <img src="/imgs/h_coin.avif" alt="hero deco" style={{width:"200px", height:"220px", top: screen>975 && "-130px"}} />
                </div>
        </div>

        <div className="features dark">
                <div className="top_row">
                        <div className="leftchild">
                                <h3>Invest beyond public markets</h3>
                                <p className="b1">Our alternatives investing program is exclusively available to Wealthsimple Premium and Generation clients. It’s where you get unprecedented access to opportunities traditionally reserved for industry insiders and the ultra-wealthy.</p>

                                <div className="feature" style={{backgroundColor:"#32302f", maxHeight:"560px"}} >
                                        <h4>Classic portfolio</h4>
                                        
                                        <p className="b1">
                                                Smart and diversified, built for long-term growth in fluctuating markets with a wide range of low-fee ETFs.
                                        </p>
                                        <button><FaArrowRight /></button>
                                        <img src="/imgs/h_cube2.avif" alt="hero deco" style={{width:screen>1000?"70%":"270px", height:screen>1000?"50%":"310px", left:screen>1000&&"15%"}} />
                                </div>
                        </div>
                        <div className="rightchild feature" style={{backgroundColor:"#32302f"}}>
                                <h4>Socially responsible investing</h4>

                                <p className="b1">
                                        Invest according to your faith with Canada's first ever Shariah-complaint ETF, certified by Islamic scholars and verified with a Fund Fatwa.                               
                                </p>
                                <button><FaArrowRight /></button>
                                <img src="/imgs/h_cube1.avif" alt="hero deco" style={{width:"270px", height:"310px", top: screen>1000 && "40px"}} />

                        </div>
                </div>
        </div>

        <div className="our_pros" style={{alignItems:"flex-start", gap:screen>900?"88px":"120px",justifyContent:"flex-end",flexDirection:screen>900 ? "row" : "column"}}>
                <motion.div  whileInView={{y:["-16px", "0px"], opacity:[0,1]}} transition={{duration:1}} className="right_child desc_cta">
                        <h4>Always here to help</h4>

                        <h6>Learn as you go</h6>
                        <p className="b2">Find answers to your investing questions in our help centre, personal finance magazine, or right in the app.</p>
                     
                        <h6>Talk to us any time</h6>
                        <p className="b2">Our support team is available by phone, chat, or email 7 days a week to answer any questions about your account.</p>
                        
                        <h6>Speak to an advisor</h6>
                        <p className="b2">Premium and Generation clients have access to a dedicated advisor. They&apos;re here to answer your money questions, no matter how complex.</p>


                        <a className="right_btn primary" href={"/homeowners"}>
                                <span>See more</span>
                                {/* <SvgRight id="svgright"   /> */}
                        </a>
                </motion.div>
                <div className="left_child desc_img">
                        
                        <div className="">
                                <img src="/imgs/h_sunmeet.avif" alt="site logo" width={505} height={560} />
                        </div>
                        <motion.div whileInView={{x:["0px", screen>900?"-16px":"-11px"],y:["0px", screen>900?"16px":"11px"]}} transition={{duration:1}} className="img_before"  style={{backgroundColor:"#e4e9d3"}}/>

                        <p className="b3"><b>SUNMEET HANSPAL</b>, ADVISOR, CIM® (CHARTERED INVESTMENT MANAGER)</p>
                       



                </div>
        </div>

        <div className="our_qoute">
                <span>❝</span>
                <hr />
                <h4>
                        The best way to achieve your financial goals is by investing in low-cost, diversified portfolios of risk-appropriate assets.
                        <br />
                        <br />
                        Our goal is to set you up for reliable returns across a range of market conditions.”
                </h4>
                <p className="b2"><b>BEN REEVES</b>, CHIEF INVESTMENT OFFICER</p>
        </div>

        <div className="pricing_plans">
                <h3>Get more as your wealth grows</h3>

                <div className="plans">
                        {
                                [
                                        {assestVal:1 , name:"Core", desc:"Get started with simple, low-fee financial tools.", features:["Automatic portfolio rebalancing","Help from a real, friendly, human"], fee:"0.5%", bgc:"#f8f0e5"},
                                        {assestVal:100000 , name:"Premium", desc:"Make the most of your investments with lower fees and tailored advice.", features:["20% lower management fee on your managed investments","Financial goal setting with an advisor"], fee:"0.4%", bgc:"#eeece8"},
                                        {assestVal:500000 , name:"Generation", desc:"Build your legacy with expert guidance from your dedicated team of advisors.", features:["All Core and Premium features","Dedicated team of advisors"], fee:"0.2%*–0.4%", bgc:"#2a2c33", color:"#fff"},

                                ].map((plan, i)=>(
                                        <div className="plan" style={{backgroundColor: plan.bgc, color:plan?.color}} key={i}>
                                                <p className="b4">₦ {plan.assestVal.toLocaleString()} IN ASSETS</p>
                                                <h4><span>{plan.name}</span> <FaArrowRight/></h4>
                                                <p className="b2">{plan.desc}</p>

                                                <div className="mt_fee">
                                                        <h4>{plan.fee}</h4>
                                                        <p className="b2">management fee</p>
                                                </div>
                                        </div>
                                ))
                        }
                </div>
        </div>

    </div>
  )
}

export default LandingPage