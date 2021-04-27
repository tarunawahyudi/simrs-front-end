import React from 'react';

const Home = (props: {nama: string}) => {

    return (
        <div>
            <h1>{props.nama ? `Hai ${props.nama}, Bagaimana mana harimu? 😋` : "Maaf, kamu belum login"}</h1>
        </div>
    );
}

export default Home;
