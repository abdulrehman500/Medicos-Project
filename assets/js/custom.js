let section1 = document.querySelector(".section_1");
let section2 = document.querySelector(".section_2");
let section3 = document.querySelector(".section_3");
let section4 = document.querySelector(".section_4");
let section5 = document.querySelector(".section_5");
let section6 = document.querySelector(".section_6");

document.querySelector(".section_1").addEventListener("click", () => {
  section1.classList.add("mactive");
  section2.classList.remove("mactive");
  section3.classList.remove("mactive");
  section4.classList.remove("mactive");
  section5.classList.remove("mactive");
  section6.classList.remove("mactive");
});
document.querySelector(".section_2").addEventListener("click", () => {
  section2.classList.add("mactive");
  section1.classList.remove("mactive");
  section3.classList.remove("mactive");
  section4.classList.remove("mactive");
  section5.classList.remove("mactive");
  section6.classList.remove("mactive");
});
document.querySelector(".section_3").addEventListener("click", () => {
  section3.classList.add("mactive");
  section2.classList.remove("mactive");
  section1.classList.remove("mactive");
  section4.classList.remove("mactive");
  section5.classList.remove("mactive");
  section6.classList.remove("mactive");
});
document.querySelector(".section_4").addEventListener("click", () => {
  section4.classList.add("mactive");
  section2.classList.remove("mactive");
  section3.classList.remove("mactive");
  section1.classList.remove("mactive");
  section5.classList.remove("mactive");
  section6.classList.remove("mactive");
});
document.querySelector(".section_5").addEventListener("click", () => {
  section5.classList.add("mactive");
  section2.classList.remove("mactive");
  section3.classList.remove("mactive");
  section4.classList.remove("mactive");
  section1.classList.remove("mactive");
  section6.classList.remove("mactive");
});
document.querySelector(".section_6").addEventListener("click", () => {
  section6.classList.add("mactive");
  section2.classList.remove("mactive");
  section3.classList.remove("mactive");
  section4.classList.remove("mactive");
  section5.classList.remove("mactive");
  section1.classList.remove("mactive");
});

///For section 2

let img_1 = document.querySelector(".img_1");
let img_2 = document.querySelector(".img_2");
let img_3 = document.querySelector(".img_3");
let img_4 = document.querySelector(".img_4");
let img_5 = document.querySelector(".img_5");
let img_6 = document.querySelector(".img_6");

document.querySelector(".section2_1").addEventListener("click", () => {
  img_1.classList.add("section2_img_show");
  img_2.classList.remove("section2_img_show");
  img_3.classList.remove("section2_img_show");
  img_4.classList.remove("section2_img_show");
  img_5.classList.remove("section2_img_show");
  img_6.classList.remove("section2_img_show");
});
document.querySelector(".section2_2").addEventListener("click", () => {
  img_2.classList.add("section2_img_show");
  img_1.classList.remove("section2_img_show");
  img_3.classList.remove("section2_img_show");
  img_4.classList.remove("section2_img_show");
  img_5.classList.remove("section2_img_show");
  img_6.classList.remove("section2_img_show");
});
document.querySelector(".section2_3").addEventListener("click", () => {
  img_3.classList.add("section2_img_show");
  img_2.classList.remove("section2_img_show");
  img_1.classList.remove("section2_img_show");
  img_4.classList.remove("section2_img_show");
  img_5.classList.remove("section2_img_show");
  img_6.classList.remove("section2_img_show");
});
document.querySelector(".section2_4").addEventListener("click", () => {
  img_4.classList.add("section2_img_show");
  img_2.classList.remove("section2_img_show");
  img_3.classList.remove("section2_img_show");
  img_1.classList.remove("section2_img_show");
  img_5.classList.remove("section2_img_show");
  img_6.classList.remove("section2_img_show");
});
document.querySelector(".section2_5").addEventListener("click", () => {
  img_5.classList.add("section2_img_show");
  img_2.classList.remove("section2_img_show");
  img_3.classList.remove("section2_img_show");
  img_4.classList.remove("section2_img_show");
  img_1.classList.remove("section2_img_show");
  img_6.classList.remove("section2_img_show");
});
document.querySelector(".section2_6").addEventListener("click", () => {
  img_6.classList.add("section2_img_show");
  img_2.classList.remove("section2_img_show");
  img_3.classList.remove("section2_img_show");
  img_4.classList.remove("section2_img_show");
  img_5.classList.remove("section2_img_show");
  img_1.classList.remove("section2_img_show");
});
