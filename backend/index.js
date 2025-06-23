const express = require('express');
const app = express();
const db = require('./models');

app.use(express.json());
//Routers
const UserRouter = require('./routes/UserRoute');
app.use("/user", UserRouter);

db.sequelize.sync().then(() => {
    app.listen(9000,() => {
        console.log("Server running on port 9000")
    });
}).catch((err)=> {
    console.error(err);
});
 