import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import {action} from '@ember/object';

export default class ProductComponent extends Component {
  // productImage = this.args.product.colors[0].image;
  @tracked number = 0;

  @action
  addNumber() {
    this.number = this.number + 1;
  }

}
