<script>
import registerMixin from '../../mixins/register-component';

export default {
  name: 'el-amap-mass-marks',
  mixins: [registerMixin],
  props: {
    data: {
      type: Array,
      required: true
    }, // 海量点数据参数
    zooms: {
      type: Array
    }, // 点标记显示的层级范围，超过范围不显示。
    cursor: {
      type: String
    }, // 指定鼠标悬停时的鼠，默认值：'pointer'
    styles: {
      type: [Array, Object]
    } // 样式
  },
  data() {
    return {
      propsRedirect: {
        styles: 'style'
      },
      converters: {
      },
      handlers: {
      }
    };
  },
  created() {
  },
  methods: {
    __initComponent(options) {
      let data = options.data;
      delete options.data;
      this.$amapComponent = new AMap.MassMarks(data, options);
      this.$amapComponent.setMap(this.$parentComponent);
    },
    destroyComponent() {
      this.$amapComponent.clear();
      this.$amapComponent.setMap(null);
      this.$amapComponent = null;
    }
  },
  render() {
    return null;
  },
  destroyed() {
  }
};
</script>
