const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = "danny katri max mike";
const UserModel = require('../models/User');

const router = express.Router();

// User registration route
router.post('/register', async (req, res) => {
    // Get the username from the request
    const { username, password } = req.body;

    // authentication will take approximately 13 seconds
    // https://pthree.org/wp-content/uploads/2016/06/bcrypt.png
    const hashCost = 10;

    // We can use the try block here because we used async earlier
    try {
        const passwordHash = await bcrypt.hash(password, hashCost);
        const userDocument = new UserModel({ username, passwordHash });
        await userDocument.save();

        // Send confirmation that user registration was successful
        res.status(200).send({ username });

    }
    catch (error) {
        res.status(400).send({
            error: 'req body should take the form { username, password }',
        });
    }
});

router.post('/login', (req, res) => {
    passport.authenticate(
        'local',
        // This means we're not serializing a session for this. That's what the JWT is for...I think.
        { session: false },
        (error, user) => {

            // Send an error if password doesn't match or no matching user is found.
            if (error || !user) {
                res.status(400).json({ error });
            }

            /** This is what ends up in our JWT */
            // TODO: Test this and then update it to instead include the user ID.
            const payload = {
                username: user.username,
                // This sets the token to expire in 24 hours
                expires: Date.now() + parseInt(1000*60*60*24),
            };

            /** assigns payload to req.user */
            req.login(payload, { session: false }, (error) => {
                if (error) {
                    res.status(400).send({ error });
                }

                /** generate a signed json web token and return it in the response */
                // ! This isn't used! Find out where this should be used!
                const token = jwt.sign(JSON.stringify(payload), SECRET);

                /** assign our jwt to the cookie */
                res.cookie('jwt', jwt, { httpOnly: true, secure: true });
                res.status(200).send({ username });
            });
        },
    )(req, res);
});

module.exports = router;
