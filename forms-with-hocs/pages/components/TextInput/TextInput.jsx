
import withValidation from '../utils/withValidation';

export function TextInput({Icon, name,onBlur}){
    return(
        <div className='textInput'>
            <input type="text" name={name} onBlur={e=>{onBlur(e.target.value)}}/>
            <label forName={name}>{name[0].toUpperCase() + name.substring(1)}</label>
            <span>{Icon}</span>
        </div>
    )
}

const TextInputWithValidation = withValidation(TextInput)

export default TextInputWithValidation;
    