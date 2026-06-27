// Form validation helper
function validateForm(form) {
  let valid = true;
  form.querySelectorAll("[required]").forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = "#ff4444";
      valid = false;
    } else {
      input.style.borderColor = "#333";
    }
  });
  return valid;
}
