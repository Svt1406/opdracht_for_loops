const multiply = 9;
for (let i = 1; i <= 10; i++) {
    let result = i * multiply;
    console.log(`${multiply} * ${i} = ${result}`);
}

for (let multiply2 = 0; multiply2 <= 10; multiply2++) {
    for (let i = 1; i <= 10; i++) {
        let result = i * multiply2;
        console.log(`${multiply2} * ${i} = ${result}`);
    }
}