modules.define('test.Shower', [
    'shower' 
], function (provide, shower) {
    
    var should = chai.should();

    describe('Shower', function () {
        it('Should be ready', function () { 
            shower.ready().should.eq(true);
        });
    });

    provide();
});