document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("transactionForm");
  const list = document.getElementById("transactionsList");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form[0].value;
    const amount = form[1].value;
    const type = form[2].value;

    if (name && amount && type) {
      const item = document.createElement("div");
      item.innerHTML = `<strong>${name}</strong> paid <strong>${amount}</strong> as <em>${type}</em>`;
      list.appendChild(item);
      form.reset();
    }
  });
});
