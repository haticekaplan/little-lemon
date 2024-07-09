import "./booking.css";
import React, { useReducer } from 'react';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";

const Booking = () => {
    const [submitting, setSubmitting] = useState(false);
    const bookingTable = ["For two person", "For four person", "For six person", "For eight person"];
    const navigate = useNavigate();
    const initialState = {
        dateBooking: new Date().toISOString().split('T')[0], // Initial value for date as today
        timeRange: '',
    };

    // Reducer function to handle state changes
    const reducer = (state, action) => {
        switch (action.type) {
            case 'UPDATE_DATE':
                return { ...state, dateBooking: action.payload };
            case 'UPDATE_TIME':
                return { ...state, timeRange: action.payload };
            default:
                return state;
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    const initialFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        table: "",
        radioGroup: "",
        phone: "",
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        lastName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
        email: Yup.string().email("Invalid email").required("Required"),
        phone: Yup.string().min(10, "You entered an incomplete number!").max(13, "Wrong!").required("Required"),
        table: Yup.string().required("Please select a table").oneOf(bookingTable, "Invalid table selection"),
        radioGroup: Yup.string().required("Please select a meal option"),
    });

    const onSubmit = async (values, { setSubmitting }) => {
        try {
            setSubmitting(true);
            // Perform form submission logic here
            const formData = {
                ...values,
                dateBooking: state.dateBooking,
                timeRange: state.timeRange,
            };
            console.log(values);
            navigate("/CompletingBooking", { state: formData  });
        } catch (error) {
            // Handle form submission error
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    useEffect(() => {
        if (submitting) {
            navigate("/CompletingBooking");
        }
    }, [submitting, navigate]);

    const tableOptions = bookingTable.map((table, key) => (
        <option value={table} key={key}>
            {table}
        </option>
    ));

    const renderError = (message) => <p className="help is-danger">{message}</p>;

    return (
        <div className="booking">
            <div className="booking-main">
                <Formik initialValues={initialFormValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {({ errors, touched, isSubmitting }) => (
                        <Form className="booking-container">
                            <div className="booking-div">
                                <span className="booking-span">
                                    Select Date
                                    <ErrorMessage name="dateBooking" render={renderError} />
                                    <Field type="date" name="dateBooking" onChange={(e) => dispatch({ type: 'UPDATE_DATE', payload: e.target.value })} />
                                </span>
                            </div>
                            <div className="booking-div">
                                <span className="booking-span">
                                Select Time
                                    <ErrorMessage name="timeRange" render={renderError} />
                                    <Field as="select" name="timeRange" onChange={(e) => dispatch({ type: 'UPDATE_TIME', payload: e.target.value })}>
                                        <option value="">Select a time</option>
                                        {state.dateBooking === new Date().toISOString().split('T')[0] ? (
                                            <>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="12:00">12:00 PM</option>
                                                <option value="15:00">03:00 PM</option>
                                            </>
                                        ) : (
                                            <>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="13:00">01:00 PM</option>
                                                <option value="16:00">04:00 PM</option>
                                            </>
                                        )}
                                    </Field>
                                </span>
                            </div>
                            <div className="booking-check">
                                <span className={"booking-span" + (errors.radioGroup && touched.radioGroup ? " is-invalid" : "")}>
                                    Select Meal
                                    <ErrorMessage name="radioGroup" render={renderError} />
                                </span>
                                <div className="booking-input" id="radioGroup">
                                    <label>
                                        <Field type="radio" value="breakfast" name="radioGroup" id="radioOption1" />
                                        Breakfast
                                    </label>
                                    <br></br>
                                    <label>
                                        <Field type="radio" value="lunch" name="radioGroup" id="radioOption2" />
                                        Lunch
                                    </label>
                                    <br></br>
                                    <label>
                                        <Field type="radio" value="dinner" name="radioGroup" id="radioOption3" />
                                        Dinner
                                    </label>
                                </div>
                            </div>
                            <div className="booking-table">
                                Select Table
                                <ErrorMessage name="table" render={renderError} />
                                <Field
                                    as="select"
                                    name="table"
                                    id="table"
                                    className={"booking-table-select" + (errors.table && touched.table ? " is-invalid" : "")}
                                >
                                    <option value="">Select a table</option>
                                    {tableOptions}
                                </Field>
                            </div>
                            <div className="booking-review">
                                <label className="review-label">Review</label>
                                <Field as="textarea" id="booking-review" name="review" rows="5" cols="40"></Field>
                            </div>
                            <div className="booking-info">
                                <label className="booking-info-label">
                                    FirstName:
                                    <Field
                                        name="firstName"
                                        type="text"
                                        className={"booking-info-input" + (errors.firstName && touched.firstName ? " is-invalid" : "")}
                                    />
                                    <ErrorMessage name="firstName" render={renderError} />
                                </label>
                                <label className="booking-info-label">
                                    LastName:
                                    <Field
                                        name="lastName"
                                        className={"booking-info-input" + (errors.lastName && touched.lastName ? " is-invalid" : "")}
                                    />
                                    <ErrorMessage name="lastName" render={renderError} />
                                </label>
                                <label className="booking-info-label">
                                    Email:
                                    <Field
                                        name="email"
                                        type="email"
                                        className={"booking-info-input" + (errors.email && touched.email ? " is-invalid" : "")}
                                    />
                                    <ErrorMessage name="email" render={renderError} />
                                </label>
                                <label className="booking-info-label">
                                    Phone Number:
                                    <Field
                                        name="phone"
                                        className={"booking-info-input" + (errors.phone && touched.phone ? " is-invalid" : "")}
                                    />
                                    <ErrorMessage name="phone" render={renderError} />
                                </label>
                            </div>
                            <div className="booking-submit">
                                <button type="button" className="booking-cancelbtn" onClick={() => navigate("/")}>
                                    Cancel
                                </button>
                                <button type="submit" className="booking-submitbtn" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Booking;
