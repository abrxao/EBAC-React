export default function NumberInput(props){
    return(
        <div className={props.className}>
            <label htmlFor={props.name}>{props.name}</label>
            <input type="number" name={props.name} />
        </div>
    )
}