import React,{useState} from 'react';
import {MdEmail} from 'react-icons/md';
import {ImKey} from 'react-icons/im';
import {FaUser} from 'react-icons/fa';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {HiIdentification} from 'react-icons/hi';
import useEmail from '../../EmailInput/useEmail';

const withValidation=(Component)=> {
    return (({name,...otherProps})=>{
            const [isInvalid, setIsInvalid] = useState(false)
            
            const inputTypes = {
                
                password: {
                    icon:<ImKey/>,
                    valid:(e)=>{
                        const password = e.target.value;
                        const uppercase = /[A-Z]/;
                        const lowercase = /[a-z]/; 
                        const numbers = /[0-9]/;
                        const specialChars = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
                        if(password.length > 8){
                            setIsInvalid(true);
                        }
                        if(password.length < 8){
                            setIsInvalid(true);
                        }
                        var auxUppercase = 0;
                        var auxLowercase = 0;
                        var auxNumber = 0;
                        var auxspecial = 0;
                        for(var i=0; i<password.length; i++){
                            if(uppercase.test(password[i]))
                            auxUppercase++;
                            else if(lowercase.test(password[i]))
                            auxLowercase++;
                            else if(numbers.test(password[i]))
                            auxNumber++;
                            else if(specialChars.test(password[i]))
                            auxspecial++;
                        }
                        
                        if (auxUppercase > 0){
                            if (auxLowercase > 0){
                                if (auxNumber > 0){
                                    if (auxspecial) {
                                        setIsInvalid(false);
                                    }
                                }
                            }                        
                        }
                    }
                },
                user: {
                    icon:<FaUser/>,
                    valid:(e)=>{
                        const rgx = /[" "]/g
                        if(e.target.value.length<=5 ||rgx.test(e.target.value)){
                            setIsInvalid(true);
                        }else{
                            setIsInvalid(false);
                        }
                    }
                },
                phone:{
                    icon:<BsFillTelephoneFill/>,
                    valid:(e)=>{
                        const phone = e.target.value;
                        var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{5}-[0-9]{4})|(9[0-9]{4}-[0-9]{4}))$');
                        setIsInvalid(!regex.test(phone));
                    },
                    onkeydown:(e)=>{
                        const val = e.target.value;
                        e.target.value = val.replaceAll(/[a-zA-Z]/g,"")
                        if(e.key!="Backspace"){
                            if(val.length==0){
                                e.target.value = "("
                            }
                            if(val.length==3){
                                e.target.value += ")"
                            }if(val.length==9){
                                e.target.value += "-"
                            }if(val.length>14){
                                e.target.value = val
                            }
                        }
                        
                    },
                },
                name:{
                    icon:<FaUser/>,
                    valid:(e)=>{
                        if(e.target.value.length<=5){
                            setIsInvalid(true);
                        }else{
                            setIsInvalid(false);
                        }
                    }
                    
                }
            }
            
            const type = inputTypes[name]??false;
            
            return (
                <Component {...otherProps}
                type={name}
                onKeyPress={type && inputTypes[name]["onkeydown"]}
                name={name} Icon={type.icon}
                onKeyUp={type && inputTypes[name]["valid"]}
                valid={isInvalid}/>
                )
            })
        }
        withValidation.displayName="withValidation";
        
        export default withValidation;
        