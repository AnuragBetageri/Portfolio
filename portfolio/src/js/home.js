import "../css/home.css";

function showMenu() {
  var menuBtm = document.getElementsByClassName("navBtns")[0];

  menuBtm.style.display = "block";
}
function removeMenu() {
  var menuBtm = document.getElementsByClassName("navBtns")[0];

  menuBtm.style.display = "none";
}

function home() {
  return (
    <section className="homeSec">
      <nav className="navBar">
        <div className="logo">
          <span>&lt;</span>Anurag<span>&gt;</span>
        </div>
        <div onClick={showMenu} className="navOpen">
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="navBtns">
          <a className="navLinks" onClick={removeMenu} href="">
            Start<span>/&gt;</span>
          </a>
          <a className="navLinks" onClick={removeMenu} href="">
            Works<span>/&gt;</span>
          </a>
          <a className="navLinks" onClick={removeMenu} href="">
            About me<span>/&gt;</span>
          </a>
          <a className="navLinks" onClick={removeMenu} href="">
            Skills<span>/&gt;</span>
          </a>

          <a className="navLinks" onClick={removeMenu} href="">
            Contact me<span>/&gt;</span>
          </a>
        </div>
      </nav>

      <div className="homeBody">
        <header>
          <div className="hometitle">
            <h1>
              Hello <br></br>I'm Anurag C Betageri
            </h1>
            <h2>
              Coding is my creative outlet,<br></br> where I turn ideas into{" "}
              <span>functional</span> and <span>elegant</span> software.
            </h2>
          </div>
           <button className="scrollbtn">Scroll</button>
        </header>

        <div className="computerSvg">
          <lottie-player
            src="https://assets1.lottiefiles.com/packages/lf20_w51pcehl.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
       
      </div>
    </section>
  );
}

export default home;
