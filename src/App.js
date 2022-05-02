import Header from "./header/header";
import Home from "./home/home";
import About from "./about/about";
import Members from "./members/members";
import Footer from "./footer/footer";
import "./styles.css";

function App() {
  return (
    <>
      <div className="bg-circle1"></div>
      <div className="bg-circle2"></div>
      <Header />
      <Home />
      <About />
      <Members />
      <Footer />
    </>
  );
}
export default App;
