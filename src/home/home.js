import "./home.css";
import img from "../props/thakur.jpeg";
import Buttons from "../button/button";

function Home() {
  return (
    <div id="home" className="container home-container">
      <div className="logo">
        <div className="hover-show">
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
          <span className="circle"></span>
        </div>

        <img src={img} alt="" />
      </div>

      <h2>
        <span>About Me.</span> <br />
        <p>
          Determined to learn with a practical approach, eager to learn new tech
          and can produce results under deadline constraints.
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

// const toggle = document.querySelector(".hover-show");

// toggle.addEventListener("click", () => {
//   toggle.classList.toggle("active");
// });

export default Home;
