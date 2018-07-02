import {Factory, faker} from 'ember-cli-mirage';

export default Factory.extend({
    name() {
        return faker.company.companyName();
    },

    country() {
        return faker.address.country();
    },

    rank() {
        return faker.random.number();
    },
});
