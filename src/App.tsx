import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';
import { ListFormat } from 'typescript';

function App() {
    const [valor1,setvalor1] = useState('');
    const [valor2,setvalor2] = useState('');
    const [valor3,setvalor3] = useState('');
    const [valor4,setvalor4] = useState('');
    const [valor5,setvalor5] = useState('');
    const [valor6,setvalor6] = useState('');
    const [valor7,setvalor7] = useState('');
    const [valor8,setvalor8] = useState('');
    var [lista,setLista] = useState<number[]>([]);
    const [aparecerBotao, setAparecerBotao] = useState(false);
    var continuar = false;

  
    useEffect(() => {
      if (lista.length > 0) {
        for (let i = 0; i < lista.length; i++) {
          if (lista[i] == 0) {
            alert("Há Campos nulos!");
            break;
          }
          
          if(i == lista.length -1){
            alert(lista.join(', '));
            setAparecerBotao(true);
          }
        }
      }
    }, [lista]); 
  function setIntoListAndOrganize(){
    const listaDesordenada = [
      Number(valor1), Number(valor2), Number(valor3), Number(valor4),
      Number(valor5), Number(valor6), Number(valor7), Number(valor8)
  ];
  setLista(bubbleSort(listaDesordenada));
    

  }
  function bubbleSort(array: any) {
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
          if (array[i] > array[j]) {
              let aux = array[i];
              array[i] = array[j];
              array[j] = aux;
          }
      }
  }
  return array;
}
  return (
    <div className="App">
      <header className="App-header">
        <h1>Digite números inteiros!</h1>
        <div>
          <input type="number" value={valor1} onChange={(event) => setvalor1(event.target.value)}/>
          <input type="number" value={valor2} onChange={(event) => setvalor2(event.target.value)}/>
          <input type="number" value={valor3} onChange={(event) => setvalor3(event.target.value)}/>
          <input type="number" value={valor4} onChange={(event) => setvalor4(event.target.value)}/>
          <input type="number" value={valor5} onChange={(event) => setvalor5(event.target.value)}/>
          <input type="number" value={valor6} onChange={(event) => setvalor6(event.target.value)}/>
          <input type="number" value={valor7} onChange={(event) => setvalor7(event.target.value)}/>
          <input type="number" value={valor8} onChange={(event) => setvalor8(event.target.value)}/>
        </div>
        <button onClick={setIntoListAndOrganize}>Enviar</button>
        {aparecerBotao &&(<button>Próxima página</button>)}
      </header>
    </div>
  );
}

export default App;
