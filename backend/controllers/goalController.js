const getGoals = (req, res) => {
    res.status(200).json({ message: 'GeT goals'})
}

module.exports = {
    getGoals, 
}