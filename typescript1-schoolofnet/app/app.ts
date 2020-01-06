///<reference path="./src/class/product.ts" />

module App {
    var product = new Product("Book 1", "Code Book", 99.99)

    console.log(product)

    document.getElementById("app").innerHTML = `
        <div>
            <ul>
                <li>${ product.name } - ${ product.description } - R$: ${ product.value }</li>
            </ul>
        </div>
    `
}