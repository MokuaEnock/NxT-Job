import "./home.css";

export default function Landing() {
  return (
    <main>
      <div class="main_cont1">
        <div>
          <div class="main_cont1_1_1">
            <a class="main_par" href="/index.html">
              Home
            </a>
          </div>
          <div class="main_cont1_1_2"></div>
        </div>
        <div>
          <div class="main_cont1_2_1"></div>
          <div class="main_cont1_2_2">
            <a class="main_par" href="#jobs_heading">
              Jobs
            </a>
          </div>
        </div>
      </div>

      <div class="main_cont1">
        <div>
          <div class="main_cont1_1_1">
            <a class="main_par" href="#freelance_heading">
              Freelance
            </a>
          </div>
          <div class="main_cont1_1_2"></div>
        </div>
        <div>
          <div class="main_cont1_2_1"></div>
          <div class="main_cont1_2_2">
            <a class="main_par" href="#courses_heading">
              Courses
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
