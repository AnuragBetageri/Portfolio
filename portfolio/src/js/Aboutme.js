import "../css/aboutme.css";
import CodeDisplay from "./code";

function Aboutme() {
  return (
    <section id="AboutSec">
      <h1 className="bg-h1" data-aos="fade-up" data-aos-duration="1100">
        <span>&lt;/</span>About Me
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
          About me<span>/&gt;</span>{" "}
        </h1>
      </div>
      <div></div>
      <div className="aboutmeDetailBody">
        <CodeDisplay></CodeDisplay>
        
        </div><div className="CV">
          <a href="#" className="DownloadCV">
            DownloadCV
          </a>
      </div>
    </section>
  );
}

export default Aboutme;
