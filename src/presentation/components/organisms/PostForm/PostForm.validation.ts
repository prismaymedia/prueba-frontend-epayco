import { VALIDATION_RULES, VALIDATION_MESSAGES } from '../../../constants/validationRules';

/**
 * Validaciones del formulario de Post
 */
export const postFormValidation = {
  title: {
    required: {
      value: VALIDATION_RULES.TITLE.REQUIRED,
      message: VALIDATION_MESSAGES.TITLE.REQUIRED,
    },
    minLength: {
      value: VALIDATION_RULES.TITLE.MIN_LENGTH,
      message: VALIDATION_MESSAGES.TITLE.MIN_LENGTH,
    },
    maxLength: {
      value: VALIDATION_RULES.TITLE.MAX_LENGTH,
      message: VALIDATION_MESSAGES.TITLE.MAX_LENGTH,
    },
    validate: {
      notEmpty: (value: string) =>
        value.trim().length > 0 || 'El título no puede estar vacío',
    },
  },
  body: {
    required: {
      value: VALIDATION_RULES.BODY.REQUIRED,
      message: VALIDATION_MESSAGES.BODY.REQUIRED,
    },
    minLength: {
      value: VALIDATION_RULES.BODY.MIN_LENGTH,
      message: VALIDATION_MESSAGES.BODY.MIN_LENGTH,
    },
    maxLength: {
      value: VALIDATION_RULES.BODY.MAX_LENGTH,
      message: VALIDATION_MESSAGES.BODY.MAX_LENGTH,
    },
    validate: {
      notEmpty: (value: string) =>
        value.trim().length > 0 || 'El contenido no puede estar vacío',
    },
  },
};
