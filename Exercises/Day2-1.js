var currentDirection;
(function (currentDirection) {
    currentDirection[currentDirection["North"] = 1] = "North";
    currentDirection[currentDirection["South"] = 2] = "South";
    currentDirection[currentDirection["West"] = 3] = "West";
    currentDirection[currentDirection["East"] = 4] = "East";
})(currentDirection || (currentDirection = {}));
var getDirectionValue = function (directionName) {
    switch (directionName) {
        case "North":
            return currentDirection.North;
        case "South":
            return currentDirection.South;
        case "West":
            return currentDirection.West;
        case "East":
            return currentDirection.East;
    }
};
var directionName = getDirectionValue("North");
console.log(directionName);
