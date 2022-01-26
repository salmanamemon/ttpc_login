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

const Login = ({loginUser}) => {
  const navigate = useNavigate();
  return(
    <div className='text-center'>
      <div className="wrapper">
          <h2>Member Login</h2>
          <Formik
            initialValues={{
              email: "",
              password: "",
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
              })
            }
            onSubmit={(values, {setSubmitting, setFieldError}) => {
              console.log(values);
              loginUser(values, navigate, setFieldError, setSubmitting);
            }}
          >
              
              {({ errors, touched, isSubmitting }) => (
                <Form>
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
                      <label htmlFor='password'>Password</label>
                      <Field
                        name="password"
                        type="password"
                        label="Password"
                        placeholder="********"
                      />
                      {touched.password && errors.password && <div className='error'>{errors.password}</div>}
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
          <div className='signUp'>New here <Link to="/register">Signup</Link></div>
      </div>
      <div className='copyRight'>&copy; All rights reserverd</div>
    </div>
  );
}

export default connect(null, {loginUser})(Login);