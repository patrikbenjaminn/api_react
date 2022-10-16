import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'https://api.thecatapi.com/v1/images/search?api_key='

function App() {
  
  const [kissa, setKissa] = useState('')
  const [rotu, setRotu] = useState('')
 
  function refreshPage() {
    window.location.reload(false);
  }
  

  useEffect(() => {
    axios.get(URL)
    .then((response)=>{
      const kuva = response.data[0].url
      //const rotu = response.data[0].breeds[0].name
      
      if (response.data[0].breeds.length == 1){
      setRotu(response.data[0].breeds[0].name);}
      else{
        setRotu ("Maatiaiskissa");
      }
      setKissa(kuva)
    }).catch(error => {
      alert("Söpöä kissaa ei voida hakea")
    })
   }, [])

  return (
    <div>
      <h1>Mikä kissa olet tänään?
      </h1>
      <div>
      <img src= {kissa} ></img>
      </div>
      <h3> {rotu}! </h3> 
      <div>
      <button onClick={refreshPage}>Kokeile uudelleen!</button>
    </div>
    </div>
  );
}

export default App;
