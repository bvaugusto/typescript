// /<reference path="../interface/iproduct.ts" />
var App;
(function (App) {
    var Product = /** @class */ (function () {
        function Product(name, description, value) {
            this.name = name;
            this.description = description;
            this.value = value;
        }
        return Product;
    }());
    App.Product = Product;
})(App || (App = {}));
///<reference path="./src/class/product.ts" />
var App;
(function (App) {
    var product = new App.Product("Book 1", "Code Book", 99.99);
    console.log(product);
    document.getElementById("app").innerHTML = "\n        <div>\n            <ul>\n                <li>" + product.name + " - " + product.description + " - R$: " + product.value + "</li>\n            </ul>\n        </div>\n    ";
})(App || (App = {}));
