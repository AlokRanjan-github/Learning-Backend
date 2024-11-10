function sum(a,b) {
    return a+b;
}
function subs(a,b) {
    return a-b;
}
multi = (a,b) => {
    return a*b;
}

// First way to export
const obj = {
    sum:sum,
    subs:subs,
    multiply:multi
};
module.exports = obj;

// Second way to export

module.exports = {
    sum:sum,
    subs:subs,
    multiply:multi
};

// // third way to export
// exports.sum(a,b) {
//     return a+b;
// }

// //Fourth way to export

// module.exports.sum(a,b) {
//     return a+b;
// }

// // Wrong way
// export = 5;