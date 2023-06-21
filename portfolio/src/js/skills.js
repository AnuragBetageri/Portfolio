import React from "react";
import "../css/skills.css";
import c from "../images/c.png";
import cplus from "../images/c++.png";
import html from "../images/html.png";
import css from "../images/css.png";
import java from "../images/java.png";
import js from "../images/js.png";
import py from "../images/py.png";
import react from "../images/react.png";
import sql from "../images/sql.png";
import mongo from "../images/mongo.png";
export default function skills() {
  return (
    <section id="SkillsSec">
      <h1 className="bg-h1" data-aos="fade-up" data-aos-duration="1100">
        <span>&lt;/</span>Skills
      </h1>
      <a
        href=""
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1100"
      >
        <button className="scrollbtn">Scroll</button>
      </a>
      <div className="SectionName">
        <h1>
          Skills<span>/&gt;</span>{" "}
        </h1>
      </div>
      <div className="skillBody">
        {/* <div className="nonTechSkills">

        </div> */}
        <h2 className="skillIntro">
          These are my skills which <br></br>let me turn ideas into functional
          and elegant software
        </h2>
        <div className="techSkills">
          <div className="skillImgBody">
            <img className="skillImage" src={c}></img>
            <div className="skillName">C</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={cplus}></img>
            <div className="skillName">C++</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={java}></img>
            <div className="skillName">JAVA</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={py}></img>
            <div className="skillName">PYTHON</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={sql}></img>
            <div className="skillName">SQL</div>
          </div>

          <div className="skillImgBody">
            <img className="skillImage" src={react}></img>
            <div className="skillName">REACT</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={html}></img>
            <div className="skillName">HTML</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={css}></img>
            <div className="skillName">CSS</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={js}></img>
            <div className="skillName">JAVA SCRIPT</div>
          </div>
          <div className="skillImgBody">
            <img className="skillImage" src={mongo}></img>
            <div className="skillName">MONGO DB</div>
          </div>
        </div>
      </div>
    </section>
  );
}
