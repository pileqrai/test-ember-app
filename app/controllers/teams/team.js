import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    isSaving: false,
    newPlayer: {},
    playerService: service('player'),
    actions: {
        save() {
            this.model.set('name', this.newName)
            this.model.save();
        },
        cancel() {
            if (this.model.hasDirtyAttributes) this.model.rollbackAttributes();
        },
        addPlayer() {
            this.playerService.add(this.get('newPlayer'), this.model).then(() => {
                this.set('newPlayer' ,{});
                this.model.reload();
            });
        }
    },

});
