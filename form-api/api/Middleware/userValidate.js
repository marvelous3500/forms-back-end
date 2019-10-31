import Joi from 'joi'

export const userSchema = Joi.object().keys({
  username: Joi.string().alphanum().min(2).max(30).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string().email({ minDomainAtoms: 2 })
})
