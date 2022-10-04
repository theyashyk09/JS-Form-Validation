const button = document.getElementById("btn");

button.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const userName = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPass = document.getElementById("confirmpass").value;

  let errorOne = document.getElementById("errorone");
  let errorTwo = document.getElementById("errortwo");
  let errorThird = document.getElementById("errorthird");
  let errorFour = document.getElementById("errorfour");
  let errorFive = document.getElementById("errorfive");

  let trueOne = false;
  let trueTwo = false;
  let trueThird = false;
  let trueFour = false;
  let trueFive = false;

  let nameCheck =
    /^([a-zA-Z]+|[a-zA-Z]+\s{1}[a-zA-Z]{1,}|[a-zA-Z]+\s{1}[a-zA-Z]{3,}\s{1}[a-zA-Z]{1,})$/g;
  let userCheck = /^[a-z0-9_-]{3,16}$/g;
  let emailCheck = /^[A-Za-z0-9.]{3,25}@[A-Za-z]{3,25}[.]{1}[A-Za-z]{2,6}$/;
  let passwordCheck = /^(?=.*[0-9])(?=.*[!@#$%*&*])[a-zA-Z0-9!@#$%*&*]{8,25}$/;

  if (nameCheck.test(name)) {
    errorOne.style.display = "none";
    trueOne = true;
  } else {
    if (!name) {
      errorOne.textContent = "! Full Name cannot be blank";
    } else {
      errorOne.textContent = "! Enter Valid Name";
    }
    errorOne.style.display = "block";
    trueOne = false;
  }

  if (userCheck.test(userName)) {
    errorTwo.style.display = "none";
    trueTwo = true;
  } else {
    errorTwo.style.display = "block";
    trueTwo = false;

    if (userName.length > 4) {
      errorTwo.textContent =
        "! Username can have only lowercase alphabets, numbers and symbols [_ -]";
    } else {
      errorTwo.textContent = "! Choose a username 3-16 characters long";
    }
  }

  if (emailCheck.test(email)) {
    errorThird.style.display = "none";
    trueThird = true;
  } else {
    if (!email) {
      errorThird.textContent = "! Email cannot be blank";
    } else {
      errorThird.textContent = "! Enter valid email";
    }

    errorThird.style.display = "block";
    trueThird = false;
  }

  if (passwordCheck.test(password)) {
    errorFour.style.display = "none";
    trueFour = true;
  } else {
    errorFour.style.display = "block";
    trueFour = false;

    if (password.length < 8) {
      errorFour.textContent = "! Password must contain 8 digits";
    } else if (password.length > 25) {
      errorFour.textContent = "! Password cannot exceed 25 digits";
    } else if (email === password) {
      errorFour.textContent = "Email cannot be used as password";
      errorFour.style.display = "block";
      trueFour = false;
    } else {
      errorFour.textContent = "! Password must contain a number and symbol";
    }
  }

  if (password === confirmPass) {
    errorFive.style.display = "none";
    trueFive = true;
  } else {
    if (!confirmPass) {
      errorFive.textContent = "! Enter your password again to confirm";
    } else {
      errorFive.textContent = "! Password does not match";
    }
    errorFive.style.display = "block";
    trueFive = false;
  }

  if (trueOne && trueTwo && trueThird && trueFour && trueFive) {
    setTimeout(() => {
      let abc = document.querySelector(".main");
      abc.style.display = "none";

      document.getElementById("top").style.display = "block";
    }, 290);
  } else {
    return;
  }
});

let passArea = document.getElementById("password");
let showPass = document.getElementById("iconpone");

showPass.addEventListener("click", () => {
  let newType =
    passArea.getAttribute("type") === "password" ? "text" : "password";

  passArea.setAttribute("type", newType);

  showPass.classList.toggle("bi-eye");
});

let cpassArea = document.getElementById("confirmpass");
let showConfirmPass = document.getElementById("iconptwo");

showConfirmPass.addEventListener("click", () => {
  let newCType =
    cpassArea.getAttribute("type") === "password" ? "text" : "password";

  cpassArea.setAttribute("type", newCType);

  showConfirmPass.classList.toggle("bi-eye");
});
