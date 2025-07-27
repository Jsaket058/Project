const router = require('express').Router();
const auth = require('../middlewares/auth.middleware');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/post.controller');

router.post('/', auth, createPost);
router.get('/', getPosts);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
