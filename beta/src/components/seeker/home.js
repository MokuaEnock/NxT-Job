export default function Seeker() {
  function Form() {
    return <form id="seeker-search"></form>;
  }

  function SeekerJobItem() {
    return <li className="seeker-job-item"></li>;
  }

  return (
    <section id="seeker-home-all">
      <Form />
      <section id="seeker-results">
        <ul id="seeker-job-results"></ul>
        <div id="seeker-job-view"></div>
      </section>
    </section>
  );
}
