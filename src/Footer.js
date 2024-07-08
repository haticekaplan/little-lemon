import "./footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="one">
                <div className="footer-image"></div>
            </div>
            <div className="two">
                <ul>
                <h5>Navigation</h5>
                    <li><a className="a" href="/">Home</a></li>
                    <li><a className="a" href="/">About</a>
                    </li><li><a className="a" href="/">Menu</a></li>
                    <li><a className="a" href="/">Reservations</a></li>
                    <li><a className="a" href="/">Order Online</a></li>
                    <li><a className="a" href="/Login">Login</a></li>
                </ul>
            </div>
            <div className="three">
                <ul><h5>Contact</h5>
                    <li><a id="nav" href="#">Phone Number</a></li>
                    <li><a id="nav" href="#">Email</a></li>
                    <li><a id="nav" href="#">Address</a></li></ul>
            </div>
            <div className="four">
                <ul><h5>Social Media</h5>
                    <li><a id="nav" href="#">Instagram</a></li>
                    <li><a id="nav" href="#">LinkedIn</a>
                    </li>
                    <li><a id="nav" href="#">Pinterest</a></li>
                </ul>
            </div>
        </footer>)
}
export default Footer