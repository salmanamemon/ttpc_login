import React from 'react';
import { Link } from "react-router-dom";

// Formik
import { Formik, Form, Field } from 'formik';
//yup
import * as Yup from 'yup'
// Loader
import { ThreeDots } from 'react-loader-spinner';

// Auth & Redux
import { connect } from 'react-redux';
import { loginUser } from './../auth/actions/userActions';
import { useNavigate  } from 'react-router-dom';


const Register = ({signupUser}) => {
  const navigate = useNavigate();
  return (
  
    <div className='text-center'>
      <div className="wrapper">
          <h2>Member Registration</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
              repeatpassword: "",
              dateOfBirth: "",
              name: "",
            }}
            validationSchema={
              Yup.object({
                email: Yup.string()
                  .email("Invalid email address")
                  .required("Required"),
                password: Yup.string()
                  .min(8, "Password is too short")
                  .max(30, "Password is too long")
                  .required("Required"),
                name: Yup.string().required
                  ("Required"),
                dateOfBirth: Yup.date().required
                  ("Required"),
                repeatpassword: Yup.string()
                  .required("Required")
                  .oneOf([Yup.ref("password")],
                  "Passwords must match")
              })
            }
            onSubmit={(values, {setSubmitting}) => {
              console.log(values);
            }}
          >
              
              {({ errors, touched, isSubmitting }) => (
                <Form>
                    <div>
                      <label htmlFor='name'>Name: </label>
                      <Field
                        name="name"
                        type="text"
                        label="Full Name"
                        placeholder="John Joe"
                      />
                      {touched.name && errors.name && <div className='error'>{errors.name}</div>}
                    </div>
                    <div>
                      <label htmlFor='email'>Email: </label>
                      <Field
                        name="email"
                        type="text"
                        label="Email Address"
                        placeholder="joe@example.com"
                      />
                      {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                    </div>
                    <div>
                      <label htmlFor='Date of Birth'>Email: </label>
                      <Field
                        name="dateOfBirth"
                        type="date"
                        label="Date of Birth"
                        placeholder="DD/MM/YY"
                      />
                      {touched.email && errors.email && <div className='error'>{errors.email}</div>}
                    </div>
                    <div>
                      <label htmlFor='password'>Password</label>
                      <Field
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="********"
                      />
                      {touched.password && errors.password && <div className='error'>{errors.password}</div>}
                    </div>
                    <div>
                      <label htmlFor='repeatpassword'>Password</label>
                      <Field
                        name="repeatpassword"
                        type="repeatpassword"
                        label="Repeat password"
                        placeholder="********"
                      />
                      {touched.repeatpassword && errors.repeatpassword && <div className='error'>{errors.repeatpassword}</div>}
                    </div>
                    
                        {!isSubmitting && (
                          <button 
                            className="btn" 
                            type="submit"
                          >
                            <span>Login</span>
                          </button>
                        )}
                        {isSubmitting && (
                          <div className='text-center' style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                            <ThreeDots
                              color="#00BFFF" 
                              height={40} 
                              width={40} />
                          </div>
                        )}
                    
                </Form>
              )}
          </Formik>
          <div className='signUp'>Already a member? <Link to="/login">Sign In</Link></div>
      </div>
      <div className='copyRight'>
        &copy; All rights reserverd
      </div>
    </div>
  
  );
}

export default Register;