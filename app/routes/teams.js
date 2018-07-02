import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('team');
    },

    setupController(controller, model) {
        // Call _super for default behavior
        this._super(controller, model);
        controller.set('teams', model);
    }
});
