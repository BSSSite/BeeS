const noblox = require("noblox.js")
const Express = require("express");
const App = Express();
const Port = 3000;



App.post("/api/v1/upload/decal", async (req, res) => {

  await noblox.uploadItem("A cool decal.", 13, "https://cdn.vectorstock.com/i/preview-1x/99/27/pointer-finger-click-icon-vector-24389927.jpg")

  
  res.send(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)


  
})

App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
