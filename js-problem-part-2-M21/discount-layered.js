function layeredDiscountTotal(quantity) {
  const first100Price = 100;
  const second200Price = 90;
  const above200Price = 70;

  if (quantity <= 100) {
    const total = quantity * first100Price;
    return total;
  }
  if (quantity <= 200) {
    const first100Total=100*first100Price;
    const remainingQuantity=quantity-100;
  const remainingTotal=remainingQuantity*second200Price;
  const total=first100Total+remainingTotal;
  return total
  }
  const first100Total=100*first100Price;
  const second100Total=100*second200Price;
  const remainingQuantity=quantity-200;
  const remainingTotal=remainingQuantity*above200Price;
  const total=first100Total+second100Total+remainingTotal;
  return total
}

const totalCost = layeredDiscountTotal(101);
console.log(totalCost);
