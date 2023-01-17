import {MdEmail} from 'react-icons/md';
import {RiLockPasswordFill} from 'react-icons/ri';
import {FaUser} from 'react-icons/fa';

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
                const especialChars = /[!|@|#|$|%|^|&|*|(|)|-|_]/;
                if(password.length > 8){
                    console.log(false);
                }
                if(password.length < 8){
                    console.log(false);
                }
                var auxUppercase = 0;
                var auxLowercase = 0;
                var auxNumber = 0;
                var auxEspecial = 0;
                for(var i=0; i<password.length; i++){
                    if(uppercase.test(password[i]))
                    auxUppercase++;
                    else if(lowercase.test(password[i]))
                    auxLowercase++;
                    else if(numbers.test(password[i]))
                    auxNumber++;
                    else if(especialChars.test(password[i]))
                    auxEspecial++;
                }
                
                if (auxUppercase > 0){
                    if (auxLowercase > 0){
                        if (auxNumber > 0){
                            if (auxEspecial) {
                                console.log(true);
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

export default function withValidation(Component) {
    return ({name,...otherProps}) =>{
        const icon = inputTypes[name]["icon"]??"";   
        return (
            <div>
            <Component {...otherProps} name={name} Icon={icon} onBlur={inputTypes[name]["valid"]}/>
            </div>)
        }
    }
    