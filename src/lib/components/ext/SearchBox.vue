<template>
  <div class="el-vue-search-box-container" v-show="visible">
      <input :id="saveInputId" type="text" />
  </div>
</template>
<script>
import RegisterComponentMixin from '../../mixins/register-component';
import guid from '@/utils/guid';
export default {
  name: 'el-amap-search-box',
  mixins: [RegisterComponentMixin],
  props: {
    type: {
      type: String
    },
    city: {
      type: String
    },
    datatype: {
      type: String
    },
    citylimit: {
      type: Boolean
    },
    inputId: {
      type: String
    },
    outputId: {
      type: String
    },
    outPutDirAuto: {
      type: Boolean
    },
    closeResultOnScroll: {
      type: Boolean
    },
    lang: {
      type: String
    }
  },
  data() {
    const _this = this;
    return {
      saveInputId: '',
      handlers: {
        citylimit(flag) {
          this.setCityLimit(flag);
        },
        visible(flag) {
          _this.visible = flag;
        }
      }
    };
  },
  created() {
    this.saveInputId = guid();
  },
  mounted() {
  },
  methods: {
    __initComponent(options) {
      if (options.inputId) {
        this.saveInputId = options.inputId;
        delete options.inputId;
      }
      options.input = this.saveInputId;
      if (options.outputId) {
        options.output = options.outputId;
        delete options.outputId;
      }
      return new Promise((resolve) => {
        this.$parentComponent.plugin(['AMap.AutoComplete'], () => {
          this.$amapComponent = new AMap.AutoComplete(options);
        });
        resolve();
      });
    }
  }
};
</script>
<style lang="less">
.el-vue-search-box-container {
  position: absolute;
  left: 16px;
  top: 16px;
  z-index: 10;
  width: 360px;
  height: 45px;
  background: #fff;
  box-shadow: 0 2px 2px rgba(0,0,0,.15);
  border-radius: 2px 3px 3px 2px;

  input {
    height: 100%;
    width: 100%;
    line-height: 45px;
    letter-spacing: .5px;
    font-size: 14px;
    text-indent: 10px;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

}
</style>
