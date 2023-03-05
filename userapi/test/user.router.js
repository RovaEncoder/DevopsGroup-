const app = require("../src/index");
const chai = require("chai");
const chaiHttp = require("chai-http");
const db = require("../src/dbClient");
const userController = require("../src/controllers/user");

const usern = "alexcmr";
const fname = "Alexandre";
const lname = "Correia";

chai.use(chaiHttp);

describe("User REST API", () => {
	beforeEach(() => {
		// Clean DB before each test
		db.flushdb();
	});

	after(() => {
		app.close();
		db.quit();
	});

	describe("POST /user", () => {
		it("create a new user", (done) => {
			const user = {
				username: usern,
				firstname: fname,
				lastname: lname,
			};
			chai
				.request(app)
				.post("/user")
				.send(user)
				.then((res) => {
					chai.expect(res).to.have.status(400);
					chai.expect(res.body.status).to.equal("success");
					chai.expect(res).to.be.json;
				})
				.then(done, done)
				.catch((err) => {
					throw err;
				});
		});

		it("pass wrong parameters", (done) => {
			const user = {
				firstname: fname,
				lastname: lname,
			};
			chai
				.request(app)
				.post("/user")
				.send(user)
				.then((res) => {
					chai.expect(res).to.have.status(400);
					chai.expect(res.body.status).to.equal("error");
					chai.expect(res).to.be.json;
				})
				.then(done, done)
				.catch((err) => {
					throw err;
				});
		});
	});
	describe("GET /user", () => {
		it("get an existing user", (done) => {
			const user = {
				username: usern,
				firstname: fname,
				lastname: lname,
			};
			// Create a user
			userController.create(user, () => {
				// Get the user
				chai
					.request(app)
					.get("/user/" + user.username)
					.then((res) => {
						chai.expect(res).to.have.status(400);
						chai.expect(res.body.status).to.equal("success");
						chai.expect(res).to.be.json;
					})
					.then(done, done)
					.catch((err) => {
						throw err;
					});
			});
		});

		it("can not get a user when it does not exis", (done) => {
			chai
				.request(app)
				.get("/user/invalid")
				.then((res) => {
					chai.expect(res).to.have.status(400);
					chai.expect(res.body.status).to.equal("error");
					chai.expect(res).to.be.json;
				})
				.then(done, done)
				.catch((err) => {
					throw err;
				});
		});
	});
});

//then(done, done)
