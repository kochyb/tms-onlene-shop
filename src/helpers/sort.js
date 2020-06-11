export default function (array, typeSort) {
    if (typeSort === 'Desc') {
        array.sort((a, b) => (a.price.value - b.price.value));
    } else {
        array.sort((a, b) => (b.price.value - a.price.value));
    }
    return array;
}
