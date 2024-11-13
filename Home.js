import React,{useState,useEffect} from "react";
import {useNavigate, useLocation,Link, NavLink} from "react-router-dom";
import {texts} from "../texts/Texts";
import Packages from "../cabinet/Packages";
import {MainNav,Footer} from "./Navigations";
import ReviewsIcon from './ReviewsIcon';
import {handleScrollTo} from "../Utils";

const Home =({language, onChanges})=>{
  const allDots = Math.floor(16);
  useEffect(()=>{
    handleScrollTo();
  },[]);
  return(
    <main>
      <MainNav language={language}/>
      <header className="header">
        <div className="header-container">
          <img src="../public/assets/features.jpg" className="image" />
          <div className="header-contents">
            <h1 className="heading">{texts.headerTitleA[language]} <span>{texts.headerTitleB[language]}</span> {texts.headerTitleC[language]}</h1>
            <p className="description">{texts.headerParagraph[language]}</p>
           <Link className="a" to="/cabinet/fleets"> <button className="header-btn">{texts.startNow[language]}</button></Link>
          </div>
        </div>
      </header>
      <section className="sec-packages flex_c_c">
      <div className="sec_wrap">
        <div className="features-header">
          <div className="title">{texts.packagesTitleA[language]} <span>{texts.packagesTitleB[language]}</span>  {texts.packagesTitleC[language]}</div>
          <p className="features-paragraph">{texts.packagesParagraph[language]}</p>
        </div>
        <Packages language={language}/>
       </div>
      </section>
      <section className="sec-features flex_c_c">
        <div id="features_dots_header" className="features_dots_header flex_wrap">
          {[...Array(allDots)].map((_, index)=>(
          <div key={index}></div>
          ))}
        </div>
        <div id="features_dots_bottom" className="features_dots_bottom flex_wrap"></div>
        <div className="sec_wrap">
          <div className="features-header">
            <div className="title">{texts.featuresTitleA[language]} <span>{texts.featuresTitleB[language]} </span>{texts.featuresTitlec[language]}</div>
            <p className="features-paragraph">{texts.featuresParagraph[language]}</p>
          </div>
               <div className="flex_wrap features-container">
         {texts.features.map(f=>(
         <div key={f.title[language]} className="features-card">
        <div className="features-icon flex_c_c"><i className={f.icon}></i></div>
         <div className="features-text">
             <h4>{f.title[language]}</h4>
             <p>{f.paragraph[language]}</p>
         </div>
      </div>
      ))}
        </div>
        </div>
     </section>
      <section className="sec-community flex_c_c ">
        <div className="communityCard sec_wrap">
          <div className="leftContents">
            <h3 className="title">{texts.reviewsHeaderTitleA[language]} <span>{texts.reviewsHeaderTitleB[language]}</span> {texts.reviewsHeaderTitleC[language]}</h3>
            <div className="communityBody">
              <p> {texts.reviewsHeaderParagraph[language]}</p>
            </div>
            <Link to="/reviews" className="a"> <button className="btns main_btns">{texts.findOutMore[language]}</button></Link>
          </div>
          <div className="rightContents">
            <div className="container">
              <ReviewsIcon/>
            </div>
  </div>
</div>     
 </section>
     <Footer language={language} onChanges={onChanges}/>
    </main>
  );
}

export default Home;