
export default function Header(props) {
    return(<div className="title">
        <hgroup>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </hgroup>
        
    </div>
    )
};