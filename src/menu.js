const sushi = (nomen, imgpath, ingredients) => {
    return { nomen, imgpath, ingredients }
}

var philadelphia = sushi('Philadelphia Roll', '../assets/philadelphia.png', 'Cream cheese, and shrimp, topped with Salmon')
var california = sushi('California Roll', '../assets/california.png', 'Crab meat, Eel, Cream Cheese, topped with Tobiko')
var tamago = sushi('Tamago Roll', '../assets/tamago.png', 'Salmon, Cream Cheese, and Panko, wrapped in Tamago')
var green = sushi('Green Goddess Roll', '../assets/green.png', 'Salmon, kale with Dill sprinkled on top.')

var sushiarray = [philadelphia, california, tamago, green]

function menuLoad() {
    var content = document.getElementById('content')
    var sushiContainer = document.createElement('div')
    sushiContainer.classList.add('sushi-container')
    content.appendChild(sushiContainer)

    sushiarray.forEach(function(sushi) {

        var sushiWrapper = document.createElement('div')
        sushiWrapper.classList.add('sushi-wrapper')
        sushiContainer.appendChild(sushiWrapper)

        var img = document.createElement('img')
        img.src = sushi.imgpath
        img.classList.add('sushi-img')
        sushiWrapper.appendChild(img)

        var nomen = document.createElement('h3')
        nomen.classList.add('sushi-name')
        nomen.innerHTML = sushi.nomen
        sushiWrapper.appendChild(nomen)

        var ingredients = document.createElement('p')
        ingredients.classList.add('ingredients')
        ingredients.innerHTML = sushi.ingredients
        sushiWrapper.appendChild(ingredients)

    });
};


export { menuLoad }