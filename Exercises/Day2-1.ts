enum currentDirection {
    North = 1,
    South,
    West,
    East
}

const getDirectionValue = (directionName: string): number | undefined => {
    switch (directionName) {
        case "North":
            return currentDirection.North
        case "South":
            return currentDirection.South
        case "West":
            return currentDirection.West
        case "East":
            return currentDirection.East
    }
}

const directionName = getDirectionValue("North");

console.log(directionName);
