export default function Seeker() {
  function Form() {
    return (
      <section id="seeker-home">
        <form id="seeker-home-search">
          <span>Search for your next Job</span>
          <span>
            <input type="text" placeholder="What" />
            <input type="text" placeholder="Where" />
            <button type="submit">Search</button>
          </span>
        </form>
      </section>
    );
  }

  function Joblist() {
    return <></>;
  }

  function JobItem() {
    return <></>;
  }

  function JobView() {
    return <></>;
  }

  return (
    <>
      <Form />
      <Joblist />
      <JobItem />
      <JobView />
    </>
  );
}
