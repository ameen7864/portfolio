import "./footer.css";
import { BsMouse } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { TiSocialGithub, TiSocialLinkedin } from "react-icons/ti";
import { HiCloudDownload } from "react-icons/hi";
function Footer() {
  return (
    <div id="footer" className="container footer-container">
      <h1>
        Thank You
        <a href="#home">
          <h2>
            <BsMouse />
            Home
          </h2>
        </a>
      </h1>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/deepak-thakur-54b033130/">
          <TiSocialLinkedin className="social" />
        </a>

        <a href="https://github.com/dthakur886210">
          <TiSocialGithub className="social" />
        </a>
        <a href="dthakur886210@gmail.com">
          <SiGmail className="social" />
        </a>
        <a href="https://online.flippingbook.com/view/735408829/">
          <HiCloudDownload className="social" />
        </a>
      </div>
    </div>
  );
}
export default Footer;
