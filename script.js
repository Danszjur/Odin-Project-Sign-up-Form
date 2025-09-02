const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const submitBtn = document.getElementById("submitBtn");

submitBtn.onclick = function () {
    const text1 = password.value;
    const text2 = confirmPassword.value;
    let allapot = false;
    if (text1.trim() === "" || text2.trim() === "") {
        allapot = false;
        console.log("False");

    }
    else if (text1 === text2) {
        allapot = true;
        console.log("True");
    }
    else {
        allapot = false;
        console.log("False");
    }
    if (allapot) {
        password.style.outline = "1px solid blue";
        confirmPassword.style.outline = "1px solid blue";
        document.getElementById("wrongPass1").style.display = "none";
        document.getElementById("wrongPass2").style.display = "none";
    }
    else if (!allapot) {
        password.style.outline = "1px solid red";
        confirmPassword.style.outline = "1px solid red";
        document.getElementById("wrongPass1").style.display = "block";
        document.getElementById("wrongPass2").style.display = "block";
    }

}

