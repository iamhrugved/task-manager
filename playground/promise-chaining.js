require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate(('620ee82739fea78dfc44fc74'), {age: 24}).then((user) => {
//     console.log(user)
//     return User.countDocuments({age: 24})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, {age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('620ee82739fea78dfc44fc74', 42).then((value) => {
    console.log(value)
}).catch((e) => {
    console.log(e)
})