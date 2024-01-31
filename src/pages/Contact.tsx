import Navbar from "../components/Navbar"
import "../styles/Contact.css"
import linkedin from "../assets/linkedin.png"

const Contact = () => {
    return (
        <div className="contacts-container">
            <Navbar />
            <a href="https://www.linkedin.com/in/austinhale36/" className="linkedin">
                <img src={linkedin} alt="linkedin" className="linkedin-logo"/>
            </a>
        </div>
    )
}

export default Contact