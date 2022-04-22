import React from 'react'

function Top(props) {
    const topTitle = props.topTitle
  return (<div className='topTitleWrapper'><h1 className='topTitle'>{topTitle}</h1></div>)
}
export default Top