alert("This is alert box");
var visitorName=prompt("what is your name");
console.log(visitorName);
document.addEventListener("DOMContentLoaded", () => {
  // تحديث الكمية
  const updateQuantity = (btn, isIncrement) => {
    const quantitySpan = btn.parentElement.querySelector(".quantity");
    const unitPrice = parseFloat(btn.closest(".card-body").querySelector(".unit-price").textContent.replace("$", ""));
    const totalPriceSpan = document.querySelector(".total");
    
    let quantity = parseInt(quantitySpan.textContent);
    quantity = isIncrement ? quantity + 1 : Math.max(0, quantity - 1); // منع الكمية السالبة
    quantitySpan.textContent = quantity;

    updateTotalPrice();
  };

  // تحديث السعر الإجمالي
  const updateTotalPrice = () => {
    let totalPrice = 0;
    document.querySelectorAll(".card-body").forEach((card) => {
      const quantity = parseInt(card.querySelector(".quantity").textContent);
      const unitPrice = parseFloat(card.querySelector(".unit-price").textContent.replace("$", ""));
      totalPrice += quantity * unitPrice;
    });
    document.querySelector(".total").textContent = `${totalPrice} $`;
  };

  // حذف العناصر
  document.querySelectorAll(".fa-trash-alt").forEach((trashBtn) => {
    trashBtn.addEventListener("click", () => {
      trashBtn.closest(".card-body").remove();
      updateTotalPrice();
    });
  });

  // تعديل الكمية
  document.querySelectorAll(".fa-plus-circle").forEach((plusBtn) => {
    plusBtn.addEventListener("click", () => updateQuantity(plusBtn, true));
  });

  document.querySelectorAll(".fa-minus-circle").forEach((minusBtn) => {
    minusBtn.addEventListener("click", () => updateQuantity(minusBtn, false));
  });

  // زر الإعجاب
  document.querySelectorAll(".fa-heart").forEach((heartBtn) => {
    heartBtn.addEventListener("click", () => {
      heartBtn.classList.toggle("text-danger");
    });
  });
});
