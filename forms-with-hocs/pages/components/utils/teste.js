export default function teste(Component) {
    return ({value,...otherProps}) =>{

        const value2 = value * 4;
        const isInvalid = value2 > 10 ? true : false;
        return <div><Component value={value2} invalid={isInvalid} {...otherProps}/></div>
    }
}
