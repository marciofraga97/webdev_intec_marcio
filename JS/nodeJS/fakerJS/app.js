const faker = require("faker/locale/nl_BE")

const fullName = faker.name.findName()
const email = faker.internet.email()

console.log(`${fullName}\n${email}`)