import React from 'react';
import Main from './Main';
import { Router } from '@reach/router';
import Show from './components/Show';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.css';
import PetForm from './components/PetForm';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Router>
        <Form path="/petshelter" />
        <Main path="/petshelter/all"/> 
        {/* //Connects to Main which links to both PetList and PetForm at the "/all" route */}
        <PetForm path="/petshelter/add"/> 
        {/* //Adds the PetForm without the PetList on it's own route  */}
        <Show path="/petshelter/:id"/> 
        {/* //directs the show route to the id */}
        <Update path="/petshelter/edit/:id" /> 
        {/* // specifies that the edit component will appear on the 3000 server as /edit/id instead of at the show route */}
      </Router>
    </div>
  );
}

export default App;
