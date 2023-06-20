import { useEffect } from 'react';
import '../css/App.css';
import Contactme from './contactme';
import Home from './home';
import Work from './work';
import Aos from 'aos';
import 'aos/dist/aos.css'


window.addEventListener("scroll", thelineani);

function thelineani()
{
  var line = document.getElementsByClassName("the_line")[0];
  var line_hight = (window.scrollY - 30)
  line.style.height = line_hight + "px"
  
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

      
      <Contactme></Contactme>

    </div>
  );
}

export default App;
