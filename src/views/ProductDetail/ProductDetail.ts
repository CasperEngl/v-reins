import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Route } from 'vue-router';

export interface ProductData {
  product_id: number;
  quantity: number;
  variation_id?: number;
  variation?: any[];
}

@Component
export default class ProductDetail extends Vue {
  @Getter public products!: any[];
  @Action public addToCart!: Promise<any>;

  public product: any = {};
  public quantity: number = 1;
  public $route!: Route;

  @Watch('products', { immediate: true })
  public onProductsChanged(value: any[], oldValue: any[]) {
    this.product = this.products.find((product) => product.id === Number(this.$route.params.id));
  }

  public clickAddToCart({ product_id }: ProductData) {
    this.addToCart({
      product_id,
      quantity: this.quantity,
    });
  }
}
