function assignGrade(score) {
    if (score > 90) {
        return "A";
    } else if (score > 80) {
        return "B";
    } else if (score > 70) {
        return "C";
    } else if (score > 65)  {
        return "D";
    } else {
        return "F";
    }
}

for (i = 60; i <= 100; i++) {
    console.log(i + " ponts, you will get a " + assignGrade(i));
}