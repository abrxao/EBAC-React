export default function TextInput(props){
    return(
        <div className={props.className}>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="text" name={props.name} onChange={props.onChange}/>
        </div>
    )
}