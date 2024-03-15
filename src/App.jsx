import { useEffect } from 'react'
import { useState } from 'react'
import Header from './Header/Header'
import './App.css'
import Footer from './Footer/Footer'
import { shuffleArray } from './Functions/Functions'
import Board from './Board/Board'
import Score from './Score/Score'
import Button from './Buttons/Button'
const key = 'live_FnGQLgbKWULzGrAn7Bxc9dK5sdoQjF1mzWRLfECxFaeLekeQei4naczZOadYGpcE'

function App() {
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [gameover, setGameover] = useState('false')
  const [btnStyle, setBtnStyle] = useState('btn')
  const [cards, setCards] = useState([
    {
      id: 'C3KfxN2DG',
      image: 'https://cdn2.thedogapi.com/images/C3KfxN2DG.jpg',
      name: 'Akbash Dog',
      clicked: false,
    },
    {
      id: 'Mn2A5Urz0',
      image: 'https://cdn2.thedogapi.com/images/Mn2A5Urz0.jpg',
      name: 'Bearded Collie',
      clicked: false,
    },
    {
      id: '8vgnFmYG8',
      image: 'https://cdn2.thedogapi.com/images/8vgnFmYG8.jpg',
      name: 'Chesapeake Bay Retriever',
      clicked: false,
    },
  ])

  useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await fetch(
        `https://api.thedogapi.com/v1/images/search?&api_key=${key}&has_breeds=1&limit=12`
      );
      const data =  await response.json();
      console.log(data);
      
      const dogInfo = data.map((dog) => {
        return{
          id: dog.id,
          image: dog.url,
          name: dog.breeds[0].name,
          clicked: false,
        }
      })
      console.log(dogInfo);

      const shuffled = shuffleArray(dogInfo);

      console.log(shuffled);

        
       setCards(shuffled);
    }catch(error) {
    console.log("Error fetching data:", error);
  }
}
    fetchInfo();
  }, []);

  useEffect(() => {
    function roundShuffle() {
      const hand = shuffleArray(cards)
      setCards(hand)
    }
    roundShuffle();
  }, [score, cards])

  /*useEffect(() => {
    const handleStyle = () =>{
      if (gameover === true){
        setbtnStyle('btn pulse-button')
      }else{
        setbtnStyle('btn pulse-button')
      }
      console.log(btnStyle)
    }
    function over(){
      handleStyle();
      console.log(gameover);
    }
    over();
  }, [gameover])*/


  return (
    <>
      <Header />
      <Score
      score={score}
      highScore={highScore} />
      <Board
      cards={cards}
      setGameover={setGameover}
      gameover={gameover} 
      score={score}
      setScore={setScore} 
      highScore={highScore} 
      setHighScore={setHighScore} 
      clicked={clicked} 
      setClicked={setClicked}
      setBtnStyle={setBtnStyle}
      />
      <Button 
      name={'New Game'}
      setScore = {setScore}
      setClicked = {setClicked}
      setGameover={setGameover}
      setBtnStyle={setBtnStyle}
      className={btnStyle}
      />
      <Footer />
    </>
  )
}

export default App
