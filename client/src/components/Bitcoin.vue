<template>
  <div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Dataset 1',
          backgroundColor: '#f87979',
          data: [40, 20, 60, 70, 80, 10, 30]
        },
        {
          label: 'Dataset 2',
          backgroundColor: '#5bc0de',
          data: [10, 20, 30, 40, 50, 60, 70]
        },
        {
          label: 'Dataset 3',
          backgroundColor: '#5cb85c',
          data: [70, 60, 50, 40, 30, 20, 10]
        },
        {
          label: 'Dataset 4',
          backgroundColor: '#d9534f',
          data: [30, 40, 10, 20, 50, 70, 60]
        }
      ]
    }, { responsive: true, maintainAspectRatio: false })
  }
}
</script>





