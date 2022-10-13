// load up the express framework and body-parser helper
const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const atletiRoute = require("./routes/atleti");

mongoose
	.connect("mongodb://localhost:27017/miniolimpiadi", { useNewUrlParser: true })
	.then(() => {
		const app = express()

    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.use("/atleti", atletiRoute)

	  const server = app.listen(3000, () => {
      console.log('listening on port %s...', server.address().port);
    });
	})