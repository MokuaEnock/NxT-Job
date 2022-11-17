import "./seeker.css";
import AsideSeeker from "./asidebar";
import Seeker from "./home";

export default function SeekerView() {
  return (
    <section className="seeker-view">
      <AsideSeeker />
      <Seeker />
    </section>
  );
}
