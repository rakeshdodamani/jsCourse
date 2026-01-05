// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB Connected`);
})();

(function aurchai() {
    console.log(`DB Connected Two`);
})();

((name) => {
    console.log(`DB Connected Three ${name}`);
})("rakesh")
