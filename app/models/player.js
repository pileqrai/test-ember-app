import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
    firstName: DS.attr(),
    lastName: DS.attr(),

    displayName: computed('firstName', 'lastName', function() {
        return `${this.get('lastName')}, ${this.get('firstName')}`
    }),

    team: DS.belongsTo('team'),
});
