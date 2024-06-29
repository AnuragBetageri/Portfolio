import "../css/aboutme.css";
import CodeDisplay from "./code";
import DisplayCode from "./displayCode";



function Aboutme() {

  return (
    <section id="AboutSec">
      <h1 className="bg-h1" data-aos="fade-up" data-aos-duration="1100">
        <span>&lt;/</span>About Me
      </h1>
      <a
        href="#SkillsSec"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1100"
      >
        <button className="scrollbtn">Scroll</button>
      </a>
      <div className="SectionName">
        <h1>
          About me<span>/&gt;</span>{" "}
        </h1>
      </div>
      <div></div>
      <div className="aboutmeDetailBody">
        <CodeDisplay></CodeDisplay>
      </div>

      <div className="CV_sec">
      <div className="DownloadCV">
        <a
          href="https://drive.google.com/file/d/1FrVqqDPMkGG_nhbtyAuoJxLdgEfo6fvq/view?usp=sharing"
          
        >
          Download CV
        </a>
      </div>
      <DisplayCode></DisplayCode>
      
      </div>

 
    </section>
  );
}

export default Aboutme;
