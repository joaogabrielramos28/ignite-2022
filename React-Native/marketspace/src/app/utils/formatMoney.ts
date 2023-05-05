export const formattedMoney = (value: number) => {
  const price = value / 100;

  return new Intl.NumberFormat("pt-BR", {}).format(price);
};
