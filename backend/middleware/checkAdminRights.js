function checkAdminRights(req, res, next) {
  if (req.user.role === 'admin') {
    next();
  } else {
    res.status(401).send({message:"You are not authorized to access this route"});
  }
}

module.exports = checkAdminRights;