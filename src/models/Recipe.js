import db from '../config/db.js';
import { validationResult } from 'express-validator';

class RecipeModel {
  async getRecipeByTitle(titre) {
    const query = 'SELECT * FROM recettes WHERE titre = ?';
    const [rows] = await db.query(query, [titre]);
    return rows[0] || null;
  }

  async createRecipe(recipeData) {
    const errors = validationResult(recipeData);
    if (!errors.isEmpty()) {
      throw new Error(
        'Erreur de validation des données : ' + JSON.stringify(errors.array())
      );
    }

    const { titre, ingredients, type } = recipeData;
    const query =
      'INSERT INTO recettes (titre, ingredients, type) VALUES (?, ?, ?)';

    try {
      const [result] = await db.query(query, [titre, ingredients, type]);
      return { id: result.insertId, titre, ingredients, type };
    } catch (error) {
      console.error('Erreur lors de la création de la recette:', error);
      throw new Error('Erreur lors de la création de la recette');
    }
  }
  async getAllRecipes() {
    const query = 'SELECT * FROM recettes';
    try {
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      console.error('Erreur lors de la récupération des recettes:', error);
      throw new Error('Erreur lors de la récupération des recettes');
    }
  }

  async getRecipeById(id) {
    if (isNaN(id) || id <= 0) {
      throw new Error('ID invalide. Il doit être un entier positif.');
    }
    const query = 'SELECT * FROM recettes WHERE id = ?';
    const [rows] = await db.query(query, [id]);
    return rows[0] || null;
  }

  async updateRecipe(id, recipeData) {
    const errors = validationResult(recipeData);
    if (!errors.isEmpty()) {
      throw new Error(
        'Erreur de validation des données : ' + JSON.stringify(errors.array())
      );
    }

    if (isNaN(id) || id <= 0) {
      throw new Error('ID invalide. Il doit être un entier positif.');
    }

    const { titre, ingredients, type } = recipeData;
    const query =
      'UPDATE recettes SET titre = ?, ingredients = ?, type = ? WHERE id = ?';
    const [result] = await db.query(query, [titre, ingredients, type, id]);

    if (result.affectedRows === 0) {
      return null;
    }

    return { id, titre, ingredients, type };
  }

  async deleteRecipe(id) {
    if (isNaN(id) || id <= 0) {
      throw new Error('ID invalide. Il doit être un entier positif.');
    }

    const query = 'DELETE FROM recettes WHERE id = ?';
    const [result] = await db.query(query, [id]);

    if (result.affectedRows === 0) {
      return null;
    }

    return { message: 'Recette supprimée avec succès' };
  }
}

export default new RecipeModel();
