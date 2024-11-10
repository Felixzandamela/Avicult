import React,{useState, useEffect,useRef} from "react";
import {Link,useNavigate, Outlet} from "react-router-dom";
import {dbGateways} from '../auth/FirebaseConfig';
import {Loader, EmptyCard} from "../Utils";
import {texts} from "../texts/Texts";

const Gateways = ({language}) =>{
  const [datas,setDatas] = useState(null);
  const isMounted = useRef(true);
  
  useEffect(()=>{
    const newDatas = [];
    const handleGateways = snapChat =>{
      if(snapChat.exists()){
        snapChat.forEach((snapChatData)=>{
          const gateway = snapChatData.val();
          newDatas.push(gateway);
          if(snapChat.numChildren() === newDatas.length && isMounted.current){
            setDatas(newDatas);
          }
        });
      }else{if(isMounted.current){setDatas([]);}}
    }
    dbGateways.once("value",handleGateways);
    dbGateways.on("child_changed",()=>{
      setDatas(null);
      dbGateways.once("value",handleGateways);
    });
    return()=>{
      dbGateways.off("value", handleGateways);
      dbGateways.off("child_changed", handleGateways);
      setDatas([]);
      isMounted.current = false;
    }
  },[]);
  
  return(
    <section className="a_sec m20">
      <header className="a_sec_header flex_b_c">
        <h1 className="page-title ellipsis">{texts.paymentGateways[language]}</h1>
        <div className="flex_c_c">
          <Link to="/admin/payment-gateways/action?type=set&id=" className="a">
          <div className="a_reload  flex_c_c"> <p className="">{texts.newGateway[language]} </p>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
            </svg>
          </div>
          </Link>
        </div>
        </header>
        
        {!datas && <Loader language={language}/> ||
        <div className="a_gateways flex_wrap">
          {datas && datas.map(item=>(
           <div key={item.id} className="a_gateway_wrap">
              <div className="a_gateway a_conatiner">
                <img src={item.avatar} className="a_gateway_img" alt="gateway"/>
                <h4>{item.name && item.name || texts.notProvidedYet[language]}</h4>
                <p><b>{texts.account[language]}:</b> {item.account && item.account || texts.notProvidedYet[language]}</p>
                <p><b>{texts.accountOwner[language]}:</b> {item.owner && item.owner || texts.notProvidedYet[language]}</p>
                <p><b>{texts.paymentInstantly[language]}:</b> {item.paymentInstantly && texts.yesAndNot[language][0] || texts.yesAndNot[language][1]}</p>
                <p><b>{texts.showToThePublic[language]}:</b> {item.status && texts.yesAndNot[language][0] || texts.yesAndNot[language][1]}</p>
                <Link to={`/admin/payment-gateways/action?type=update&id=${item.id}`} className="a Edit">{texts.edit[language]}</Link>
              </div>
            </div>
          ))}
        </div>
        }
        <Outlet/>
    </section>
  );
}

export default Gateways;