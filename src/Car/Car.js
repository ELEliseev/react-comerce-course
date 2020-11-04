export default (props) => {
    return (
        <div>
            <h2>Car name:{props.name}</h2>
            <p>Year: <strong>{props.year}</strong></p>
            {props.children}
        </div>
    )
}