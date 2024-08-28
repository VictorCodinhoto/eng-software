
import logo from './logo.svg';
import './App.css';
import { Interface } from 'readline';
import { ListFormat } from 'typescript';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

export var buscadorExport: number = 0
export default function SegundaPagina(){
    const [buscador,setBuscador] = useState("");
    
    const [aparecerBotao, setAparecerBotao] = useState(false);
    function buscarNumero(){
        const buscadorNum = Number(buscador);
        buscadorExport = buscadorNum;
        setAparecerBotao(true);
       
        
    }
    
    return(
        <div className="App">
            <header className="App-header">
                <h1>Busque o número de seu interesse!</h1>
                <div>
                 <input type="number" value={buscador} onChange={(event) => setBuscador(event.target.value)}/>
                 <button onClick={buscarNumero}>Enviar</button>
                  {aparecerBotao &&(<button>
                   <Link to="/TerceiraTela">Próxima Página</Link></button>)}

            </div>
            </header>
           
        </div>
        
    );
}

