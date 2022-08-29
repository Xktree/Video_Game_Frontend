import React from 'react';
// import './SearchResults.css';

const SearchResults = ({gameResults}) => {

    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Rank</th>
                    <th>Platform</th>
                    <th>Year Released</th>
                    <th>Genre</th>
                    <th>Creator</th>
                    <th>Global Sales</th>
                </tr>
            {gameResults.map((videoGame) => {

                return (
                <tr>
                    <td>{videoGame.name}</td>
                    <td>{videoGame.game_rank}</td>
                    <td>{videoGame.platform}</td>
                    <td>{videoGame.year}</td>
                    <td>{videoGame.genre}</td>
                    <td>{videoGame.publisher}</td>
                    <td>{videoGame.globalsales}</td>
                </tr>
                )
            })}
            </table>
        </div>
    );
}

export default SearchResults;