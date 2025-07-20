const authAdmin = (req, res, next) => {
  console.log("Authorization in progress.")
  const token = "xyz";
  const isAdminAuthorized = token === "xyz";
  if (!isAdminAuthorized) {
    res.status(401).send("Unautorized request. Please try later");
  } else {
    next();
  }
};

module.exports = {authAdmin};