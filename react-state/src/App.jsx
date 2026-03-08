import { useState } from "react";
import { sculptureList } from "./data"


function App() {
  
  const[index,setindex] = useState(0);//React'a has bir index metodu.İndex'in başlangıç değeri userState içine atanır.
  const[showMore , setShowMore] = useState(false);

  let sculpture = sculptureList[index];

  function handleNextClick () {

    if(index < sculptureList.length-1){
      setindex(index+1);
    }else {
      setindex(0);
    }

    
  }
  function handlePreviousClick () {

    if(index > 0){
      setindex(index-1);
    }else{
      setindex(sculptureList.length-1);
    }
    
  }
  function handleMoreClick () {
    setShowMore(!showMore);
  }
 
  
  return(
    <>
    <button onClick={ handlePreviousClick }>Previous</button>
    <button onClick={ handleNextClick }>Next</button>

    <h2>
      <i>{sculpture.name} by {sculpture.artist}</i>
    </h2>
    <h3>({index+1} of {sculptureList.length})</h3>
    <button onClick = { handleMoreClick } >{showMore ? "Hide" : "Show"} details</button><br/>
    <img src={sculpture.url} alt={sculpture.alt} />
    
    {showMore && <p>{sculpture.description}</p>}
    
    </>
 
   
  )
 
}

export default App
