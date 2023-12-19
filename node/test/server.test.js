const chai = require("chai");
const supertest = require("supertest");
const server = require("../server"); // Import the server

const expect = chai.expect;

describe("Server Configuration", () => {
  it('should respond with "Hello World" for GET /test', async () => {
    const response = await supertest(server).get("/test"); // Use the server from server.js

    expect(response.status).to.equal(200);
    expect(response.text).to.equal("<h1>Hello World</h1>");
  });

  // Add more test cases to validate your server configuration
});
