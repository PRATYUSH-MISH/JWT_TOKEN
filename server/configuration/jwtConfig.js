const crpyto=require('crypto')
const secretKey=crpyto.randomBytes(32).toString('hex')
module.exports={
    secretKey:secretKey
}