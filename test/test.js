var expect = require("chai").expect;
var request = require("request");

describe("GET /test", function () {
  const url = "http://localhost:3000/test?user_name=John";

  it("should return status 200", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("should return 'Hello John!'", function (done) {
    request(url, function (error, response, body) {
      expect(body).to.equal("Hello John!");
      done();
    });
  });
});

// describe("POST /api/cat", function () {
//   const url = "http://localhost:3000/api/cat";

//   it("should return status 201 and success message", function (done) {
//     const cat = {
//       title: "asdasd",
//       subTitle: "asdasd",
//       path: "adsasd",
//       description: "adsasd",
//     };

//     request.post(
//       {
//         url: url,
//         body: cat,
//         json: true,
//       },
//       function (error, response, body) {
//         expect(response.statusCode).to.equal(201);
//         expect(body).to.eql({ statusCode: 201, data: {}, message: "success" });
//         done();
//       }
//     );
//   });
// });

describe("GET /api/projects", function () {
  const url = "http://localhost:3000/api/projects";

  it("should return status 200 and all cats", function (done) {
    request(url, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      const jsonResponse = JSON.parse(body);
      expect(jsonResponse.statusCode).to.equal(200);
      expect(jsonResponse.message).to.equal("get all cats successful");
      expect(jsonResponse.data).to.be.an("array");
      done();
    });
  });
});
