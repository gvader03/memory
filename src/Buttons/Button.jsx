import './button.css'

function Button(props){
const reset = () => {
    props.setScore(0);
    props.setClicked([]);
    props.setGameover('false');
    props.setBtnStyle('btn');
}

    return (
        <button className={props.className} onClick={() => reset()}>{props.name}</button>
    )
}

export default Button;