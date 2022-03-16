
import './App.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

function App() {

  const handleExpend = () => {
    console.log('handle exp')
  }
  return (
    <>
    <div className="container">
      <div className="title">Questions And Answers About Login
      </div>
      <ul>
        <li className='question'>
          <p>Do I have to allow the use of cookes?</p>
          <button onClick= {handleExpend} className ="btn" href="#"><FontAwesomeIcon icon={faPlus}/></button>
        </li>
        
      </ul>
    </div> 
    </>
  );
}

export default App;
