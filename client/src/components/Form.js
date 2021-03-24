import React, { useState } from 'react';

const Form = (props) => {
    const { inputs, setInputs } = props;

    const [state, setState] = useState( {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    }
    );

    const [errors, setErrors] = useState([]); 

    const updatingState = (event) => {
        console.log(errors)

        if(event.target.name === "firstName" && event.target.value.length <= 2) {
            setErrors({...errors, 
                firstName: "First name needs more than 2 characters"
            });
        } else if(event.target.name === "firstName" && event.target.value.length > 2) {
            setErrors({...errors, 
                firstName: ""
            });
        } else if(event.target.name === "lastName" && event.target.value.length <= 2) {
            setErrors({...errors, 
                lastName: "Last name needs more than 2 characters"
            });
        } else if(event.target.name === "lastName" && event.target.value.length > 2) {
            setErrors({...errors, 
                lastName: ""
            });
        } else if(event.target.name === "email" && event.target.value.length <= 5) {
            setErrors({...errors, 
                email: "Please enter a valid email"
            });
        } else if(event.target.name === "email" && event.target.value.length > 5) {
            setErrors({...errors, 
                email: ""
        });
        } else if(event.target.name === "password" && event.target.value.length < 8) {
            setErrors({...errors, 
                password: "please enter a password that is 8 characters long"
            });
        } else if(event.target.name === "password" && event.target.value.length >= 8) {
            setErrors({...errors, 
                password: ""});
        }

        setState({
        ...state,
        [event.target.name]: event.target.value,
          //[] notation allows you to computed keys - other js variables as your key
        });
    }

    const submitState = (event) => {
        event.preventDefault();
        setInputs({
        ...state,
        });
    }
    
    return (
      <section class="d-flex justify-content-center align-items-lg-center register-photo">
        <div class="form-container" style={{ width: 426 }}>
          <form onSubmit={submitState}>
            <h2 class="text-center">
              <strong>Login</strong>
            </h2>
            <div class="form-group">
              <input
                type="text" name="firstName"
                onChange={(event) => updatingState(event)}
                placeholder="First Name"
              />
              {errors.firstName}
            </div>
            <div class="form-group">
              <input
                type="text" name="lastName"
                onChange={(event) => updatingState(event)}
                placeholder="Last Name"
              />
              {errors.lastName}
            </div>
            <div class="form-group">
              <input
                type="email" name="email"
                onChange={(event) => updatingState(event)}
                placeholder="Email"
              />
              {errors.email}
            </div>
            <div class="form-group">
              <input
                type="password" name="password" 
                onChange={(event) => updatingState(event)}
                placeholder="Password"
              />
              {errors.password}
            </div>
            <div class="form-group">
              <button
                class="btn btn-primary btn-block"
                value="Form"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
    </section>
    );
};

export default Form;
