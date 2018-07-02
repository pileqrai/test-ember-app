import Controller from '@ember/controller';

export default Controller.extend({
    searchString: null,
    actions: {
        search() {
            this.store.query('team', {
                name: this.get('searchString'),
            }).then((res)=> {
                this.set('teams', res);
            });
        }
    }
});
