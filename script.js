var i = 0;
var txt1 =
  "Uss Din Jo Main Rok Nahi Paaya, < Toh Tera Jaana Zaroori Tha Kya? < Jitne Waade Kiye The Tune, < Unse Mukar Jaana Zaroori Tha Kya? < Yun Toh Main Kisi Se Baat Nahi Karta Tha, < Tera Bhi Chup Reh Jaana Zaroori Tha Kya? < Tu Toh Meri Har Baat Bin Kahe Samajh Jaati Thi, < Uss Din Nasamajh Bann Jaana Zaroori Tha Kya? < Mujhe Tu Aaj Bhi Waise Hi Chahiye, < Tera Yun Nilaam Ho Jaana Zaroori Tha Kya? < Kaha Tha Tune, Teri Aakhiri Mohabbat Hoon Main, < Toh Tera Kisi Aur Ko Chahna Zaroori Tha Kya? < Ab Bhagwan Hii Jaane Tu Kiski Hai, < Parr Jiski Hai Uska Ho Jaana Zaroori Tha Kya? < Ab Kisi Se Dil Nhi Lagaata, < Mera Yun Toot Jaana Zaroori Tha Kya?"
var speed = 80;
typeWriter();
function typeWriter() {
  if (i < txt1.length) {
    if (txt1.charAt(i) == "<")
      document.getElementById("text1").innerHTML += "</br>";
    else if (txt1.charAt(i) == ">")
      document.getElementById("text1").innerHTML = "";
    else if (txt1.charAt(i) == "|") {
      $(".bg_heart").css("background-image", "')");
    } else document.getElementById("text1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.className.includes(toggleClassName)) {
    e.className = e.className.replace(" " + toggleClassName, "");
  } else {
    e.className += " " + toggleClassName;
  }
}
