const amountInput = document.querySelector("#amount");
const amountButtons = document.querySelectorAll("[data-amount]");

function setAmount(value) {
  const cleanValue = String(value).replace(/[^\d]/g, "");
  if (amountInput) {
    amountInput.value = cleanValue || "100";
  }
}

amountButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setAmount(button.dataset.amount);
    const donateSection = document.querySelector("#donate");
    if (donateSection) {
      donateSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (amountInput) {
  amountInput.addEventListener("input", () => setAmount(amountInput.value));
  setAmount(amountInput.value);
}
