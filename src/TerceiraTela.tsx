import './App.css';
import { Interface } from 'readline';
import { ListFormat } from 'typescript';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { buscadorExport } from './SegundaTela';
import {listaExport} from './App'


export default function TerceiraTela(){
    function buscadorExportFun (){
        return buscadorExport;
    }
    function verificarSeOBuscadorEstaNaLista(){
        if (!listaExport || listaExport.length === 0) {
            return " não está na lista ou não está disponível!";
        }
        for( let i = 0; i < listaExport.length;i++){
            if(buscadorExport === listaExport[i]){
                return ("O número contém na lista!")
            }
        }
            return ("O número não contem na lista!")
        
    }
    return(
        <div id="App">
            <header className="App-header">
                <div>O número</div>
                <div>{buscadorExport}</div>
                <div>{verificarSeOBuscadorEstaNaLista()}</div>

            </header>

        </div>
    );
}
