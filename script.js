let quBIG = [];
let quMedium = [];
let qsmol = [];

quBIG.push("q");
quMedium.push("q");
qsmol.push("q");

for (let i = 0; i < 100000; i++) {
    quBIG.push(Math.random() > 0.5 ? "q" : "u");
}

for (let i = 0; i < 10; i++) {
    qsmol.push(Math.random() > 0.5 ? "q" : "u");
}

for (let i = 0; i < 20; i++) {
    quMedium.push(Math.random() > 0.5 ? "q" : "u");
}

document.getElementById("quq").innerText = quBIG.join("");
document.getElementById("ququ").innerText = qsmol.join("");
document.title = quMedium.join("");