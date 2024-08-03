function page1Animation() {
  const tl = gsap.timeline();

  tl.from("nav h1, nav h4, nav button", {
    y: -30,
    duration: 0.5,
    delay: 0.5,
    opacity: 0,
    stagger: 0.1,
  });

  tl.from("#center-part1 h1", {
    x: -500,
    opacity: 0,
    duration: 0.5,
  });

  tl.from("#center-part1 p", {
    x: -200,
    opacity: 0,
    duration: 0.4,
  });

  tl.from("#center-part1 button", {
    opacity: 0,
    duration: 0.4,
  });

  tl.from(
    "#center-part2 img",
    {
      opacity: 0,
      duration: 0.5,
    },
    "-=0.3"
  );

  tl.from("#section1-bottom img", {
    opacity: 0,
    y: 30,
    stagger: 0.15,
    duration: 1,
  });
}

function page2Animation() {
  const tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#section2",
      scroll: "body",
      // markers:true,
      start: "top 50%",
      end: "top 0",
      scrub: 2,
    },
  });

  tl2.from("#services h1", {
    x: -30,
    opacity: 0,
    duration: 0.5,
    delay: 1,
  });
  tl2.from("#services p", {
    y: -30,
    opacity: 0,
    duration: 0.5,
  });

  tl2.from(
    ".box1",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "line1"
  );
  tl2.from(
    ".box2",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "line1"
  );

  tl2.from(
    ".box3",
    {
      x: -300,
      opacity: 0,
      duration: 0.5,
    },
    "line2"
  );
  tl2.from(
    ".box4",
    {
      x: 300,
      opacity: 0,
      duration: 0.5,
    },
    "line2"
  );
}

page1Animation();
page2Animation();
