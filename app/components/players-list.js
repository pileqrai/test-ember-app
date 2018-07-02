import Component from '@ember/component';

export default Component.extend({
    actions: {
        save(player) {
            player.save();
        },
        cancel(player) {
            player.rollbackAttributes();
        },
        delete(player) {
            player.destroyRecord();
        },
    }
});
