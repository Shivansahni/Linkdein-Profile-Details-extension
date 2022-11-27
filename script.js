let linkedInArray = [
  "https://www.linkedin.com/in/akash-kumar-6337b01a5/",
  "https://www.linkedin.com/in/harshit-saxena-1863021b3/",
  "https://www.linkedin.com/in/yash-rajput-515408214/",
];
document.getElementById("profileshow").addEventListener("click", showProfile);

function showProfile() {
  linkedInArray.filter((elm) => {
    let link = elm.concat("overlay/contact-info/");
    window.open(link);
  });
}
