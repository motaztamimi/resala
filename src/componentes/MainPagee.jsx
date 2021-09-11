import React from 'react'
import { Link } from "react-router-dom";
import "../index.css"
import img1 from "./Asset 8.png"

const MainPagee = () => {
    return (
        <div className='container'>
            <div className="toptext">
                
       
            <h4 className='projectTitle'>
            تحقيق كتاب
            </h4>
        <h3 className='projectTitle'>
          فتح القدير للكمال بن الهمام
        </h3>
      
        <h3 className='projectTitle'>
          على الهداية شرح بداية المبتدي
        </h3>
        <h4 className='projectTitle'>
        لبرهان الدين المرغيناني
            </h4>
            </div>
        <div className='selectSection'>
          <Link to='/projectIdea'> فكرة المشروع</Link>
          <Link to='/Rasael'>التعريف بالمشرف على المشروع</Link>
          <Link to='/Rasael'>تصفح وتحميل الرسائل </Link>
          <Link to='/table'>كشف بأسماء الرسايل</Link>
        </div>
       
        <img  id ="imageHomepage"src={img1} alt="" />
      </div>
    )
}

export default MainPagee
