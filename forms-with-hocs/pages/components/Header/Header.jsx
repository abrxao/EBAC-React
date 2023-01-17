import teste from "../utils/teste"

function Header({value, invalid}) {
    return(<>
        <h1 style={{
                color: (invalid ? '#f00' : '#000')
            }}>{value}</h1>
        {invalid && <p>muito ruim</p>}
    </>
       
    )
};

const ComponentTeste = teste(Header)

export default ComponentTeste;