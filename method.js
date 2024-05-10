const students = [ 
    { id: 1, name: 'Alice', age: 20, grade: 'A' }, 
    { id: 2, name: 'Bob', age: 22, grade: 'B' }, 
    { id: 3, name: 'Charlie', age: 21, grade: 'C' }, 
    { id: 4, name: 'David', age: 19, grade: 'B' }, 
    { id: 5, name: 'Eva', age: 23, grade: 'A' }
    ]

    // Code for Student Names
  const studentNames = students.map((student) =>{
       return student.name
    })

    console.log(studentNames);

    //Code for Student Information
    students.forEach((each) =>{
        console.log (`${each.name} ${each.age} ${each.grade}`)

    });

    //Code for top Students
    const topStudents = students.filter((top)=> {
       return top.grade == 'A'
    })
    console.log(topStudents);
 