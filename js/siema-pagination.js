/*Elebase 4.8.70, Build 4870
May 9th 2018, 02:50am
For evaluation purposes only*/

//Siema doesn't come with pagination built in
//Add a function that generates pagination to prototype

Siema.prototype.addPagination = function (slideshowName) {
    for (let i = 0; i < this.innerElements.length; i++) {
        const slideshowButton = document.createElement('button');
        slideshowButton.id = "slideshow-button";
        slideshowButton.addEventListener('click', () => this.goTo(i));
        document.getElementById(slideshowName).appendChild(slideshowButton);     
    } 
}



