(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
})();
(function () {
  emailjs.init("aBaADCoPcJNz86If8");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a four-digit random number for the contact number
    var contactNumber = Math.floor(Math.random() * 900000) + 100000;
    // get user input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;
    // send email
    emailjs
      .send("service_b918q4s", "template_d1vclpy", {
        from_name: name,
        from_email: email,
        to_name: "YOUR_NAME",
        contact_number: contactNumber,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          alert("Your message has been sent. Thank you!");
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.log("FAILED...", error);
          alert("Your message failed to send. Please try again later.");
        }
      );
  });
