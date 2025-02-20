const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

// Admin - Login Page
router.get('/admin', adminController.getAdminLoginPage);

// Admin - Check Login
router.post('/admin', adminController.checkAdminLogin);

// Admin Dashboard
router.get('/dashboard', authMiddleware, adminController.getAdminDashboard);

// Admin - Create New Post
router.get('/add-post', authMiddleware, adminController.getAddPostPage);
router.post('/add-post', authMiddleware, adminController.createNewPost);

// Admin - Edit Post
router.get('/edit-post/:id', authMiddleware, adminController.getEditPostPage);
router.put('/edit-post/:id', authMiddleware, adminController.updatePost);

// Admin - Register
router.post('/register', adminController.registerAdmin);

// Admin - Delete Post
router.delete('/delete-post/:id', authMiddleware, adminController.deletePost);

// Admin Logout
router.get('/logout', adminController.logoutAdmin);

module.exports = router;