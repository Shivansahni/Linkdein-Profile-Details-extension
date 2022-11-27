let name = document.getElementsByTagName("h1")[0].innerText;
//console.log("Name = " + name);

let ProfileLink = document.querySelectorAll("section.ci-vanity-url >div >a")[0]
  .innerText;
//console.log("ProfileLink = " + ProfileLink);

let PhoneNo, Address, DOB, Gmail;

try {
  PhoneNo = document.querySelectorAll(
    "section.ci-phone >ul.list-style-none > li >span"
  )[0].innerText;
  //console.log("PhoneNo = " + PhoneNo);
} catch (error) {}
try {
  Address = document.querySelectorAll("section.ci-address > div >a")[0]
    .innerText;
  //console.log("Address = " + Address);
} catch (error) {}
try {
  Gmail = document.querySelectorAll("section.ci-email > div > a")[0].innerText;
  //console.log("Gmail = " + Gmail);
} catch (error) {}
try {
  DOB = document.querySelectorAll("section.ci-birthday > div >span")[0]
    .innerText;
  //console.log("DOB = " + DOB);
} catch (error) {}
