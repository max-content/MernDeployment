import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';
import PetForm from './PetForm';
import DeleteButton from './DeleteButton';

export default props => {
    const { id } = props;
    const [pet, setPet] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/petshelter/' + id)
        .then(res => {
            setPet(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
    }, [])

    const updatePet = pet => {
        console.log("we are trying to update a pet");
        axios.put('http://localhost:8000/api/petshelter/' + id, pet)
        .then(res => console.log(res), navigate("/petshelter/all"))
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>
                Update an Pet Information
            </h1>
            {loaded && (
                <>
                    <PetForm onSubmitProp={updatePet} initialName={pet.name} initialType={pet.type} initialDescription={pet.description} initialSkillOne={pet.skillOne} initialSkillTwo={pet.skillTwo} initialSkillThree={pet.skillThree} />
                    <DeleteButton id={pet._id} successCallback = {() => navigate("/petshelter/all") } />
                </>
            )}
        </div>
    )
}