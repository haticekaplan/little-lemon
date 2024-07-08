import "./main.css"
import { useNavigate} from "react-router-dom";

const Main = () => {
    const navigate = useNavigate()

  const gotToNewPage=()=>{
    navigate("/Booking");
  }
    return (
        <>
            <section className="main-section">
                <div className="main-section-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button type="submit" onClick={() => gotToNewPage()}>Reserve a table</button>
                </div>
                <div className="main-section-img">
                </div>
            </section>
            <section className="main-special">
                <div className="main-special-content">
                    <h3>Specials</h3>
                    <button type="submit" id="online-order-button">Online Menu</button>
                </div>
            </section>
            <div className="main-cards">
                <article className="main-card">
                    <div className="greeksalad">
                    </div>
                    <div className="main-card-body">
                        <div className="main-card-title">
                            <h3>Greek Salad</h3>
                        </div>
                        <p className="main-card-text">A traditional Greek salad ; sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese. This classic combination is delicious.</p>
                        <button type="submit">Order Delivery</button>
                    </div>
                </article>
                <article className="main-card">
                <div className="bruccetha">
                    </div>
                    <div className="main-card-body">
                        <div className="main-card-title">
                            <h3>Bruschetta</h3>
                        </div>
                        <div>
                            <p className="main-card-text">Bruschetta is a classic Italian appetizer . Toasted bread is topped with tomatoes, Parmesan cheese, garlic, and fresh basil and high-quality balsamic vinegar.</p>
                            <button type="submit">Order Delivery</button>
                        </div>
                    </div>
                </article>
                <article className="main-card">
                <div className="lemoncake">
                    </div>
                    <div className="main-card-body">
                        <div className="main-card-title">
                            <h3>Lemon Cake</h3>
                        </div>
                        <p className="main-card-text">This flavorful and moist Lemon Cake recipe with homemade lemon curd and a light and fluffy lemon buttercream is truly a delicious.</p>
                        <button type="submit">Order Delivery</button>
                    </div>
                </article>
            </div>
            <section className="testimonials">
                <div className="testimonial-header">
                    <h1>Testimonials</h1>
                </div>
                <div className="review-container">
                    <div className="review">
                        <div id="rating"></div>
                        <div id="profile1"></div>
                        <h2>Selena G.</h2><p>"Really enjoyed the atmosphere."</p>
                    </div>
                    <div className="review">
                        <div id="rating"></div>
                        <div id="profile2"></div>
                        <h2>Brandon M.</h2>
                        <p>"The greek salad was excellent!"</p>
                    </div>
                    <div className="review">
                       <div id="rating1"></div>
                        <div id="profile3"></div>
                        <h2>Peter R.</h2>
                        <p>"You have to try the Greek Salad!"</p>
                    </div>
                    <div className="review">
                        <div id="rating1"></div>
                        <div id="profile4"></div>
                        <h2>Neha J.</h2>
                        <p>"Awesome place peaceful atmosphere with delicious food"</p>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="about-content">
                    <h4>Little Lemon</h4>
                    <h5>Chicago</h5>
                    <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials..</p>
                </div>
                <div className="owners">
                    <div id="chefs">
                    </div>
                    <div id="restaurant">
                    </div>
                </div>
            </section>
        </>)
}
export default Main