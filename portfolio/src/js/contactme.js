import "../css/contact.css";

function Contactme() {
  return (
    <section id="contactSec">
      <h1 className="bg-h1" data-aos="fade-up" data-aos-duration="1100">
        <span>&lt;/</span>Contact me
      </h1>
      <a
        href="#"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1100"
      >
        <button className="scrollbtn">Top</button>
      </a>
      <div className="SectionName">
        <h1>
          Contact me<span>/&gt;</span>{" "}
        </h1>
      </div>

      <div className="contactBody">
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Connect with me on
        </h2>
        <div className="contactElements">
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <i class="fa-brands fa-github"></i>
            <div className="contactName"> Github</div>
          </a>
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            <i class="fa-brands fa-linkedin"></i>
            <div className="contactName">Linkedin</div>
          </a>
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <i class="fa-solid fa-envelope"></i>
            <div className="contactName">Gmail</div>
          </a>
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="150"
          >
            <i class="fa-brands fa-twitter"></i>
            <div className="contactName">Twitter</div>
          </a>
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <i class="fa-brands fa-instagram"></i>
            <div className="contactName">Instagram</div>
          </a>
          <a
            href=""
            className="contact"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <i class="fa-brands fa-whatsapp"></i>
            <div className="contactName">Whatsapp</div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contactme;
