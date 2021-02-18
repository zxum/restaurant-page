function contactLoad() {
    var content = document.getElementById('content')
    var img = document.createElement('img')
    img.src = "https://raw.githubusercontent.com/zxum/restaurant-page/master/assets/wave.png"
    img.id = "wave"
    content.appendChild(img);

    var contentWrapper = document.createElement('div')
    contentWrapper.classList.add('content-wrapper')
    content.appendChild(contentWrapper)

    // Location 
    var heading = document.createElement('h1')
    heading.classList.add('heading')
    heading.innerHTML = "Location"
    contentWrapper.appendChild(heading);

    // Address
    var blurb = document.createElement('p')
    blurb.classList.add('blurb')
    blurb.innerHTML = "7230 Bow Ridge Ave.<br>Fort Worth, TX 76137"
    contentWrapper.appendChild(blurb)

    // Call Us
    var callUs = document.createElement('h1')
    callUs.classList.add('heading')
    callUs.innerHTML = "Call Us"
    contentWrapper.appendChild(callUs);

    // Phone Number
    var phone = document.createElement('p')
    phone.classList.add('blurb')
    phone.innerHTML = "(123) 456-7890"
    contentWrapper.appendChild(phone)
}

export { contactLoad }