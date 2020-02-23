let currentStep = 1;
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function initialDisplay() {
  document.getElementById("step-1").className = "show";
  prevBtn.className = "hide";
}

function nextClick() {
  let isValid = currentStep <= 2 ? validateForm(`step-${currentStep}`) : true;

  if (isValid) {
    if (currentStep < 3) {
      document.getElementById(`step-${currentStep + 1}`).className = "show";
      document.getElementById(`step-${currentStep}`).className = "hide";
      prevBtn.className = "show";
    }
    if (currentStep === 2) {
      nextBtn.textContent = "Submit";
    }
    if (currentStep === 3) {
      submitForm();
    }
    currentStep += 1;
  }
}

function prevClick() {
  if (currentStep >= 2) {
    document.getElementById(`step-${currentStep - 1}`).className = "show";
    document.getElementById(`step-${currentStep}`).className = "hide";
    nextBtn.textContent = "Next";
    prevBtn.className = "show";
  }
  if (currentStep === 2) {
    prevBtn.className = "hide";
    nextBtn.textContent = "Next";
  }
  currentStep -= 1;
}

function validateForm(id) {
  const input = document.querySelector(`#${id} > input`);

  if (input.value === "") {
    input.classList.add("invalid");
    return false;
  }
  return true;
}

function submitForm() {
  nextBtn.removeAttribute("onclick");
  nextBtn.setAttribute("type", "submit");
  nextBtn.setAttribute("onsubmit", window.location.reload());
}
