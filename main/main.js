module.exports = function main(email, suffixes) {

    return suffixes.includes(email.slice(email.indexOf("@") + 1));
};
