function errorHandling(err, req, res, next){
  if (err) {
      let status = err.status || 500
      res.json({
          status,
          msg: "AN ERROR OCCURRED: try later"
      })
  }
  next()
}
module.exports = errorHandling;