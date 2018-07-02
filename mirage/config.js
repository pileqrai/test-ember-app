export default function() {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).

      Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:

      this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');

      http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
    this.namespace = '/api';
    this.timing = 500;

    this.get('/teams', (schema, request) => {
        console.error('request', request);
        return request.queryParams.name ? schema.teams.where((team) =>
                team.name.toLowerCase().includes(request.queryParams.name))
            : schema.teams.all();
    });
    this.get('/teams/:id');
    this.del('/teams/:id');
    this.post('/teams');
    this.get('/players/:id');
    this.del('/players/:id');
    this.patch('/players/:id');
    this.post('/players');
}
