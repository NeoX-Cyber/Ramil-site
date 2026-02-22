const neo = document.getElementById("neoText");

function showNeo() {
  const tl = gsap.timeline();

  tl.to(neo, {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  });

  tl.to(neo, {
    opacity: 1,
    duration: 1
  });

  tl.to(neo, {
    opacity: 0,
    duration: 1,
    ease: "power2.in"
  });
}

/* 10 saniyədən bir təkrar */
setInterval(showNeo, 10000);
