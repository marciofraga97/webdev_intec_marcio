let students = [
    {
        id: 1,
        username: "joe",
        password: "joe123",
        email: "joe@joe.com"
    }
]

const home = (req, res) => {
    res.send("This is homepage | intecbrussel")
}

const students = (req, res) => {
    res.json(students)
}

const teacher = (req, res) => {
    res.json(teacher)
}

module.exports = home, students