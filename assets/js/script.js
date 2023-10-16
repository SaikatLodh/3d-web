// JavaScript Document

var crsr= document.querySelector(".courser")
var blur= document.querySelector(".courser-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x - 200 + "px"
    blur.style.top = dets.y - 200 + "px"})


 

gsap.to(".nav",{
    backgroundColor :"#000",
    duration:0.5,
    height:"140",
    scrollTrigger:{
        trigger:".nav",
        scroller:"body",
        markers:false,
        start:"top -10%",
        end:"top -11%",
        scrub:1,

        
    }
    
    })

    gsap.to(".main",{
        backgroundColor: "#000",
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            markers:false,
            star:"00%",
            end:"25%",
            scrub:1,
           


        }



    })

    gsap.to(".about img, .about-text",{
        y:-20,
        opacity:1,
        duration:1,
        stagger:0.4,
        delay:2,
        scrollTrigger:{
            trigger:".about",
            scroller:"body",
            start:"top 70%",
            end:"top 100%",
            scrub:5,
          


        }




    })


    gsap.to(".cards",{
        scale:0.9,
        opacity:1,
        duration:1,
        stagger:0.4,
        delay:2,
		
        scrollTrigger:{
            trigger:".cards",
            scroller:"body",
            start:"top 75%",
            end:"top 80%",
            scrub:5,
           


        }




    })


    gsap.to(".main3 h2",{
        y:-25,
       duration:3,
       delay:1,
        
        scrollTrigger:{
            trigger:".main3",
            scroller:"body",
            start:"top 95%",
            end:"top 100%",
            scrub:5,
           
          


        }




    })


        var show = document.querySelector(".menu")
        var content = document.querySelector(".show-and-hide")
         var cheack = 0
    
        show.addEventListener("click",function(){
            if( cheack == 0){
                
                gsap.to(".show-and-hide",{
                    top:"0%",
                    scale:1,
                    display:"block"
                })
                cheack = 1
            }else{
                
                gsap.to(".show-and-hide",{
                    top:"100%",
                    scale:0.5,
                    display:"none"
                })
                cheack = 0
            }
        }) 






   