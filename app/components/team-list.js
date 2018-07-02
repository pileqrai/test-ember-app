import Component from '@ember/component';

export default Component.extend({
    classNames: ['team-list'],

    actions: {
        delete(team) {
            var res = window.confirm(`Do you want to delete team ${team.name}?`);
            if (res) {
                team.destroyRecord();
            }
        },
    },
});
