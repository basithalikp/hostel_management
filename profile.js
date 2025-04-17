// profile.js

document.addEventListener("DOMContentLoaded", function () {
    // Check for stored user data
    const userData = JSON.parse(localStorage.getItem("userProfile"));

    if (userData) {
        const nameEl = document.getElementById("user-name");
        const fullNameEl = document.getElementById("user-fullname");
        const ageEl = document.getElementById("user-age");
        const genderEl = document.getElementById("user-gender");
        const emailEl = document.getElementById("user-email");

        if (nameEl) nameEl.innerText = userData.username;
        if (fullNameEl) fullNameEl.innerText = userData.fullName;
        if (ageEl) ageEl.innerText = userData.age;
        if (genderEl) genderEl.innerText = userData.gender;
        if (emailEl) emailEl.innerText = userData.email;
    }
});
