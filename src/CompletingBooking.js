import "./completingbooking.css"
import { useNavigate } from "react-router-dom";
const CompletingBooking = ()=>{
    const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/");
  }
    return(
        <div className="completing">
        <div className="completing-main">
            <div className="completing-container">
                <div className="completing-title">
                    <h2>Congratulations!</h2>
                </div>
                <div className="completing-body">
                    <p>You have booked succesfully.</p>
                    <p></p>
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