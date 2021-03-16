<template>
  <div class="worldMap">
    <div id="map" :style="{'width':width,'height':height}"></div>
  </div>
</template>

<script>
import L from 'leaflet';
import geojson from '@/assets/data/map/world.json'

export default {
  props: {
    width: {
      default:"100%"
    },
    height: {
      default:"400px"
    }
  },
  components: {
  },
  data () {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: `© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors`,
      zoom: 1,
      center: [42.74288415099323, -0.5796077887494674],
      geojson: geojson
    };
  },
  mounted() {
    console.log(L)
    for(let i in this.geojson.features) {
      this.geojson.features[i].properties.color="rgba(255, 255, 255,"+i*0.01+")"
    }
    console.log(this.geojson)
    this.drawMap()
  },
  methods: {
    drawMap() {
      let that=this 
      let map = L.map('map').setView(this.center, this.zoom);
      L.geoJson(this.geojson, {
        //style: this.myCustomStyle('#fff'),
        onEachFeature: function (feature, layer) {
          layer.setStyle(that.myCustomStyle(feature.properties.color))
          layer.on('mouseover',function() {
            this.setStyle(that.myCustomStyle('rgba(255, 255, 255,1)'));
          });
          layer.on('mouseout',function() {
            this.setStyle(that.myCustomStyle(feature.properties.color));
          });
          layer.on('click',function() {
            alert(feature.properties.name)
          });
        },
      }).addTo(map);
    },
    myCustomStyle(x) {
        return {
            stroke: false,
            fill: true,
            fillColor: x,
            fillOpacity: 1
        }
    }
  }
}
</script>