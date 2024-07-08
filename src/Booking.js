import "./booking.css"
import TimePicker from 'react-time-range-picker';
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useEffect ,useState} from "react";



const Booking = () => {
   const shouldDisableTime=(value, view) =>
        view === 'hours' && value.hour() > 21 && value.hour() < 9;
    const [submitting, setSubmitting] = useState(false);
    const bookingTable = ["For two person", "For four person", "For six person", "For eight person"]
    const navigate = useNavigate();
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        dateBooking: new Date(),
        timeRange: "",
        table: "",
        radioGroup: "",
        phone: "",
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string()
            .min(10, 'You entered an incomplete number!')
            .max(13, 'Wrong!')
            .required('Required'),
        dateBooking: Yup.date().default(() => new Date()),
        timeRange: Yup.date().required("Time is required."),
        table: Yup.string().required("Required").oneOf(bookingTable),
        radioGroup: Yup.object({ radioGroup: Yup.string().required("Required") }),
    });
    const onSubmit = (values) => {
        try {
            setSubmitting(true);
            // Perform form submission logic here
            console.log(values);
           
            // Set submitting to false after successful submission
            setSubmitting(false);
          } catch (error) {
            // Handle form submission error
            console.error(error);
            setSubmitting(false);
          }
        
    };
    useEffect(()=>{
        if(submitting){
            navigate("/CompletingBooking");
        }
    },[]);

const tableOptions = bookingTable.map((table, key) => (
    <option value={table} key={key}>
        {table}
    </option>
));
const renderError = (message) => <p className="help is-danger">{message}</p>;
return (
    <div className="booking">
        <div className="booking-main">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, status, touched }) => (
                    <Form className="booking-container">
                        <div className="booking-div">
                            <span className="booking-span">Select Date
                                <ErrorMessage name="dateBooking" render={renderError} />
                                <input type="date" name="dateBooking" className={"booking-date" + (errors.dateBooking && touched.dateBooking ? ' is-invalid' : '')}
                                />
                            </span>
                        </div>
                        <div className="booking-div">
                            <span className="booking-span">Select Time
                                <ErrorMessage name="timeRange" render={renderError} />
                                <TimePicker  name="timeRange" size="sm" className={"" + (errors.timeRange && touched.timeRange ? ' is-invalid' : '')}
                                     shouldDisableTime={shouldDisableTime}
                                />
                            </span>
                        </div>
                        <div className="booking-check">
                            <span className={"booking-span" + (errors.meal && touched.meal ? ' is-invalid' : '')}>Select Meal
                                <ErrorMessage name="meal" render={renderError} /></span>
                            <div className="booking-input" id="radioGroup" name="meal">
                                <label><input type="radio" value="breakfast" name="radioGroup"
                                    id="radioOption1" />Breakfast
                                </label><br></br>
                                <label><input type="radio" value="lunch" name="radioGroup"
                                    id="radioOption2" />Lunch
                                </label><br></br>
                                <label><input type="radio" value="dinner" name="radioGroup"
                                    id="radioOption3" />Dinner</label>
                            </div>
                        </div>
                        <div className="booking-table">
                            Select Table
                            <label name="table" className={'booking-table-label' + (errors.table && touched.table ? ' is-invalid' : '')} >
                                <ErrorMessage name="table" render={renderError} />
                            </label>
                            <select name="table" id="table">
                                <option value={""}>Select a table</option>
                                {tableOptions}
                            </select>
                        </div>
                        <div className="booking-review">
                            <label className="review-label">Review</label>
                            <textarea id="booking-review" name="review" rows="5" cols="40">
                            </textarea>
                        </div>
                        <div className="booking-info">
                            <label className="booking-info-label">FirstName:
                                <Field name="firstName" type="text" className={'booking-info-input' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" render={renderError} />
                            </label>
                            <label className="booking-info-label">LastName:
                                <Field name="lastName" className={"booking-info-input" + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" render={renderError} />
                            </label>
                            <label className="booking-info-label">Email:
                                <Field name="email" type="email" className={"booking-info-input" + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" render={renderError} />
                            </label>
                            <label className="booking-info-label">Phone Number:
                                <Field name="phone" className={"booking-info-input" + (errors.phone && touched.phone ? ' is-invalid' : '')} />
                                <ErrorMessage name="phone" render={renderError} />
                            </label>
                        </div>
                        <div className="booking-submit">
                            <button type="submit" className="booking-cancelbtn">Cancel</button>
                            <button type="submit" className="booking-submitbtn">Submit</button>
                        </div>
                    </Form>)}
                </Formik>
        </div>
    </div >)
}
export default Booking