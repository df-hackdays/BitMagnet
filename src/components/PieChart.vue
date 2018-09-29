<script>
import {Pie} from 'vue-chartjs'

export default {
  extends: Pie,
  props:{
    labels:{
      type: Array | Object,
      required: false,
    },
    data:{
      type: Array | Object,
      required: false,
    }
  },
  data () {
    return {
      datacollection: {
        labels: this.labels,
        datasets: [
          {
            label: 'User Data',
            backgroundColor: '#f87979',
            data: this.data
          }
        ]
      }
    }
  },
  mounted () {
  
    this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
  }
}
</script>