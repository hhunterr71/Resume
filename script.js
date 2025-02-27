// JavaScript code for smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// Line numbers for Code Block
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".code-block pre code").forEach((codeBlock) => {
      const lines = codeBlock.innerHTML.trim().split("\n"); // Split code into lines
      let formattedCode = "";
  
      lines.forEach((line, index) => {
        formattedCode += `<span class="line-number"></span>${line}\n`; // Add line numbers
      });
  
      codeBlock.innerHTML = formattedCode; // Replace content with numbered lines
    });
});
  