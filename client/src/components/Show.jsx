import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import styled from '@emotion/styled';

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
`;

export default props => {
    const [pet, setPet] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelter/" + props.id)
        .then(res => setPet(res.data))
    }, [])

    return(
        <div className="container">
            <h1 style={{color: "#E6BCCD"}}>
                {pet.name}
            </h1>
            <h3 style={{color: "#E6BCCD"}}>
                {pet.type}
            </h3>
            <p style={{color: "#E6BCCD"}}>
                {pet.description}
            </p>
            <ul style={{color: "#f5f9e9"}}>
                <li>
                    {pet.skillOne}
                </li>
                <li>
                    {pet.skillTwo}
                </li>
                <li>
                    {pet.skillThree}
                </li>
            </ul>
            <Link to={'/petshelter/edit/' + pet._id}>
                <SubmitMe>
                    Edit
                </SubmitMe>
            </Link>
            
        </div>
    )
}