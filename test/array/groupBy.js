const groupBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn])
    .reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
    }, {});

console.log(groupBy([6.1, 4.2, 6.3], Math.floor))
// {4: [4.2], 6: [6.1, 6.3]}

console.log(groupBy(['one', 'two', 'three'], 'length'))
// {3: ['one', 'two'], 5: ['three']}