import React, {useEffect, useState} from "react";
import "../../css/clients.css";
import $ from "jquery";

const Count = () => {

    const [tim, setTim] = useState(0);

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }


useEffect(() => {
    $(window).scroll(function(){
        function elementScrolled(elem)
        {
          var docViewTop = $(window).scrollTop();
          var docViewBottom = docViewTop + $(window).height();
          try{
            var elemTop = $(elem).offset().top;
          }
          catch(err){
              return 0;
          }

          return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        function counter(id, start, end, duration) {
            let obj = document.getElementById(id),
             current = start,
             range = end - start,
             increment = end > start ? 1 : -1,
             step = Math.abs(Math.floor(duration / range)),
             timer = setInterval(() => {
              current += increment;
              obj.textContent = current;
              if (current == end) {
                obj.textContent = String(current) + "+";
               clearInterval(timer);
              }
             }, step);
           }

           function counterforRevenue(id, start, end, duration) {
               let obj = document.getElementById(id),
                current = start,
                range = end - start,
                increment = end > start ? 2000 : -2000,
                step = Math.abs(Math.floor(duration / range)),
                timer = setInterval(() => {
                 current += increment;
                 obj.textContent = "$" + current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                 if (current == end) {
                     obj.textContent = "$" + current.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "+";
                    clearInterval(timer);
                 }
                }, step);
              }
        var tim = 0;

        if(elementScrolled('#countersb')){
            counter("count1", 0, 20, 4000);
            counter("count2", 100, 350, 4000);
            counterforRevenue("count3", 0, 1000000, 4000);
            $('#countersb').attr("id", "counters")
        }
      });
})






    // const count = () => {
    //     if(document.getElementById("counters")!=null && isInViewport(document.getElementById("counters"))){
    //         counter("count1", 0, 300, 3000);
    //         counter("count2", 100, 500, 2500);
    //         counter("count3", 0, 450, 3000);
    //         setTim(1);
    //     }

    // }
    return (
        <div  id="countersb" class="counters animate01">
            <div class="column1">
                <div class="head1">
                    Happy Clients
                </div>
                <div class="flexcount">
                <p id="count1" class="d1">0</p>
                </div>
            </div>
            <div class="column1">
                <div class="head1">
                    Projects Completed
                </div>
                <p id="count2" class="d1">0</p>
            </div>
            <div class="column1">
                <div class="head1">
                    Revenue Generated
                </div>
                <p id="count3" class="d1">$0</p>
            </div>
        </div>
    )
}

export default Count;

// onLoad={tim===0 ? count : null} onMouseEnter={tim===0 ? count : null}
