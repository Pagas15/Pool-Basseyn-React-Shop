export const getTotalSum = (arr) => arr.reduce((a, b) => a + b, 0);

export const getArrSum = (arr, name) => getTotalSum(Object.values(arr).map(item => item[name]));