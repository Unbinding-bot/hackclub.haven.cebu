export function createToast() {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.id = "toast";
  toast.setAttribute("role", "status");
  toast.setAttribute("aria-live", "polite");
  document.body.appendChild(toast);

  return toast;
}

export function showToast(toast, message) {
  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}
