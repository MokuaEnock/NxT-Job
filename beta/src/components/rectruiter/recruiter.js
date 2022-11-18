import "./recruiter.css";
export default function Recruiter() {
  function Form() {
    return (
      <form id="recruiter-search">
        <div>Search for your next job.</div>
        <div>
          <label className="search-input">
            <span>Who</span>
            <input type="text" />
          </label>

          <label className="search-input">
            <span>Where</span>
            <input type="text" />
          </label>

          <button type="Submit" id="search-submit">
            Search
          </button>
        </div>
      </form>
    );
  }
  return (
    <section id="recruiter">
      <div id="recruiter-home">
        <Form />
        <div id="recruiter-results">
          <ul id="seeker-list"></ul>
          <div id="seeker-view"></div>
        </div>
      </div>
    </section>
  );
}
