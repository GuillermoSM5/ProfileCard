import React from 'react';
import bgbottom from '../picture/bg-pattern-bottom.svg';
import bgtop from '../picture/bg-pattern-top.svg';
import "./bubbles.scss"
function Bubble(){
    return(
         <>
         <div className="bg-bottom">
         <img src={bgbottom} alt=""/>
         </div>
         <div className="bg-top"> 
         <img src={bgtop} alt=""/>
         </div>
         
         </>
    )
}

export default Bubble;