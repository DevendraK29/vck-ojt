import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const CoursesPage = () => {
    return(
        <div>
            <Header />
            <h1>Our Academic Programs</h1>
            <p>Vivekanand College offers a comprehensive range of undergraduate and postgraduate programs designed to equip students with the knowledge and skills demanded by today's dynamic global landscape. Our curriculum is regularly updated to reflect industry trends and academic advancements.</p>
            <h2> Discover Campus Life</h2>
            <hr />
            <video src="../Videos/college-tour-FAmcnyfF.mp4" height="150" controls  />
            <h2> Undergraduate Programs (UG)</h2><hr />
            <ul type="square">
                <li> <b>Bachelor of Science (B.Sc.) </b></li>
                    <ul>
                        <li> Computer Science (3 Years)</li>
                        <li>Information Technology (3 Years)</li>
                        <li>Biotechnology (3 Years)</li>
                    </ul>
                    <br />
                <li> <b>Bachelor of Commerce (B.Com) </b></li>
                    <ul>
                        <li>Accounting & Finance (3 Years)</li>
                        <li>Banking & Insurance (3 Years)</li>
                    </ul>
                    <br />
                <li> <b>Bachelor of Arts (B.A.)</b> </li>
                    <ul>
                        <li>English Literature (3 Years)</li>
                        <li>Psychology (3 Years)</li>
                    </ul>
            </ul>
            <h2> Postgraduate Programs (PG)</h2> <hr />
            <ul type="square">
                <li> <b>Master of Science (M.Sc.) </b></li>
                <ul>
                    <li> Computer Science (2 Years)</li>
                    <li> Information Technology (2 Years)</li>
                </ul>
                <li> <b>Master of Commerce (M.Com.) </b>(2 Years)</li>
                <li> <b>Master of Arts (M.A.) </b>(2 Years)</li>
            </ul>
            <h2> Program Details & Fee Structure (Annual) (PG)</h2> <hr />
           <table border="2">
             <thead>
               <tr>
                 <th>Program Type</th>
                 <th>Course Name</th>
                 <th>Duration</th>
                 <th>Annual Fee (INR)</th>
                 <th>Eligibility</th>
                </tr>
             </thead>
                <tbody>
                    <tr>
                        <td>UG</td>
                         <td>B.Sc. Computer Science</td>
                         <td>3 Years</td>
                         <td>₹ 85,000</td>
                         <td>10+2 with PCM (50%)</td>
                    </tr>
                    <tr>
                        <td>UG</td>
                        <td>B.Com. Accounting & Finance</td>
                        <td>3 Years</td>
                        <td>₹ 70,000</td>
                        <td>10+2 Commerce (45%)</td>
                    </tr>
                    <tr>
                        <td>PG</td>
                        <td>M.Sc. Information Technology</td>
                        <td>2 Years</td>
                        <td>₹ 95,000</td>
                        <td>B.Sc. IT/CS (50%)</td>
                    </tr>
                </tbody>
            </table>
            <h2> Specialized & Voca(PG)</h2> <hr />
            <p>In addition to traditional degree programs, we offer various certificate and diploma courses in areas like Digital Marketing, Web Development, Data Analytics, and Soft Skills Development, providing specialized training for career enhancement.</p>
            <p>Have questions about a specific course?</p>
            <button>Inquire About Courses</button>
            <Footer />
        </div>
    )
}

export default CoursesPage;