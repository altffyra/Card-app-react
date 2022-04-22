import React from 'react'
import Top from '../components/Top'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import CardForm from '../components/CardForm'


function AddCard(props) {
  const {addCard, topCard, allCards } = props
   
  return (
    <section>
    <Top topTitle="ADD A NEW BANK CARD"/>
    <p className='small'>NEW CARD</p>
    <Card topCard={topCard[0]}/>
    <CardForm allCards={allCards} addCard={addCard}/>
    <Link to="/">back</Link>
    </section>
  )
}

export default AddCard