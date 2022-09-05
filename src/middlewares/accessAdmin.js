const admins = ["greta", "ada", "vim", "tim"];

const accessAdmin = (req,res,next) => {
    if (!req.query.user) {
        return res.redirect("/login")
    }
    if (admins.includes(req.query.user.toLowerCase())) {
        next()
    }
    return res.redirect("/no-entry")
}

module.exports = accessAdmin