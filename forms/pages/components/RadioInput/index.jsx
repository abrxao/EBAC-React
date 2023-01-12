export default function RadioInput(props) {
    return (
        <div className={props.className} onChange={props.onChange} onClick={props.onClick}>
            <fieldset>
                <legend className={`${props.className}__title`}>{props.name}</legend>

                <div className={`${props.className}__inputs`} id={props.id}>
                {props.options.map((elem,index)=>{
                    return (
                        <div key={index} >
                        <input type="radio" name={props.name} id={elem} value={elem}/>
                        <label htmlFor={elem} id={elem}>{elem}</label>
                        </div>
                        )
                    })
                }
                </div>
            </fieldset>
            
        
        </div>
        )
            
        }