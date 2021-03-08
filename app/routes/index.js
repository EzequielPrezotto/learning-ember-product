import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        const response = await fetch('http://localhost:3000/products');
        const { data } = await response.json();
        console.log(data);
        return data;
    }
}
