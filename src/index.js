module.exports = function reverse(n) {
    n = n.toString();
    if (n[0] == "-") {
        n = n.slice(1);
    }
    var reverseArr = "";
    for (var i = n.length - 1; i >= 0; i--) {
        reverseArr += n[i];
    }
    return +reverseArr;
};
