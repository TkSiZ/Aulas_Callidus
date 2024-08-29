const express = require('express');
const router = express.Router();
const livrosController = require('../controllers/livrosController');

router.get('/livros', livrosController.getTodosLivros);
router.get('/livros/:id', livrosController.getLivroById);
router.get('/livros', livrosController.criarLivro);
router.get('/livros/:id', livrosController.atualizarLivro);
router.get('/livros/:id', livrosController.deletarLivro);
