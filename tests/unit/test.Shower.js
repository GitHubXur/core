modules.define('test.Shower', [
    'shower',
    'Slide'
], function (provide, shower, Slide) {

    var should = chai.should();

    describe('Shower', function () {
        it('Should be ready', function () {
            shower.ready().should.eq(true);
        });

        it('Should add slide to the Shower', function () {
            var slide = new Slide('test slide');
            shower.add(slide);

            shower.getSlidesArray().indexOf(slide).should.not.eq(-1);
        });

        it('Should remove slide from the Shower', function () {
            var slide = new Slide('test slide');
            shower.add(slide);
            shower.getSlidesArray().indexOf(slide).should.not.eq(-1);

            shower.remove(slide);
            shower.getSlidesArray().indexOf(slide).should.eq(-1);
        });

        it('Should get slide by the index', function () {
            var slide = new Slide('test slide'),
                slidesCount = shower.getSlidesCount();

            shower.add(slide);

            // slidesCount == last index + 1
            shower.get(slidesCount).should.eq(slide);
        });

        it('Should change count of slides after add', function () {
            var slide = new Slide('test slide'),
                oldCount = shower.getSlidesCount();

            shower.add(slide);
            shower.getSlidesCount().should.eq(oldCount + 1);
        });
    });

    provide();
});