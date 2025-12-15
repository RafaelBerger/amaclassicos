export function formatPriceBR(price: number) {
    return new Intl.NumberFormat('pt-BR').format(price);
}