import { Router } from 'express'
import userController from './controllers/userController'
import uploadConfig from './config/uploadConfig'
import multer from 'multer'

const upload = multer(uploadConfig)

const route = Router()

route.get('/', userController.getAll)
route.post('/register', upload.single('image'), userController.register)

export default route
