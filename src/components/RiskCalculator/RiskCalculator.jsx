import React, { useState } from 'react'
import { CiCircleQuestion } from 'react-icons/ci';

const RiskCalculator = () => {
        const [riskLevel, setRiskLevel] = useState(8);
        const factors = [
                { name: 'Nigerian Stocks', risk: 9, bgc:"#7D64F2" },
                { name: 'Foreign Stocks', risk: 4, bgc:"#0066F5" },
                { name: 'Tech Stocks', risk: 7, bgc:"#9FF676" },
                { name: 'Emerging Stocks', risk: 6, bgc:"#FFDF6F" },
                { name: 'Nigerian Bonds', risk: 4, bgc:"#bdc6f5" },
                { name: 'Foreign Bonds', risk: 7, bgc:"#D2CFD1" },
                { name: 'Commodities', risk: 3, bgc:"#7186c9" },
                { name: 'Real Estate', risk: 3, bgc:"#ad6135" },
                { name: 'T-Bills', risk: 4, bgc:"#df8c5e" },
                { name: 'Alternative', risk: 1, bgc:"#fed1b9" },
        ];

// init risk distribution in percentages
const handleRiskChange = (value) => {
  setRiskLevel(value);
};



const allocatePoints = (riskLevel) => {
        // Ensure riskLevel is within a valid range
        riskLevel = Math.min(Math.max(riskLevel, 1), 10);
      
        // Sort factors based on their original order
        const sortedFactors = factors.slice().sort((a, b) => a.risk - b.risk);
      
        // Calculate total points to distribute
        let totalPoints = 100;
      
        // Calculate the number of factors with a fair share of points
        const numFactors = Math.min(riskLevel, factors.length);
      
        // Initialize the distribution object
        const distribution = {};
      
        // Calculate points for each factor
        sortedFactors.slice(0, numFactors).forEach(factor => {
          const factorPoints = Math.floor((totalPoints / numFactors) * (1 - factor.risk / 10));
          distribution[factor.name] = factorPoints;
          totalPoints -= factorPoints;
        });
      
        // Assign remaining points to the factor with the highest risk
        if (totalPoints > 0) {
          const highestRiskFactor = sortedFactors[sortedFactors.length - 1];
          distribution[highestRiskFactor.name] += totalPoints;
        }
      
        // Reorder the distribution based on the original order
        const orderedDistribution = {};
        factors.forEach(factor => {
          orderedDistribution[factor.name] = distribution[factor.name] || 0;
        });


      
        return orderedDistribution;
      };
      
      
    
    
    
    
      const riskDistribution = allocatePoints(riskLevel)

console.log("riskDistribution", riskDistribution);

  return (
        <div className="risk_tol">
                <div className="risk_slider">
                        <div className="sliderBox">
                                <div className="header app__flex">
                                        <b className="b1">Risk score: {riskLevel}</b>
                                        <p className="b2">Example portfolio</p>
                                </div>

                                <input type="range" id="risk" name="risk" min="1" max="10" step={0.5} value={riskLevel} onChange={(e)=>handleRiskChange(parseInt(e.target.value, 10))} />
                        </div>

                        <div className="sliderProfiles">
                                {
                                        factors.map((item,i)=>(
                                                <div className="profileSection" key={i}>
                                                        <p className='b1'><span className="icon app_flex">{item.name}</span><CiCircleQuestion /></p>
                                                        <div className='percentBox'>
                                                                <div className="b1 percent" style={{backgroundColor: item.bgc, '--progress': `${riskDistribution[item.name]}%` }}>{riskDistribution[item.name]}%</div>
                                                        </div>
                                                </div>
                                        ))
                                }
                        </div>
                </div>
                <div className="risk_info">
                        <h3>Smarter investing, brilliantly personalized.</h3>

                        <p className="b2">Just answer a few questions, and we&apos;ll build you a personalized portfolio of low-cost index funds from up to 17 global asset classes. Our software handles all the trading, rebalancing, and other busywork to help grow your wealth for the long term.</p>

                        <button className="right_btn primary">Get started </button>
                </div>
        </div>
  )
}

export default RiskCalculator