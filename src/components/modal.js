const firebaseConfig = {
  apiKey: "AIzaSyDOpASOQYXAa2xwUn159Phibk6pzvbl_-o",
  authDomain: "profile-site-b5301.firebaseapp.com",
  databaseURL: "https://profile-site-b5301.firebaseio.com",
  projectId: "profile-site-b5301",
  storageBucket: "profile-site-b5301.appspot.com",
  messagingSenderId: "21091853238",
  appId: "1:21091853238:web:eb2d0b2c8df4ee26fed717",
  measurementId: "G-M5ZVMYMHEV"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const messagesRef = firebase.database().ref('messages');

const modal = document.getElementById("myModal");
const modalBtn = document.getElementById("myBtn");
const closeBtns = document.querySelectorAll(".close");

modalBtn.addEventListener('click', () => {
  modal.style.display = "flex";
})

closeBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.style.display = "none";
  })
})


window.addEventListener('click', () => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
})


window.addEventListener('DOMContentLoaded', () => {
  const envelopeBtn = document.getElementById("envelope__btn");
  envelopeBtn.addEventListener('click', () => {
    const form = document.querySelector(".form");
    form.style.marginTop = "6px";

    const top = document.querySelector(".top");
    top.style.transform = "rotatex(0deg)";
    top.style.zIndex = "3";

    const envelope = document.querySelector(".envelope");
    envelope.style.transform = "rotatey(180deg) translateX(-240px) translateY(-170px)";

    const exit = document.querySelector(".close");
    exit.style.transform = "translateX(-12px) translateY(2px)";
    exit.style.color = "#2c343f";

    const ipt = document.getElementById('first').value;
    const firstName = document.getElementById('name');
    firstName.innerHTML = ipt

    const frontEnvelope = document.querySelector(".envelope__bottom--front")
    frontEnvelope.style.boxShadow = "0 0 30px black";

    setTimeout(() => {
      modal.style.display = "none";
    }, 5000);

  })

  document.getElementById("envelope__form").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    const name = getInputVal("first");
    const email = getInputVal("email");
    const message = getInputVal("message");

    saveMessage(name, email, message);
  }

  getInputVal = (id) => {
    return document.getElementById(id).value;
  }

  saveMessage = (name, email, message) => {
    const newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message: message
    })
  }
});

