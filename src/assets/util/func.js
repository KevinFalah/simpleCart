export const formatIDR = (money) => {
    const result = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  
    return result.slice(3);
  };