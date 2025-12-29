// نسخ الرقم
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const number = btn.getAttribute("data-number");
    try {
      await navigator.clipboard.writeText(number);
      showToast("تم النسخ ✅");
    } catch {
      showToast("تعذر النسخ");
    }
  });
});

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.hidden = false;
  setTimeout(() => (toast.hidden = true), 2000);
}

// تحميل vCard
document.getElementById("downloadVCard").addEventListener("click", () => {
  const numbers = [...document.querySelectorAll(".copy-btn")].map((btn) =>
    btn.getAttribute("data-number")
  );

  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "FN:جهة اتصال",
    ...numbers.map((n) => `TEL;TYPE=CELL:${n}`),
    "END:VCARD",
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "contact.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});
