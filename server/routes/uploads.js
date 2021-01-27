const express = require("express")
const router = new express.Router()
const path = require("path")

router.get("/:file_name", (req, res) => {
  res.sendFile(path.join(__dirname + "/../../uploads/" + req.params.file_name))
})

module.exports = router
