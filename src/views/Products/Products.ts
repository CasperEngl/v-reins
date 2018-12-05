import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  name: 'app-products',
  components: {},
  props: [],
  computed: {
    ...mapState([
      'products',
    ]),
  },
  methods: {},
})
export default class Home extends Vue {}
