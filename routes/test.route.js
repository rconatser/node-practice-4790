import { Router } from 'express'
import { check, validationResult } from 'express-validator'

export const router = Router()

import { test, status, postMalone } from '../controllers/test.controller'

router.get('/test', test)

router.get('/status', status)

router.use('/malone', 
[check('ozzy').notEmpty().withMessage('Ozzy param is required!')], 
(req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return  res.status(422).json({ errors: errors.array() })
    }
    next()
})

router.post('/malone', postMalone)