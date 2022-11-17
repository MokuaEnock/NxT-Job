import "./home.css";

export default function Landing() {
  return (
    <main>
      <div className="main_cont1">
        <div>
          <div className="main_cont1_1_1">
            <a className="main_par" href="/index.html">
              Home
            </a>
          </div>
          <div className="main_cont1_1_2"></div>
        </div>
        <div>
          <div className="main_cont1_2_1"></div>
          <div className="main_cont1_2_2">
            <a className="main_par" href="#jobs_heading">
              Jobs
            </a>
          </div>
        </div>
      </div>

      <div className="main_cont1">
        <div>
          <div className="main_cont1_1_1">
            <a className="main_par" href="#freelance_heading">
              Freelance
            </a>
          </div>
          <div className="main_cont1_1_2"></div>
        </div>
        <div>
          <div className="main_cont1_2_1"></div>
          <div className="main_cont1_2_2">
            <a className="main_par" href="#courses_heading">
              Courses
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
