const Post = require('../models/post.model');

const createPost = async (req, res) => {
    try {
        const post = new Post({ ...req.body, author: req.user.id });
        await post.save();
        return res.status(201).json(post);
    } catch (error) {
        return res.status(500).json({ error: 'Could not create post' });
    }
};

const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email');
        return res.json(posts);
    } catch (error) {
        return res.status(500).json({ error: 'Error fetching posts' });
    }
};

const updatePost = async (req, res) => {
    try {
        const post = await Post.findOneAndUpdate(
            { _id: req.params.id, author: req.user.id },
            req.body,
            { new: true }
        );
        if (!post) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        return res.json(post);
    } catch (error) {
        return res.status(500).json({ error: 'Could not update post' });
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
        if (!post) {
            return res.status(403).json({ error: 'Unauthorized' });
        }
        return res.json({ message: 'Post deleted' });
    } catch (error) {
        return res.status(500).json({ error: 'Could not delete post' });
    }
};

module.exports = {
    createPost,
    getPosts,
    updatePost,
    deletePost,
};
