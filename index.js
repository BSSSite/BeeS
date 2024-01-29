const noblox = require("noblox.js");
const Express = require("express");
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
        await noblox.uploadItem("Sunglass.", 13, "https://image.spreadshirtmedia.com/image-server/v1/compositions/T210A1PA4301PT17X57Y109D1014258253W21674H4360/views/1,width=550,height=550,appearanceId=1,backgroundColor=FFFFFF,noPt=true/deal-with-it-sunglasses-cool-mens-t-shirt.jpg")
        res.send(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

App.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
