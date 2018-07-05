export default function(server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    // server.createList('post', 10);
    const teams = server.createList('team', 10);

    teams.forEach((team) => {
        const players = server.createList('player', 5);
        team.players = players;
        team.save();
    });

    return server;
}
