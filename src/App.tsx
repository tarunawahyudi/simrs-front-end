import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

    const [nama, setNama] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8000/api/user', {
                    headers: {'content-type' : 'application/json'},
                    credentials: 'include',
                });

                const content = await response.json();
                setNama(content.nama)
            }
        )();
    })



  return (
    <div className="App">
        <BrowserRouter>
            <Nav nama={nama}/>
            <main className="form-signin">
                <Route path="/" exact component={() => <Home nama={nama} />} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
            </main>
        </BrowserRouter>

    </div>
  );
}

export default App;
