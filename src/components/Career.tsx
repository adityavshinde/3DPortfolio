import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern</h4>
                <h5>RedHat · OnSite</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Working on the OpenShift Pipelines team as a UI developer, contributing to key initiatives and programs of RedHat.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Tech in CSE</h4>
                <h5>IIIT Bangalore</h5>
              </div>
              <h3>2024–26</h3>
            </div>
            <p>
              CGPA: 3.11/4.00. Focus on Software Systems, Machine Learning, Data Structures, and Database Management. Awarded Mr. Fresher, IIITB (2024).
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>SISTMR Australia · Remote</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <p>
              Developed Bash scripts to automate threat detection, and analyzed system-level vulnerabilities using Wireshark, contributing to a 20% reduction in attack surface.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.E. in CSE</h4>
                <h5>Konkan Gyanpeeth College of Engg.</h5>
              </div>
              <h3>2019–23</h3>
            </div>
            <p>
              CGPA: 3.58/4.00. Competed in the 64th National Shooting Championship (2021) in the 10m Air Rifle event.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
