import { Router } from 'express'
import { check, validationResult } from 'express-validator'

export const testRouter = Router()

import { test, status, postMalone } from '../controllers/test.controller'

testRouter.get('/test', test)

testRouter.get('/status', status)

testRouter.use(
  '/malone',
  [
    check('ozzy')
      .notEmpty()
      .withMessage('Ozzy param is required!')
  ],
  (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  }
)

testRouter.post('/malone', postMalone)