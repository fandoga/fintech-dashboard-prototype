import gsap from "gsap";

export const animateWithGsap = () => {
  gsap.from("#navbar", {
    delay: 0.15,
    duration: 0.5,
    ease: "power2.out",
    x: "-100%",
  });
  gsap.from(".nav-item", {
    delay: 0.2,
    duration: 0.4,
    stagger: 0.04,
    ease: "power2.out",
    x: "-100%",
    onComplete: () => {
      gsap.set(".nav-item", { clearProps: "transform" });
      document.querySelectorAll(".nav-item").forEach((el) => {
        el.classList.add("transition-transform", "duration-100");
      });
    },
  });
};
