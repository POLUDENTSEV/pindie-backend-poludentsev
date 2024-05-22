const sendAllusers = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.usersArray));
};

module.exports = sendAllusers;