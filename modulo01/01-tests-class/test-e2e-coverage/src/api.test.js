const { describe, it, after, before } = require("mocha");
const supertest = require("supertest");
const { DEFAULT_USER, DEFAULT_WRONG_USER } = require("./utils/constants/general");
const assert = require("assert");

describe("API Suit Test", function () {
    let app;

    before((done) => {
        app = require("./api");
        app.once("listening", done);
    });

    after((done) => app.close(done));

    describe("Test route API", function () {
        describe("/contact:get", function () {
            it("should request the contact page and return HTTP Status 200", async () => {
                const response = await supertest(app)
                    .get("/contact")
                    .expect(200);

                assert.strictEqual(response.text, "contact us page");
            });
        });

        describe("/404:get", function () {
            it("should request an existing page and return HTTP Status 404", async () => {
                const response = await supertest(app)
                    .get("/404")
                    .expect(404);

                assert.strictEqual(response.text, "not found!");
            });
        });

        describe("/login:post", function () {
            it("should request the login and return HTTP Status 200", async () => {
                const response = await supertest(app)
                    .post("/login")
                    .send(DEFAULT_USER)
                    .expect(200);

                assert.strictEqual(response.text, "Log in succeded!");
            });
        });

        describe("/login:post", function () {
            it("should request the login and return HTTP Status 401", async () => {
                const response = await supertest(app)
                    .post("/login")
                    .send(DEFAULT_WRONG_USER)
                    .expect(401);

                assert.ok(response.unauthorized)
                assert.strictEqual(response.text, "Log in failed!");
            });
        });
    });
});
