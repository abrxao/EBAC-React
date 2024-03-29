export default function OptionsInput(props){
    
    return(
        <div className={props.className} onChange={props.onChange}>
            <label htmlFor={props.name}>{props.name}</label>
                <select name={props.name} id={props.name} >
                    {props.options.map((elem, index)=>{
                       return <option value={elem} key={index + elem}>{elem}</option>
                    })}
                    </select>
        </div>
    )
}