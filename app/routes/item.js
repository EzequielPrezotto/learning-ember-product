import Route from '@ember/routing/route';
import { products } from '../data/products';

export default class ItemRoute extends Route {
  async model(params) {
    const { item_id } = params;

    const response = await fetch('http://localhost:3000/products');
    let { data } = await response.json();
    data = data.map(item => item.attributes);


    // const product = products.find(({ id }) => id === item_id);
    // const product = products.find(prod => prod.id === item_id);
    return data;
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.color = model.colors[0].color;
  }
}
