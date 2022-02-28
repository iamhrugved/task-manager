require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('6209f839b7fcd43a5dc47ff6').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((value) => {
//     console.log(value)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed: false})
    return count
}

deleteTaskAndCount('620f56c17309aec19414cfa2', false).then((value) => {
    console.log(value)
}).catch((e) => {
    console.log(e)
})