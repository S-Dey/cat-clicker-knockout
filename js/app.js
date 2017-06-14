var initialCats = [
    {
        clickCount: 0,
        name : 'Slim',
        imgSrc : 'img/cat1.jpg',
        imgAttribution: 'Udacity',
        nicknames: ['Skinny']
    },
    {
        clickCount: 0,
        name : 'Shady',
        imgSrc : 'img/cat2.jpg',
        imgAttribution: 'Udacity',
        nicknames: ['Shadow']
    },
    {
        clickCount: 0,
        name : 'Peabody',
        imgSrc : 'img/cat3.jpg',
        imgAttribution: 'Udacity',
        nicknames: ['Posh']
    },
    {
        clickCount: 0,
        name : 'Zlatan',
        imgSrc : 'img/cat4.jpg',
        imgAttribution: 'Udacity',
        nicknames: ['King']
    },
    {
        clickCount: 0,
        name : 'Krish',
        imgSrc : 'img/cat5.jpg',
        imgAttribution: 'Chelsea',
        nicknames: ['Kush']
    }
];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.imgAttribution = ko.observable(data.imgAttribution);
    this.nicknames = ko.observableArray(data.nicknames);

    this.title = ko.computed(function() {
        var self = this;
        var clicks = self.clickCount();

        if(clicks < 10) {
            title = 'Newborn';
        } else if (clicks < 10) {
            title = 'Infant';
        } else if (clicks < 25) {
            title = 'Teen'
        } else if (clicks < 50) {
            title = 'Young Adult'
        } else if (clicks < 75) {
            title = 'Adult'
        } else {
            title = 'Pensioner'
        }
        return title;
    }, this);
}

var ViewModel = function () {
    var self = this;

    this.catList = ko.observableArray([]);

    initialCats.forEach(function(catItem) {
        self.catList.push( new Cat(catItem) );
    });

    this.currentCat = ko.observable( this.catList()[0] );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
    };

    this.setCat = function(clickedCat) {
        self.currentCat(clickedCat)
    }
};

ko.applyBindings(new ViewModel());