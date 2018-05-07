var LoginWithAmazon = require("nativescript-login-with-amazon").LoginWithAmazon;
var loginWithAmazon = new LoginWithAmazon();

describe("greet function", function() {
    it("exists", function() {
        expect(loginWithAmazon.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(loginWithAmazon.greet()).toEqual("Hello, NS");
    });
});