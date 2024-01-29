const noblox = require("noblox.js")
const Express = require("express");
const App = Express();
const Port = 3000;



App.post("/api/v1/upload/decal", async (req, res) => {
    const Cookie = await req.body.cookie
    const currentUser = await noblox.setCookie(Cookie) 
    res.send(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)


  // await noblox.uploadItem("A cool decal.", 13, "https://cdn.vectorstock.com/i/preview-1x/99/27/pointer-finger-click-icon-vector-24389927.jpg")

  


  
})

App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
