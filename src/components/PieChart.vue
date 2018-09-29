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
    }
  },
  methods:{
    getRandomColor:function() {
      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  },
  mounted () {
    var datasets = []
    console.log(this.labels)
    console.log(this.data)
    for(var i = 0; i < this.labels.length ; i++){
      datasets.push(
        {
          label: this.labels[i],
          backgroundColor: this.getRandomColor(),
          data: [this.data[i]]
        }
      )
      
    }
    console.log(datasets)
    this.renderChart(
      {
        labels: this.labels,
        datasets: datasets,
        responsive: true, 
        maintainAspectRatio: false})
      }
  }
</script>