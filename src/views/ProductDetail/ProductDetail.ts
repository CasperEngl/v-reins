import { Component, Vue, Watch } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import { Route } from 'vue-router';

@Component
export default class ProductDetail extends Vue {
  @Getter public products!: any[];

  public product: any = {};
  public $route!: Route;

  @Watch('products', { immediate: true })
  public onProductsChanged(value: any[], oldValue: any[]) {
    this.product = this.products.find((product) => product.id === Number(this.$route.params.id));
  }
}
