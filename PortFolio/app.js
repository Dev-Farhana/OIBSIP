gsap.from("header" , {
  duration: 1,
  y: -50 ,
  scrollTrigger: {
    trigger : "header",
    scroller : "body",
  }
})

gsap.from("#text", {
  x: -250,
  duration: 1,
  scrollTrigger : {
    trigger : "#text",
    scroller : "body"
  }
});


gsap.from(".imgClass", {
  scale: 0,
  duration: 1,
  rotate : 360,
  scrollTrigger : {
    trigger : ".imageClass",
    scroller : "body" ,
  }
});

gsap.from(".paras", {
  x: 50,
  scale: 0,
  duration: 3,
  stagger: 1,  
  scrollTrigger : ".paras",
})

gsap.from(".list-item", {
  scale : 0,
  x: -200,
  duration : 3,
  stagger : 1,
  scrollTrigger : ".list-item"
})   

gsap.to("form" , {
  x: 10,
  duration: 1,
  rotate: 360,
  scrollTrigger : "form",
})

gsap.from("#services .card" , {
  y: -100,
  scale : 0,
  stagger : 1,
  scrollTrigger : {
    scroller : "body",
    trigger : "#services .card"
  }
})

gsap.from("#portfolio .card" , {
  y: -140,
  scale :0 ,
  stagger : 1,
  scrollTrigger : {
    scroller : "body",
    trigger : " #portfolio .card"
  }
})