export default function OptionsInput(props){
    return(
        <div>
            <label htmlFor={props.name}>{props.name}</label>
                <select name={props.name} >
                    {props.options.map((elem, index)=>{
                       return <option value={elem} key={index}>{elem}</option>
                    })}
                    </select>
        </div>
    )
}