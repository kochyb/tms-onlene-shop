export const parsePrice = (price) => {
    if (typeof price === 'number') {
        return price.toFixed(2)
    }
    return price;
};
