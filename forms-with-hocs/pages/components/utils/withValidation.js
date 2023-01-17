import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';
import React,{useState} from 'react';

export default function withValidation(Component) {
    return ({name,...otherProps}) =>{
        const [isInvalid, setIsInvalid] = useState(false)
        
        const inputTypes = {
            email: {
                icon:<MdEmail/>,
                valid:()=>{},
            },
            password: {
                icon:<RiLockPasswordFill/>,
                valid:(password)=>{
                    {
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
                }
            },
            user: {
                icon:<FaUser/>
            },
        }

        const type = inputTypes[name]??"";

        return (
            <Component {...otherProps} type={name} name={name} Icon={type.icon} onKeyUp={type && inputTypes[name]["valid"]} valid={isInvalid}/>
            )
        }
    }
    