<template>
  <div class="small">
    <line-chart :style="{'height':'200px'}" :chart-data="datacollection" :options="options"></line-chart>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        options:{
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontColor: '#fff',
              fontFamily:'Montserrat'
            }
          },
          scales: {
             yAxes: [{
               ticks: {
                  fontColor: '#fff',
                  fontFamily:'Montserrat'
               }
             }],
             xAxes: [{
               ticks: {
                  fontColor: '#fff',
                  fontFamily:'Montserrat'
               }
             }]
          }
        },
        datacollection: {}
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: [this.getRandomInt(), this.getRandomInt()],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: 'rgba(255,255,255,0.1)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()]
            }, {
              label: 'Data One',
              backgroundColor: 'rgba(255,255,255,0.1)',
              data: [this.getRandomInt(), this.getRandomInt(),this.getRandomInt(),this.getRandomInt(),this.getRandomInt()]
            }
          ]
        }
      },
      getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
      }
    }
  }
</script>