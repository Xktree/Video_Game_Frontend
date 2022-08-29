import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import './Components/ConsoleData/ConsoleData';
import ConsoleData from './Components/ConsoleData/ConsoleData';
// import GameGenreData from './Components/GameGenreData/GameGenreData';
import Navbar from './Components/Navbar/Navbar';
import Searchbar from './Components/Searchbar/Searchbar';

function App() {

    const [videoGames, setVideoGames] = useState([])

    useEffect(() => {
        fetchVideoGames();
    })

    async function fetchVideoGames(){
        try {
            const response = await axios.get('http://localhost:8080/all');
            setVideoGames(response.data);
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div>
            <Navbar/>
            <div>
                <ConsoleData videoGames={videoGames}/>
                {/* <GameGenreData videoGames={videoGames}/> */}
            </div>
            <div>
                <Searchbar videoGames={videoGames}/>
            </div>
        </div>
    );
}
    
export default App;
