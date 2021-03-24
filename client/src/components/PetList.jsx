import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

//=================== Emotion Styling ======================
const ListStyle = styled.div`
    background-color: #7e52a0;
    color: #E6BCCD;
    width: 400px;
    margin-left: 120px;
    padding: 25px;
    box-shadow: 2px 2px 25px #d295bf;
    border-radius: 5px;
`
const SubmitMe = styled.button`
    background-color: #D295BF;
    color: #f5f9e9;
    border: 1px solid #f5f9e9;
    margin-left: 10px;
    margin-right: 20px;
    text-decoration: none;
    &:hover {
        background-color: #29274c;
        color: #d295bf;
        border: 1px solid #1C2541;
    }
`
const Title = styled.h1`
    color: #7E52A0;
    margin-top: 100px;
    margin-left: 160px;
    margin-bottom: 25px;
`;

export default props => {
    const removeFromDom = id => {
        props.setPets(props.pets.filter(pet => pet._id != id))
    }

    return (
        <div>
            <Title>
                Adoptable Pets
            </Title>
            <ListStyle> 
            {/* I'm another fancy emotion div =} */}

            {props.pets.map((pet, index)=> {
                    return (
                    <p key={index}>
                        <Link to={"/petshelter/" + pet._id}>
                            {pet.name}
                        </Link>, {pet.type} {pet.description}
                        <SubmitMe>
                            <Link to={"/petshelter/edit/" + pet._id }>
                                Edit
                            </Link>
                        </SubmitMe>
                        <DeleteButton id={pet._id} successCallback={() => removeFromDom(pet._id)}/>
                    </p>
                    )
                    })}
            </ListStyle>
        </div>
    )
}