export function formatPhoneBR(phone: string | undefined) {
    // remove tudo que não for número
    const cleaned = phone?.replace(/\D/g, "");

    // remove o código do país (55), se existir
    const withoutCountry = cleaned?.startsWith("55")
      ? cleaned.slice(2)
      : cleaned;

    const ddd = withoutCountry?.slice(0, 2);
    const number = withoutCountry?.slice(2);

    if (number?.length === 9) {
      // celular
      return `(${ddd}) ${number?.slice(0, 5)}-${number?.slice(5)}`;
    }

    if (number?.length === 8) {
      // fixo
      return `(${ddd}) ${number?.slice(0, 4)}-${number?.slice(4)}`;
    }

    return phone;
  }