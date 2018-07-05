import Service, {inject} from '@ember/service';
import Ember from 'ember';

export default Service.extend({
    store: inject.service(),
    add(player, team) {
        const newPlayer = this.store.createRecord('player', player);
        if (team) {
            newPlayer.set('team', team);
        }

        return newPlayer.save();
    }
});
