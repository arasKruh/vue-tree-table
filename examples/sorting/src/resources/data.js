const tableData = [
    {
        class: '1A',
        teacher: 'Node Postgres',
        children: [
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            },
            {
                student: 'Red Riding Hood',
                student_nr: 1,
                avg: 5.2
            },
            {
                student: 'Tinky Winky',
                student_nr: 2,
                avg: 3.75
            }
        ]
    },
    {
        class: '1B',
        teacher: 'Travis Jenkins',
        children: [
            {
                student: 'Xabi Alonso',
                student_nr: 3,
                avg: 3.8
            },
            {
                student: 'Lionel Messi',
                student_nr: 4,
                avg: 4.3
            },
        ]
    }
]

const columns = [
    {
        label: 'Class',
        id: 'class'
    },
    {
        label: 'Teacher',
        id: 'teacher'
    },
    {
        label: 'Student Nr',
        id: 'student_nr'
    },
    {
        label: 'Student Name',
        id: 'student'
    },
    {
        label: 'Average Grade',
        id: 'avg'
    }
]

export default { columns, tableData }