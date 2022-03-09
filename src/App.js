import 'bootstrap/dist/css/bootstrap.min.css' ;
import Header from './Components/Header';
import ContainerCard from './Components/ContainerCard';
import axios from 'axios';
import { useState, useEffect } from 'react';
let url = 'https://react-corso-api.netlify.app/.netlify/functions/gelateria';

function App() { 
  let [iceCream, setIceCream ] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [isError, setIsError] = useState(false);
  let getData = async () => {
    setIsLoading(true);
    setIsError(false)
    try {
      let response = await axios.get(url);
      setIceCream(response.data.data);
    } catch (error) {
      setIsError(true)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])
  
  if(isLoading){
    return <h1>Sto caricando</h1>
  } else if(isError) {
    return <h1>Ops, errore!</h1>
  }

  return (
    <div className="App">
      <Header/>
      <div className="my-container color-bg-cont">
        <ContainerCard {...iceCream}/> 
      </div>
    </div>
  );
}

export default App;
