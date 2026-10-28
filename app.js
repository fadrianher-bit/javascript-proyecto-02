const project = {
    name: "Website Redesign",
    manager: "Fernando",
    budget: 15000,
    status: 'In Progress',
    tasks: [
        {
            name: 'Design homepage',
            owner: 'Sarah',
            priority: 'High',
            status: 'To do',   //string
            deadline: "2026-10-15",  //string
            estimatedHours: 8,  //number

        }
    ]
};

console.log(project.name);
console.log(project.budget);
console.log(project.status);


const teamMembers = [`Fernando`, `Sarah`, `Michael`];
console.log(teamMembers[1]);
console.log(teamMembers.length);

console.log(project.owner);