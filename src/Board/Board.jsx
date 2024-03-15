import "./board.css"
import Card from "../Card/Card";

function Board({cards, setGameover, gameover, score, setScore, highScore, setHighScore, clicked, setClicked, setBtnStyle}) {
    
    return (
        <div className="board">
            {cards.map((element) => (
                <Card key={element.id} id={element.id} image={element.image} title={element.name} setGameover={setGameover} gamover={gameover} score={score} setScore={setScore} highScore={highScore} setHighScore={setHighScore} clicked={clicked} setClicked={setClicked} setBtnStyle={setBtnStyle} />
            ))}
        </div>
    );
}

export default Board