import React, { useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { navigate } from '@reach/router';

//=================== Emotion Styling ======================
const AuthorInput = styled.div`
    background-color: #7e52a0;
    color: #E6BCCD;
    width: 700px;
    margin-left: 120px;
    padding: 25px;
    border-radius: 5px;
    box-shadow: 2px 2px 25px #d295bf;
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
    const { initialName, initialType, initialDescription, initialSkillOne, initialSkillTwo, initialSkillThree, onSubmitProp } = props;
    console.log("LOGGING THE ON SUBMIT PROP", onSubmitProp)


    // console.log(typeof(onSubmitProp))
    // console.log("logging initial name", initialName)

    const [state, setState ] = useState({
        name: "",
        type: "",
        description: "",
    });

    const [name, setName] = useState(initialName);
    const [type, setType] = useState(initialType);
    const [description, setDescription] = useState(initialDescription);
    const [skillOne, setSkillOne] = useState(initialSkillOne);
    const [skillTwo, setSkillTwo] = useState(initialSkillTwo);
    const [skillThree, setSkillThree] = useState(initialSkillThree);

    const [errors, setErrors] = useState([]); 

    const updatingState = (event) => {
        console.log(errors)

        if(event.target.name === "name" && event.target.value.length <= 3) {
            setErrors({...errors, 
                name: "Name needs more than 3 characters"
            });
        }  else if(event.target.name === "name" && event.target.value.length > 3) {
            setErrors({...errors, 
                name: ""
            });
        } else if(event.target.name === "type" && event.target.value.length <= 3) {
            setErrors({...errors, 
                type: "please enter a valid type of pet"
            });
        } else if(event.target.name === "type" && event.target.value.length > 3) {
            setErrors({...errors, 
                type: ""
            });
        } else if(event.target.name === "description" && event.target.value.length <= 3) {
            setErrors({...errors, 
                description: "Please enter a valid description"
            });
        } else if(event.target.name === "description" && event.target.value.length > 3) {
            setErrors({...errors, 
                description: ""
            });
        }

        setState({
            ...state,
            [event.target.name]: event.target.value,
              //[] notation allows you to computed keys - other js variables as your key
            });
    }

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({ name, type, description, skillOne, skillTwo, skillThree });
        navigate("/petshelter/all");
    }

    

    return (
        <div>
            <Title>
                Pet Shelter - Adopt A Friend Today
            </Title>
            <AuthorInput> 
            {/* I'm just a parent div with fancy style from @emotion/styled */}
            <form onSubmit={ onSubmitHandler }>
                <div className="form-group">
                    <label>
                        Name
                    </label>
                    <input type="text" 
                    onInput={(event) => updatingState(event)} 
                    onChange={(e)=>setName(e.target.value)} name="name" value={name} />
                    {errors.name}
                </div>
                <div className="form-group">
                    <label>
                        Type
                    </label>
                    <input type="text" 
                    onInput={(event) => updatingState(event)} 
                    onChange={(e)=>setType(e.target.value)} name="type" value={type} />
                    {errors.type}
                </div>
                <div className="form-group">
                    <label>
                        Description
                    </label>
                    <input type="text" 
                    onInput={(event) => updatingState(event)} 
                    onChange={(e)=>setDescription(e.target.value)} name="description" value={description} />
                    {errors.description}
                </div>
                <div className="form-group">
                    <label>
                        Skills
                    </label>
                    <input type="text" onChange={(e)=>setSkillOne(e.target.value)} value={skillOne} />
                    <input type="text" onChange={(e)=>setSkillTwo(e.target.value)} value={skillTwo} />
                    <input type="text" onChange={(e)=>setSkillThree(e.target.value)} value={skillThree} />
                </div>
                <SubmitMe type="submit" className="btn btn-primary"> 
                {/* I'm just a button with fancy style from @emotion/styled */}
                    Submit
                </SubmitMe>
            </form>
        </AuthorInput>
    </div>
    )
}