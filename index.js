const noblox = require("noblox.js");
const Express = require("express");
const fs = require("fs")
const App = Express();
const Port = 3000;

// Use middleware to parse JSON data
App.use(Express.json());

App.post("/api/v1/upload/decal", async (req, res) => {
    try {
        // Check if 'cookie' property is present in the request body
        const cookie = req.body.cookie;
        if (!cookie) {
            return res.status(400).send("Missing 'cookie' property in the request body");
        }

        const currentUser = await noblox.setCookie(cookie);
        await noblox.uploadItem("A cool decal.", 13, fs.createReadStream("./Image.png"))
        res.send(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

App.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
