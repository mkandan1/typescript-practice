const generateObject = (students: [string, number][]): {[name: string] : number} =>{
    const nameMappedWithAge: {[name: string]: number} ={}
    for(const [name, age] of students){
        nameMappedWithAge[name] = age
    }
    return nameMappedWithAge
}

const students: [name:string, age: number][] = [
    ["Mani", 20],
    ["Bhuvanesh", 19],
    ["Praveen", 19]
]

const generatedObject = generateObject(students);
console.log(generatedObject);