module.exports = function w3cDate(value) {
    let dateObject = new Date(value);

    return dateObject.toISOString();
}
