import { check, param, validationResult } from "express-validator";

const validateCreateRecipe = () => {
  return [
    check("titre")
      .not()
      .isEmpty()
      .withMessage("Le titre ne peut pas être vide!")
      .bail()
      .isLength({ min: 5, max: 100 }) // Assurez-vous que min et max soient corrects
      .withMessage("Le titre doit comporter entre 5 et 100 caractères!"),
    check("ingredients")
      .not()
      .isEmpty()
      .withMessage("Les ingrédients ne peuvent pas être vides!"),
    check("type")
      .not()
      .isEmpty()
      .withMessage("Le type ne peut pas être vide!"),
  ];
};

const validateUpdateRecipe = () => {
  return [
    param("id").not().isEmpty().withMessage("L'ID est requis!"),
    check("titre")
      .optional()
      .isLength({ min: 5, max: 100 })
      .withMessage("Le titre doit comporter entre 5 et 100 caractères!"),
    check("ingredients")
      .optional()
      .not()
      .isEmpty()
      .withMessage("Les ingrédients ne peuvent pas être vides!"),
    check("type")
      .optional()
      .not()
      .isEmpty()
      .withMessage("Le type ne peut pas être vide!"),
  ];
};

const validateDeleteRecipe = () => {
  return [
    param("id")
      .not()
      .isEmpty()
      .withMessage("L'ID est requis pour supprimer une recette!"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};

export {
  validateCreateRecipe,
  validateUpdateRecipe,
  validateDeleteRecipe,
  validate,
};
