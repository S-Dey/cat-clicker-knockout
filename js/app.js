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

    this.currentCat = ko.observable( new Cat({
        clickCount: 0,
        name: 'Tabby',
        imgSrc: 'img/434164568_fea0ad4013_z.jpg',
        imgAttribution: 'Udacity',
        nicknames: ['Tabtab', 'T-Bone', 'Mr. T', 'Tabitha Tab Tabby Catty Cat']
    }) );

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
    };
};

ko.applyBindings(new ViewModel());