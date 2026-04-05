window.addEventListener("load", (event) => {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        console.log(link.innerText);
        link.href = link.href + link.innerText;
    });
});

window.addEventListener("load", () => {
    const phoneLink = document.querySelector('.book-phone');

    const encodedNum = "MTgzMTI5NTkxOTE="; 
    const number = atob(encodedNum);

    const formatted = `(${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7)}`;

    phoneLink.innerHTML += formatted;
    phoneLink.href = `tel:${number}`;
});

const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
  links.classList.toggle("active");
});