import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PetForm from './components/PetForm';
import PetList from './components/PetList';

export default () => {
    const [ pets, setPets ] = useState([]);
    const [ loaded, setLoaded ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/petshelter/all')
        .then(res => {
            console.log(res);
            setPets(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    }, [])

    const removeFromDom = id => {
        setPets(pets.filter(pet => pet._id != id));
    }

    const createPet = id => {
        axios.post('http://localhost:8000/api/petsheleter/add', id)
        .then(res => {
            setPets([...pets, res.data])
        })
        .catch(err => console.log("errors trying to add a new pet", err))
    }

    return (
        <div id="flexy">
            <PetForm onSubmitProp={ createPet } initialName="" initialType="" initialDescription="" initialSkillOne="" initialSkillTwo="" initialSkillThree="" />
            {loaded && 
                <PetList pets={pets} setPets={setPets} removeFromDom={removeFromDom}/>
            }
        </div>
    )
}