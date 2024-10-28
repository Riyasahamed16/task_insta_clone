const express = require('express');
const multer = require('multer');
const Post = require('../models/Post');

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Create Post
router.post('/create', upload.single('image'), async (req, res) => {
    const { caption, userId } = req.body;

    const newPost = new Post({
        caption,
        image: req.file.filename,
        userId
    });

    try {
        await newPost.save();
        res.json({ message: 'Post created successfully' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Get all posts
router.get('/', async (req, res) => {
    const posts = await Post.find().populate('userId', 'username');
    res.json(posts);
});

module.exports = router;
