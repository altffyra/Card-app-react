import React from 'react'
import Card from './Card'

export default function CardStack(props) {

  const allCards= props.allCards
  const list = allCards.slice(1)
  const addCard=props.addCard
  

  function makeFirst(index) {
    let tempArray= [...allCards]
    let pick = tempArray[index+1]
    tempArray.unshift(pick)
    tempArray.splice(index+2,index+1)
    addCard(tempArray)
    };

  const cardItems = list.map((card, index)=>{

    return( <article onClick={() => makeFirst(index)} className="card">
     <Card  topCard={card} key={index+100} />
    </article>)})


  return (
 <section className='cards'>
   {cardItems}
 </section>
  )
}
