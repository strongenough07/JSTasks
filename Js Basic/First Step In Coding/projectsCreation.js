function projectsCreation (input) {
    let name = input[0]
    let numProjects = input[1]
    let needHours = numProjects * 3


    console.log(`The architect ${name} will need ${needHours} hours to complete ${numProjects} project/s.`);
}


projectsCreation(["George ",
"4 "])