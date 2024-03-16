let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".part-1",
    start: "50% 50%",
    end: "150% 50%",
    scrub: true,
    // markers: true,
    pin: true,

  }
});

tl.to(".top-contact", {
  rotateX: "110deg",
  opacity: "0",
  duration: 2,
}, "rc")
tl.to(".btm-contact", {
  rotateX: "-110deg",
  opacity: "0",
  duration: 2,
}, "rc")
tl.to("video", {
  width: "100%",
  height: "100%",
  duration: 5,
}, "rc")