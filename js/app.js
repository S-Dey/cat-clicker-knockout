var ViewModel = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('Udacity')
    this.nicknames = ko.observableArray([
        { name: 'Tabtab'},
        { name: 'T-Bone'},
        { name: 'Mr. T'},
        { name: 'Tabitha Tab Tabby Catty Cat'}
        ]);

    this.title = ko.computed(function() {
        var self = this;
        var clicks = self.clickCount();
        console.log(clicks);

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

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() +1);
    };
}

ko.applyBindings(new ViewModel());