
export default function AnswersContent(props){
    return(
        <div className={`${props.className}__answer`}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gender: {props.gender}</p>
            <p>Marital Status: {props.maritalStatus}</p>
            <p>Document type: {props.document.type}</p>
            <p>Document number: {props.document.number}</p>
        </div>
    )
}
