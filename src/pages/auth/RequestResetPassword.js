import React, {useState,useEffect, useRef} from "react";
import {useNavigate,useLocation,Link} from "react-router-dom";
import {chackeVal,MinLoder,PasswordViewer,getCurrentTime,idGenerator,authErros, Toast} from "../Utils";
import {texts, quotes} from "../texts/Texts";
import {sendRequestResetEmail} from "./FirebaseConfig";

const RequestResetPassword =({language})=>{
  const navigate = useNavigate();
  const [curQuote, setcurQuote] = useState(quotes[Math.floor(Math.random()* quotes.length)]);
  const [states, setStates] = useState({loading: false});
  const [datas,setDatas]=useState({email:""});
  const [error,setError]=useState({email:null, error:{text:null, stack:null}});
  
  const handleChange = (event)=>{
    const field = event.target.name, value = event.target.value;
    setDatas(prevData=>({...prevData,[field]:value}));
  } // em cada input em digitação atualiza o valor no state
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    const errors = new Array();
    if(!datas.email.match(/^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/)){setError(prevError=>({...prevError,email:texts.invalidEmail[language]}));errors.push(1);}
    if(errors.length <= 0){setStates(prevState=>({...prevState,loading:true}));
      handleRequest();
    }
  }
  
  async function handleRequest(){
    try{
      const res = await sendRequestResetEmail(datas.email);
      const response = await res;
      setStates(prevState=>({...prevState,loading:false}));
      setError(prevError=>({...prevError,error:{text:texts.requestSent[language], stack:"success"}}));
    }catch(error){
      for(let i = 0; i < authErros.length; i++){
        if(error.code === authErros[i].name){
          let errorMessage = texts[authErros[i].target][language]; // exemplo: texts.invalidPassword.ptPT retona "Senha inválido!"
          let stack = authErros[i].stack;
          setError(prevError=>({...prevError,error:{text:errorMessage,stack:stack}}));
          setStates(prevState=>({...prevState,loading:false}));
        }
      }
    }
  }
  
  const handleClearError = (event)=>{
    const field = event.target.name; setError(prevError=>({...prevError,[field]:null}));
  } // limpar os erros renderizados pelos inputs vazios ou inválidos
  
  return(
    <section className="sec_forms flex_c_c">
      <Toast props={error.error} onClear={()=>setError(prevError=>({...prevError,error:{text:null,stack:null}}))}/>
      <div className="form_header flex_c_c">
           {curQuote && <div className="form_quote_box">
            <p> <i className="bi bi-quote"></i> {curQuote.quote[language]}</p>
            <h3>{curQuote.owner}</h3>
          </div>}
       </div>
      <form onSubmit={handleSubmit} className="form flex_c_c">
        <div className="form_wrap">
          <div className="form_head flex_c_c">
            <div className="logo flex_c_c br60">
              A
            </div>
            <h1 className="formTitle">{texts.welcomeBack[language]}</h1>
            <p className="form_subtitle">{texts.byRequesting[language]} <Link to="/terms-of-conditions" className="a">{texts.termsOfConditionTitle[language]}</Link> {texts.and[language]} <Link to="/privacy-policy" className="a">{texts.privacyPolicyTitle[language]}</Link></p>
          </div>
          <div className="input_card">
            <div className="input_wrap flex_b_c">
              <input onChange={handleChange} onFocus={handleClearError} value={datas.email} className={chackeVal(datas.email, "input")} id="email" name="email" type="email" readOnly={states.loading}/>
               <label htmlFor="email">Email</label>
            </div>
            <div className="label_error">{error.email}</div>
          </div>
          <div className="input_card">
            <button disabled={states.loading} className="btns main_btns">{states.loading && <MinLoder/> || texts.request[language]}</button>
          </div>
          <div className="bottom_link">{texts.rememberPassword[language]} <Link to="/login" className="a">{texts.loginTitle[language]} {texts.now[language]}</Link></div>
        </div>
      </form>
    </section>
  );
}

export default RequestResetPassword;