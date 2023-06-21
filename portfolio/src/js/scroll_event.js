import "../css/scroll.css";

function scroll_event() {

  var con_width = 0;
  window.addEventListener("scroll", chaneee);

  function chaneee() {
    requestAnimationFrame(calcu);
  }

  function calcu() {
    var con = document.getElementsByClassName("container")[0];
    // con_width =
    //   (window.innerWidth -8 ) *
    //   ((window.scrollY + window.innerHeight) /
    //     document.documentElement.scrollHeight);

    if(Math.ceil(window.scrollY) <= Math.ceil(window.innerWidth/2))
    {
     
       con.classList.remove("sss")
    }
    if(Math.ceil(window.scrollY) > Math.ceil(window.innerWidth/2) && Math.ceil(window.scrollY) <= Math.ceil(window.innerWidth*2))
    {
        con.classList.add("sss")
    }
  }

  return (
    <div className="container">
      <div className="scroll_event_ele">hjk</div>
    </div>
  );
}

export default scroll_event;



