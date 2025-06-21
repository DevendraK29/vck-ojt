import Header from "../components/Header/Header";
import Footer  from "../components/Footer/Footer";
import "../styles/HomePage.css"

const HomePage = () => {
    return(
        <><Header /><><div className="main-wrapper">

            <div className="main-box">
                <h1> Welcome to Vivekanand College</h1>
                <p> Your journey to excellence starts from here</p>
                <div className="main">
                    <p>Vivekanand College is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in 1980, we have proudly served generations of students, empowering them to achieve their full potential. <br /> <br /> At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped. </p>
                    <h2>Why choose Vivekanand College?</h2> <hr />
                    <ul type="circle">
                        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library,  and comfortable campus.</li>
                        <li><b>Holistic Development:</b> Focus on co-curicular activities, sports, and community service.</li>
                        <li><b>Strong Placements:</b> Excellent Career oppurtunities with leading companies.</li>
                    </ul>
                    <h2> Campus Life & Facilities</h2> <hr />
                    <div className="campus_images">
                        <img src="../Images/students-studying-DbLGuwF_.jpg" height="200" />
                        <img src="../Images/campus-life-Crkero7B.jpg" height="100" />
                    </div>
                </div>
            </div>
        </div><Footer /></></>
            
    )
}

export default HomePage;