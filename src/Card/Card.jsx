import "./card.css"

function Card({image, title, id, setGameover, gameover, score, setScore, highScore, setHighScore, clicked, setClicked, setBtnStyle}) {
    const handleClick = (arg) => {
        if(clicked.includes(arg)){
          console.log('yep')
          console.log(arg)
           setGameover('true')
           console.log(gameover)
          if(score > highScore){
            setHighScore(score)
          }
          setScore(0);
          setBtnStyle('btn pulse-button')
        }else {
            console.log('nope')
            console.log(arg)
            const scored = score;
            const newScore = scored+1
          setClicked(clicked => [...clicked, arg])
          setScore(newScore);
        }
    }

    return (
        <div className="card" onClick={() => handleClick(id)}>
            <img src={image} alt={title} className="image"/>
        </div>
    );
}

export default Card