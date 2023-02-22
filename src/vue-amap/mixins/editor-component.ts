import {defineComponent} from "vue";
import {convertEventToLowerCase, eventReg, eventHelper} from "@vuemap/vue-amap-util";

export default defineComponent({
  props: {
    editable: {
      type: Boolean,
      default: false
    },
    editOptions: {
      type: Object
    }
  },
  data() {
    return {
    };
  },
  methods: {
    setEditorEvents() {
      if (!this.$amapComponent.editor) return;
      const filters = ['addnode', 'adjust', 'removenode', 'end', 'move', 'add'];
      const filterSet = {};
      Object.keys(this.$attrs).forEach(key => {
        if(eventReg.test(key)){
          const eventKey = convertEventToLowerCase(key);
          if (filters.indexOf(eventKey) !== -1) filterSet[eventKey] = this.$attrs[key];
        }

      });
      Object.keys(filterSet).forEach(key => {
        eventHelper.addListener(this.$amapComponent.editor, key, filterSet[key]);
      });
    }
  }
});
