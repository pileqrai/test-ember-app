import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: Ember.inject.service(),
    add(player, team) {
        const newPlayer = this.store.createRecord('player', player);
        if (team) {
            newPlayer.set('team', team);
        }

        return newPlayer.save();
    }
});
