export default function RadioInput(props) {

    return (
        <div className={props.className} onChange={props.onChange}>
            {
                props.options.map((elem,index)=>{
                    return (
                    <div key={index}>
                        <input type="radio" name={props.name} value={elem} defaultChecked={index==0?true:false}/>
                        <label value={elem}>{elem}</label>
                    </div>
                    )
                })
            }
        </div>
    )

}