const express = require('express')
const router = express.Router()
const {getGoals, 
    setGoal, 
    deleteGoal, 
    updateGoal
} = require('../controllers/goalController')

// router.get('/', getGoals)
// router.post('/', setGoal)
router.route('/').get(getGoals).post(setGoal)



// router.put('/:id', updateGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({ message: `Delete goal ${req.params.id}`})
// })
//router.delete('/:id', deleteGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal)


module.exports = router