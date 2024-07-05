import "../css/work.css";
import AroundAi from "../images/aroundAi.png";
import Knowreva from "../images/KnowReva.png";
import GitHub_find from "../images/Github_find.png";

import Tailwind from "../images/Tailwind.png";

function Work() {
  return (
    <section id="workSec">
      <h1 className="bg-h1" data-aos="fade-up" data-aos-duration="1100">
        <span>&lt;/</span>Works
      </h1>
      <a
        href="#AboutSec"
        data-aos="fade-up"
        data-aos-offset="-100"
        data-aos-duration="1100"
      >
        <button className="scrollbtn">Scroll</button>
      </a>
      <div className="SectionName">
        <h1>
          My Recent Works<span>/&gt;</span>{" "}
        </h1>
      </div>
      <div id="proG">
        {/* //promodel */}
        <div className="ProjectBody">
          <div className="ProjectDetails">
            <div
              className="ProjectImg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1100"
            >
              <img src={Knowreva}></img>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-duration="1100"
              className="ProjectName"
            >
              <h1>Knowreva</h1>
              <h2>All about REVA University</h2>
            </div>
          </div>
          <div
            className="ProjectDescBody"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="1100"
          >
            <div className="ProjectDesc">
              <div className="stack">
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="0"
                  className="stackIcons fa-brands fa-html5"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="150"
                  className="stackIcons fa-brands fa-css3-alt"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="300"
                  className="stackIcons fa-brands fa-js"
                ></i>
                {/* <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="450"
                  className="stackIcons fa-brands fa-react"
                ></i> */}
              </div>
              <div className="ProjectSummery">
                <p>
                  Developed Knowreva, a comprehensive virtual platform that
                  offers an immersive experience of Reva University, providing
                  information about various aspects such as buildings, canteens,
                  clubs, nearby places, and fests
                </p>
              </div>
            </div>
            <div className="visit">
              <a href="https://knowreva.netlify.app/" className="visitLink">
                Visit site
              </a>
            </div>
          </div>
        </div>

        {/* //promodel */}

        <div className="ProjectBody">
          <div className="ProjectDetails">
            <div
              className="ProjectImg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1100"
            >
              <img src={AroundAi}></img>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-duration="1100"
              className="ProjectName"
            >
              <h1>
                AROUND AI : <span>VERSION 1.0</span>
              </h1>
              <h2>Ai Based Text to Image generator</h2>
            </div>
          </div>
          <div
            className="ProjectDescBody"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="1100"
          >
            <div className="ProjectDesc">
              <div className="stack">
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="0"
                  className="stackIcons fa-brands fa-html5"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="150"
                  className="stackIcons fa-brands fa-css3-alt"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="300"
                  className="stackIcons fa-brands fa-js"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="450"
                  className="stackIcons fa-brands fa-react"
                ></i>
              </div>
              <div className="ProjectSummery">
                <p>
                  This project is an AI-based image generation tool built using
                  ReactJS, CSS, and the OpenAI API. The tool allows users to
                  generate high-quality images using advanced artificial
                  intelligence algorithms.
                </p>
              </div>
            </div>
            <div className="visit">
              <a href="https://aroundai.netlify.app/" className="visitLink">
                Visit site
              </a>
            </div>
          </div>
        </div>

        {/* //promodel */}
        <div className="ProjectBody">
          <div className="ProjectDetails">
            <div
              className="ProjectImg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1100"
            >
              <img src={AroundAi}></img>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-duration="1100"
              className="ProjectName"
            >
              <h1>
                AROUND AI : <span>VERSION 2.0</span>
              </h1>
              <h2>AI Tool Hub 2.0</h2>
            </div>
          </div>
          <div
            className="ProjectDescBody"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="1100"
          >
            <div className="ProjectDesc">
              <div className="stack">
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="0"
                  className="stackIcons fa-brands fa-html5"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="300"
                  className="stackIcons fa-brands fa-js"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="450"
                  className="stackIcons fa-brands fa-react"
                ></i>
                <img
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="600"
                  height="30"
                  width="30"
                  src={Tailwind}
                ></img>
              </div>
              <div className="ProjectSummery">
                <p>
                  AI Tool Hub 2.0 is Text-to-X creation (Image, Music, Video,
                  Code) & advanced ChatBot tool hub built using React Js ,
                  Tailwind CSS ,OpenAI API and Replicate AI .
                </p>
              </div>
            </div>
            <div className="visit">
              <a href="https://aroundai.netlify.app/" className="visitLink">
                Visit site
              </a>
            </div>
          </div>
        </div>

         {/* //promodel */}
         <div className="ProjectBody">
          <div className="ProjectDetails">
            <div
              className="ProjectImg"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-duration="1100"
            >
              <img src={GitHub_find}></img>
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="-50"
              data-aos-duration="1100"
              className="ProjectName"
            >
              <h1>
              FYLE-INTERNSHIP-CHALLENGE
              </h1>
              <h2>GITHUB PROFILE FINDER</h2>
            </div>
          </div>
          <div
            className="ProjectDescBody"
            data-aos="fade-right"
            data-aos-offset="100"
            data-aos-duration="1100"
          >
            <div className="ProjectDesc">
              <div className="stack">
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="0"
                  className="stackIcons fa-brands fa-html5"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="300"
                  className="stackIcons fa-brands fa-js"
                ></i>
                <i
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="450"
                  className="stackIcons fa-brands fa-angular"
                ></i>
                <img
                  data-aos="fade-right"
                  data-aos-offset="100"
                  data-aos-duration="1100"
                  data-aos-delay="600"
                  height="30"
                  width="30"
                  src={Tailwind}
                ></img>
              </div>
              <div className="ProjectSummery">
                <p>
                Fyle hosted an internship challenge to create a GitHub profile finder using Angular,
                Tailwind CSS, and GitHub APIs. 
                </p>
              </div>
            </div>
            <div className="visit">
              <a href="https://fyle-internship-challenge-23-delta.vercel.app/" className="visitLink">
                Visit site
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
