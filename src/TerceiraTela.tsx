import './App.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { buscadorExport } from './SegundaTela';
import { listaExport } from './App';

export default function TerceiraTela() {
    const [aparecerBotao, setAparecerBotao] = useState(false);
    const [resultado, setResultado] = useState('');

    useEffect(() => {
        verificarSeOBuscadorEstaNaLista();
    }, []);

    function verificarSeOBuscadorEstaNaLista() {
        if (!listaExport || listaExport.length === 0) {
            setResultado("Não está na lista ou não está disponível!");
            return;
        }

        const numeroEstaNaLista = listaExport.includes(buscadorExport);

        if (numeroEstaNaLista) {
            setResultado("O número contém na lista!");
        } else {
            setResultado("O número não contém na lista!");
        }

        setAparecerBotao(true);
    }

    return (
        <div id="App">
            <header className="App-header">
                <div>O número:</div>
                <div>{buscadorExport}</div>
                <div>{resultado}</div>
                {aparecerBotao && (
                    <button>
                        <Link to="/">Voltar ao começo</Link>
                    </button>
                )}
            </header>
        </div>
    );
}
