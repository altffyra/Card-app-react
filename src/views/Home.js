import React from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import CardStack from '../components/CardStack'
import Top from '../components/Top'



function Home(props) {
    const {addCard, topCard, allCards } = props
    const navigate = useNavigate();

   function deleteCurrentCard()
   {if (window.confirm('Are you sure you want to delete this card?') && allCards.length > 1) {
    let tempArray= [...allCards]
    tempArray.shift(0)
    addCard(tempArray);
  } else {console.log('Did not delete. STOP TRYING TO BREAK MY CODE!');}}
   
  return (
    <section>
    <Top topTitle="E-Wallet"/>
    <button className='deletebutton clearLCbutton' onClick={()=>window.localStorage.clear()}>CLEAR LOCALSTORAGE</button>
    <button className='deletebutton' onClick={deleteCurrentCard}>DELETE ACTIVE CARD</button>
    <p className='small'>ACTIVE CARD</p>
    <Card topCard= {topCard}/>
    <CardStack allCards={allCards} addCard={addCard}/>
    <button className='AddNewCardButton ButtonHome' onClick={() => navigate('/addcard')}> ADD A NEW CARD</button>
    </section>
  )
}

export default Home