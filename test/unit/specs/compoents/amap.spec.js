import Vue from 'vue';

describe('AMap.Map', function() {

  describe('#plugin', () => {
    it('should init plugin', done => {
      (new Vue({
        template: `
          <el-amap :plugin="plugin"></el-amap>
        `,
        data() {
          return {
            plugin: [{
              pName: 'MapType',
              defaultType: 0,
              events: {
                init(pluginInstance) {
                  expect(pluginInstance instanceof AMap.MapType).to.true;
                  done();
                }
              }
            }]
          };
        }
      })).$mount();
    });
  });

  describe('#init-instance', function() {
    it('should init amap instance', (done) => {
      (new Vue({
        template: `
        <div :style="{height:'100px'}">
          <el-amap :events="events">
          </el-amap>
        </div>
        `,
        data() {
          let center = [116.397428, 39.90923];
          return {
            center,
            zoom: 12,
            events: {
              init: (instance) => {
                expect(instance instanceof window.AMap.Map).to.true;
                console.log(instance.getCenter());
                done();
              }
            }
          };
        }
      })).$mount();
    });
  });

  describe('#event', function() {
    it('should get map instance from manager', done => {
      (new Vue({
        template: `<el-amap
        vid="vid"
        :events="events"
      ></el-amap>`,
        data() {
          return {
            vid: 'vid',
            events: {
              init: (instance) => {
                done();
              }
            }
          };
        }
      })).$mount();
    });
  });
});
