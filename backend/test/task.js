let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

chai.should();

chai.use(chaiHttp);
const jwt = require('jsonwebtoken');

describe("Backend API", () => {
  describe("POST /api/v1/users/createsession", () => {
    it("hits the create session endpoint which should empty since nothing was passed in", async () => {
      try {
        const response = await chai
          .request("http://localhost:8000")
          .post("/api/v1/users/createsession");

        response.body.should.be.a("object");
        response.body.should.be.empty;
        console.log(response.body);
      } catch (error) {
        throw error;
      }
    });
  });
});

  describe("GET /api/v1/users/", () => {
    it("IT SHOULD RETURN ALL THE JOBS", (done) => {
      // const task = {
      //     email:'shaangzb@gmail.com',
      //     password:'123',

      // };

      chai
        .request("http://localhost:8000")
        .get("/api/v1/users/")

        .end((err, response) => {
          response.body.should.be.a("object");

          console.log("*********", response.body);

          done();
        });
    });
  });

  describe("GET /api/v1/users/", () => {
    it("IT SHOULD RETURN ALL THE JOBS", (done) => {
      // const task = {
      //     email:'shaangzb@gmail.com',
      //     password:'123',

      // };

      chai
        .request("http://localhost:8000")
        .get("/api/v1/users/")

        .end((err, response) => {
          response.body.should.be.a("object");

          console.log("*********", response.body);

          done();
        });
    });
  });

  describe("POST /api/v1/users/createjob", () => {
    it("IT SHOULD RETURN THE JOB", (done) => {
      const body = {
        name: "Shaan",
        managerid: "1234556",
        skills: "C,java",
        location: "Noida",
        description: "xyz",
        pay: "10",
        schedule: "10/10/10",
      };

      chai
        .request("http://localhost:8000")
        .post("/api/v1/users/createjob")
        .send({
          name: "Shaan",
          managerid: "1234556",
          skills: "C,java",
          location: "Noida",
          description: "xyz",
          pay: "10",
          schedule: "10/10/10",
        })
        .end((err, response) => {
          response.body.should.be.a("object");

          console.log("*********", response.body);

          done();
        });
    });
  });

  describe("GET /api/v1/users/search", () => {
    it("IT SHOULD RETURN THE SEARCHED JOB", (done) => {
      const body = {
        name: "Shaan",
        managerid: "1234556",
        skills: "C,java",
        location: "Noida",
        description: "xyz",
        pay: "10",
        schedule: "10/10/10",
      };

      chai
        .request("http://localhost:8000")
        .get("/api/v1/users/search/TA")
        // .send(body)
        .end((err, response) => {
          response.body.should.be.a("object");

          console.log("*********", response.body.users);

          done();
        });
    });
  });
});
