import React, { useState, useEffect} from 'react';
import { Chart } from 'react-google-charts';

const ConsoleData = ({videoGames}) => {

    let gamefilter = videoGames.filter( game => game.year >= 2013);

    let consoles = gamefilter.map(game => {
        return game.console
    });

    let distinctConsoles = [...new Set(consoles)]

    let consoleArrays = distinctConsoles.map(console => {
        
        let allGamesForConsole = gamefilter.filter(game => game.console == console)
        let globalConsoleSales = 0

        allGamesForConsole.forEach((game) => {
            globalConsoleSales += parseInt(game.globalSales)
        });
        return [console, globalConsoleSales, '#7731fb']
    });

    console.log('console arrays', consoleArrays);

    function generateData(){
        const data = [
            ['console', consoleArrays, { role: "display-style"}],
            ...consoleArrays
        ];

        return data; 
        console.log('data', data)
    }

    return (
        <div>
            <h1>Console By Global Sales in Millions</h1>
            <Chart chartType='ColumnChart' width='100%' height='400px' data={generateData()} />
        </div>
    );
}

export default ConsoleData;