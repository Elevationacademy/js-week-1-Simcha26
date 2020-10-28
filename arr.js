///// Arrays /////
///// Exercise_1 /////
const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]
genes.splice(2, 1, "CRYZ")
genes.splice(4, 1, "RLF")
genes.splice(3, 1)
genes.push("AZIN2", "AZIN2")
genes.unshift("FXT")
// Q: Why does genes["..."].push add element letter by letter?
// A:
