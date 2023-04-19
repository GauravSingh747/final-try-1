import main from "../assets/images/hero-img.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            Job <span>Assign</span> Application
          </h1>
          <p>
            We Build Brands From making your brand visible to giving it a visual
            identity. We set the ball rolling. We partner with you to develop
            strategies that will help meet your goals, one step at a time. .
            Find out more
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
