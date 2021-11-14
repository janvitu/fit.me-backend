import dotenv from "dotenv-flow";
import express from "express";
import cors from "cors";
import mysql from "mysql";

dotenv.config();

const mysqlConnection = mysql.createConnection({
	host: process.env.MYSQL_HOST,
	port: process.env.MYSQL_PORT,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE,
});

const app = express();
app.use(cors());

mysqlConnection.connect((err) => {
	if (err) {
		console.log({ err });
		return;
	}
	console.log("connected as id " + mysqlConnection.threadId);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.info(`Server started at http://localhost:${port}`);
});
