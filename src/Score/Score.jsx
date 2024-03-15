import './score.css'

function Score({score, highScore}) {

    return (
        <div className="scores">
            <h3 className='score'>Round Score: {score}</h3>
            <h3 className='score'>High Score: {highScore}</h3>
        </div>
    );
}

export default Score