import React from 'react'

const Button = () => {
function handleClick(){
    console.log("button clicked");
}
  return (
    <div>
      <button onClick={handleClick}>Change the background</button>
    </div>
  )
}

export default Button
