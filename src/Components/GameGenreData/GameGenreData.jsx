import React from "react";
import { Chart } from 'react-google-charts';

const GenreData = ({videoGames}) => {
    
    function generateData(){

        let genre = videoGames.filter(game => game.genre.includes('Role-Playing'))
        console.log(genre)
    }
}