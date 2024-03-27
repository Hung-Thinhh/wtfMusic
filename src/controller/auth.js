const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user_model');

const signup = async (req, res) => {
    const { password, email, avt, username, id } = req.body;
    try {

        const hashedPassword = await bcrypt.hash(password, 10);

        const updatedUser = await User.findOneAndUpdate(
            { id: id },
            {
                username,
                avt,
                email,
                password: hashedPassword,
            },
            { upsert: true, new: true }
        );

       
        if (updatedUser) {
            const token = jwt.sign(
                { userId: updatedUser._id },
                process.env.JWT_SECRET,
                { expiresIn: '1h' }
            );
            res.json({ message: 'User successfully signed up', token: token });
        }
    } catch (error) {
        res.status(200).send(`Failed to create/update user: ${error.message}`);
    }
}
const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        
        const token = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET, 
            { expiresIn: '1h' }
        );
               
        res.json({
            message: 'Logged in successfully',
            token,
            username: user.username,
            email: user.email
        });
        
    } catch (error) {
        res.status(200).json({ message: `Server error: ${error.message}` });
    }
};

module.exports = {
    signup,
    login
};