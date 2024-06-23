import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({ 'string.base': 'Username should be a string' }),
  email: Joi.string().email().required(),
  phoneNumber: Joi.string().min(3).max(20).required().messages({ 'string.base': 'PhoneNumber should be a string' }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal').required(),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  email: Joi.string().email(),
  phoneNumber: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean(),
  contactType: Joi.string().valid('work', 'home', 'personal'),
});



// import Joi from 'joi';

// export const creaContactSchema = Joi.object({
//     name: Joi.string().min(3).max(20).required().messages({
//         'string.base': 'Username should be a string',
//         'string.min': `Username should have at least ${3} characters`,
//         'string.max': `Username should have at most ${20} characters`,
//         'any.required': 'Username is required',
//     }),
//     phoneNumber: Joi.string().min(3).max(20).required(),
//     email: Joi.string().email().required(),
//     isFavourite: Joi.boolean().required(),
//     contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').required(),
//     createdAt: Joi.date().iso().required(),
//     updatedAt: Joi.date().iso().required(),
// });

// export const updateContactSchema = Joi.object({
//     name: Joi.string().min(3).max(20),
//     phoneNumber: Joi.string().min(3).max(20).required(),
//     email: Joi.string().email().required(),
//     isFavourite: Joi.boolean().required(),
//     contactType: Joi.string().min(3).max(20).valid('work', 'home', 'personal').required(),
//     createdAt: Joi.date().iso().required(),
//     updatedAt: Joi.date().iso().required(),
// });

