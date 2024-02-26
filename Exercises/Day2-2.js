var generateObject = function (students) {
    var nameMappedWithAge = {};
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var _a = students_1[_i], name_1 = _a[0], age = _a[1];
        nameMappedWithAge[name_1] = age;
    }
    return nameMappedWithAge;
};
var students = [
    ["Mani", 20],
    ["Bhuvanesh", 19],
    ["Praveen", 19]
];
var generatedObject = generateObject(students);
console.log(generatedObject);
