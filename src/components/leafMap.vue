<template>
<l-map style="height: 350px" :zoom="zoom" :center="center" @click="getName">
<l-tile-layer :url="url"></l-tile-layer>
</l-map>
</template>

<script>
import {LMap, LTileLayer} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
  },
  data () {
    return {
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      zoom: 1,
      center: [47.313220, -1.319482],
    };
  },
  computed: {
    options() {
      return {
        onEachFeature: this.onEachFeatureFunction
      };
    },
    onEachFeatureFunction() {
      return (feature, layer) => {
        layer.bindTooltip(
          "<div>code:" +feature.properties.name+
            "</div>",
          { permanent: false, sticky: true }
        )
        layer.on('click',()=> {
          console.log(feature.properties.name)
        })
      };
    }
  },
  methods: {
    getName(e) {
      console.log(e)
    }
  }
}
</script>