document.getElementById("medicalForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmation").textContent = "Request submitted successfully!";
});
