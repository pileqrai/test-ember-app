import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr(),
    country: DS.attr(),
    rank: DS.attr('number'),
    players: DS.hasMany('player'),
});
