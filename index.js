const app = require("./app");
const port = process.env.PORT || 8742;
app.listen(port, () => {
  console.log(`Starte express server at port 3000- ${port}`);
});
