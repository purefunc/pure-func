const shortid = require("shortid")
const fs = require("fs")
const mkdirp = require("mkdirp")
const logger = require("../../config/logger")

const UPLOAD_DIR = "./uploads"
const DOMAIN = `${process.env.HOSTING_DOMAIN || ""}/`

const storeFS = ({ stream, filename }) => {
  mkdirp(UPLOAD_DIR)
  const id = shortid.generate()
  const filepath = `${UPLOAD_DIR}/${id}-${filename}`
  return new Promise((resolve, reject) => {
    stream.on("error", err => {
      if (stream.truncated) {
        fs.unlinkSync(filepath)
      }
      reject(err)
    })

    stream
      .pipe(fs.createWriteStream(filepath))
      .on("error", err => reject(err))
      .on("finish", () => resolve({ id, filepath }))
  })
}

module.exports = {
  Mutation: {
    async singleUpload(parent, args) {
      const { createReadStream, filename, mimetype, encoding } = await args.file
      try {
        const stream = createReadStream()
        const { id, filepath: oldPath } = await storeFS({ stream, filename })
        const filepath = oldPath.replace("./", DOMAIN)
        return { id, filepath, filename, mimetype, encoding }
      } catch (e) {
        logger.error("Error saving file")
        logger.error(e)
        throw new Error("Error uploading file to server")
      }
    }
  }
}
