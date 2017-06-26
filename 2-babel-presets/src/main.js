const foo = {
    a: 1,
    b: 2,
    c: 3,
};

const { a, ...others } = foo;
document.write(JSON.stringify({ ...others, d: 4}));
