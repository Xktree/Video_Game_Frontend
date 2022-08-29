import React from "react";
import { Chart } from 'react-google-charts';

const GenreData = ({videoGames}) => {
    
    function generateData(){

        let genre = videoGames.filter(game => game.genre.includes('Role-Playing'))
            console.log(genre)

        let bestVideoGames = genre.filter(game => game.northamericasales >= 2.5)

        let rolePlaying = bestVideoGames.map(game => {
            return [game.name, game.northamericasales]
        })
    }
}