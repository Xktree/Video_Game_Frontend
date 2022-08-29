import React from 'react';
// import './Navbar.css';

const Navbar = (props) => {

    return (
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Navbar</title>
        </head>
        <body>
            <header>
                <nav>
                    <ul>
                        <li><a href='#search'>Find Your Game!</a></li>
                        <li><a href='#data'>Game Rankings</a></li>
                        <li><a href='#return'>Home</a></li>
                    </ul>
                </nav>
            </header>
        </body>
        </html>
    )
}

export default Navbar;