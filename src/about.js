function aboutLoad() {
    var content = document.getElementById('content')
    var img = document.createElement('img')
    img.src = "../assets/chopsticks.png"
    img.id = "chopsticks"
    content.appendChild(img);

    var contentWrapper = document.createElement('div')
    contentWrapper.classList.add('content-wrapper')
    content.appendChild(contentWrapper)

    var heading = document.createElement('h1')
    heading.classList.add('heading')
    heading.innerHTML = "Authentic Cuisine paired with the Freshest Ingredients"
    contentWrapper.appendChild(heading);

    var blurb = document.createElement('p')
    blurb.classList.add('blurb')
    blurb.innerHTML = "Join us on a journey of exploring taste, smell, and the ephemeral joy of sunrise. Our mission is to bring people together through a common, delicious interest, and introduce people to a refreshing, memorable experience."
    contentWrapper.appendChild(blurb)
}

export { aboutLoad }