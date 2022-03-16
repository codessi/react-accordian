import React, {useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";



const Questions = ({i, el}) => {
  const [open, setOpen] = useState(false)

  const handleExpend = () => {
    setOpen(!open)
    console.log('handle exp')
  }

  return (
    <li className='question' >
          <div className="question-wrapper">
            <h4>{el.title}</h4>
            <button onClick= {handleExpend} className ="btn" href="#"><FontAwesomeIcon icon={open ? faMinus : faPlus  }/></button>
          </div>   
          <p className={open? "info open":"info" }> {el.info}</p>  

        </li>
  )
}

export default Questions