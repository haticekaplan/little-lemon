import "./completingbooking.css"
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const CompletingBooking = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { firstName, lastName, email, phone, dateBooking, timeRange, radioGroup, table } = location.state;
    const gotToNewPage = () => {
        navigate("/");
    }
    return (
        <div className="completing">
            <div className="completing-main">
                <div className="completing-container">
                    <div className="completing-title">
                        <h2>Congratulations!</h2>
                    </div>
                    <div className="completing-body">
                        <p>You have booked succesfully.</p>
                        <div>
                            <h2>Booking Information</h2>
                            <p><strong>First Name:</strong> {firstName}</p>
                            <p><strong>Last Name:</strong> {lastName}</p>
                            <p><strong>Email:</strong> {email}</p>
                            <p><strong>Phone:</strong> {phone}</p>
                            <p><strong>Date:</strong> {dateBooking}</p>
                            <p><strong>Time:</strong> {timeRange}</p>
                            <p><strong>Meal:</strong> {radioGroup}</p>
                            <p><strong>Table:</strong> {table}</p>
                        </div>
                    </div>
                    <div>
                        <button type="submit" onClick={() => gotToNewPage()}>OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompletingBooking