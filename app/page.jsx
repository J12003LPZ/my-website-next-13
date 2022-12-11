import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
export default function HomePage() {
  return (
    <div className="Home">
      <Header />
      <About />
      <Portfolio />
    </div>
  );
}
