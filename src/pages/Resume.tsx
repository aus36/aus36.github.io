import "../styles/Resume.css"
import Navbar from "../components/Navbar"
import resume from "../assets/AustinHale_Resume.pdf"

const Resume = () => {
    return (
        <div className="resume-container">
            <Navbar />
            <object
                data = {resume}
                type="application/pdf"
                width="100%"
                height="100%"
                aria-labelledby="PDF document"
                >
                <p>
                    Your browser does not support PDFs.
                    <a href={resume}>Download the PDF</a>
                </p>
            </object>
        </div>
    )
}

export default Resume