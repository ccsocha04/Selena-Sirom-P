const { body } = require('express-validator');

const validator = {
    booking: [
        body('name').notEmpty().withMessage('Tu nombre es necesario.'),
        body('email').notEmpty().withMessage('Tu correo electrónico es necesario.').bail()
            .isEmail().withMessage('El correo electrónico no es válido.'),
        body('phone').notEmpty().withMessage('Tu número de teléfono es necesario.').bail()
            .isNumeric().withMessage('El número de teléfono no es válido.'),
        body('confirmation').notEmpty().withMessage('Por favor confirma tu asistencia.')
    ]
}


module.exports = validator;