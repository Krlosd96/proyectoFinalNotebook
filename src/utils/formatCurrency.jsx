export const formatCurrency = (amount) => {
  const numero = Number(amount) || 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(numero);
};
