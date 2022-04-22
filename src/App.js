import './App.css';
import Home from './views/Home';
import {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom';
import AddCard from './views/AddCard';


function App() {
  const LOCAL_STORAGE_KEY ='cardsSave.cards'
  const [newCard, addNewCard] = useState([
    {key:'', bank:'', cardnumber:'XXXX XXXX XXXX XXXX', cardholder:'FIRSTNAME LASTNAME',valid:'MM/YY', color:"#D0D0D0"}])
  const [allCards, addCard] = useState([
     { bank:"ninja", cardnumber:'6454 7453 5432 2323', cardholder:'CHRISTIAN JOHNSSON', valid:'12/24', color:"#222222", textcolor:"#FFFFFF"  }]) 

  useEffect(() => {const timer = setTimeout(() => {
    const storedCards = JSON.parse(localStorage.getItem
      (LOCAL_STORAGE_KEY))
      if (storedCards) {addCard(storedCards)}
  }, 2);
  return () => clearTimeout(timer);
  }, [])

  useEffect(() =>{
    const timer = setTimeout(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allCards))
    }, 50);
    return () => clearTimeout(timer);
  }, [allCards])

  return (
    <div className="App">
      
      <header className="App-wrapper">
      <Routes>
      <Route path='/' element={<Home allCards={allCards} topCard={allCards[0]} addCard={addCard}/>}/>
      <Route path='/addcard' element={<AddCard allCards={allCards} topCard={newCard} addCard={addCard}/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;
