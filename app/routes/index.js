import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('http://localhost:3000/products');
        let { data } = await response.json();
        data = data.map(item => item.attributes);
        return data;
    }
}
