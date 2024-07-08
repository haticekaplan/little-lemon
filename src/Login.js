
import "./login.css"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { UserContext } from './UserInfo';
import React, { useContext, useState } from 'react';
const Login = () => {
    const navigate = useNavigate()
    const { setEmail } = useContext(UserContext);
    
    return (
        <div className="login-main">
            <div className="container-login">
                <div className="card-login">
                    <Formik
                        initialValues={{
                            inputEmail: "",
                            password: ""
                        }}
                        validationSchema={Yup.object().shape({
                            inputEmail: Yup.string().email('Invalid email').required('Required'),
                            password: Yup.string()
                                .min(6, 'Password must be at least 6 characters')
                                .required('Password is required'),

                        })}
                        onSubmit={(values) => {
                            const localPart = values.inputEmail.split('@')[0];  // @ öncesi kısmı al
                            setEmail(localPart);
                            alert(JSON.stringify(values, null, 2));
                            console.log(localPart);
                            navigate("/");
                        }}
                    >
                        {({ errors ,touched, handleChange }) => (
                            <Form>
                                <div className="title-login">
                                    <span><a href="#">Google</a></span>
                                </div>
                                <div className="title-login2">
                                    <p>OR</p>
                                </div>
                                <div className="form-login">
                                    <label className="form-label">Email</label>
                                    <Field name="inputEmail" type="text" 
                                     className={"form-email" + (errors.inputEmail && touched.inputEmail ? ' is-invalid' : '')} />
                                    <ErrorMessage name="inputEmail" component="div" className="invalid-feedback" />
                                    <label className="form-label">Password</label>
                                    <Field name="password" type="password" className={'password-login' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    <button type="submit" id="loginbtn">Login</button>
                                    <label>
                                        <input type="checkbox" checked="checked" name="remember" />Remember me
                                    </label>
                                    <div className="container-login">
                                        <button type="submit" className="cancelbtn-login" onClick={() => navigate("/")}>Cancel</button>
                                        <span className="psw-login">Forgot <a href="#">password?</a></span>
                                    </div>
                                </div>
                            </Form>)}
                    </Formik>
                </div>
            </div >
            <div className="page-login" >
                <div className="login-img"></div>
            </div >
        </div >
    )
}
export default Login