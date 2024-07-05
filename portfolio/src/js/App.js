import { useEffect } from 'react';
import '../css/App.css';
import Contactme from './contactme';
import Home from './home';
import Work from './work';
import Aboutme from './Aboutme';
import Aos from 'aos';
import Skills from './skills';
import 'aos/dist/aos.css'

window.addEventListener("load", isMobileDevice);

var lineMul = 1;
function isMobileDevice() {
  
  document.body.style.zoom = "1";
  return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
}

// Show alert message only on phones
if (isMobileDevice()) {
  lineMul = 1.1;
  alert("This page is under development for mobile so it is best viewed in PC");
}
else
{
  lineMul = 1;
}


window.addEventListener("scroll", thelineani);

function thelineani()
{
  var line = document.getElementsByClassName("the_line")[0];
  var aboutmeSec = document.getElementById("AboutSec")
  var line_hight = ((window.scrollY - 30)*lineMul)
  line.style.height = line_hight + "px"
  
  // if(line.getBoundingClientRect().bottom > aboutmeSec.getBoundingClientRect().top )
  // {
  //   line.style.backgroundColor = "#6c757d"
  // }
  // else
  // {
  //   line.style.backgroundColor = "#c77dff"
  // }
}


function App() {
  useEffect(() =>
    {
        Aos.init()
    },[]
  )
  return (
    <div id="App">
      {/* <Scroll_event></Scroll_event> */}
      <Home></Home>
      <Work></Work>
    <Aboutme></Aboutme>
      <Skills></Skills>
      <Contactme></Contactme>

    </div>
  );
}

export default App;
