export default function Seeker() {
  function Form() {
    return (
      <form id="seeker-search">
        <div>Search for your next job.</div>
        <div>
          <label className="search-input">
            <span>What</span>
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

  function SeekerJobItem() {
    return <li className="seeker-job-item"></li>;
  }

  return (
    <section id="seeker-home-all">
      <Form />
      <section id="seeker-results">
        <ul id="seeker-job-results">
          <SeekerJobItem />
          <SeekerJobItem />
          <SeekerJobItem />
          <SeekerJobItem />
        </ul>
        <div id="seeker-job-view"></div>
      </section>
    </section>
  );
}
