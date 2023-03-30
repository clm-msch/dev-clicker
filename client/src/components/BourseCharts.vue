<template>
	<div id="line-chart" style="width: 600px; height: 400px"></div>
</template>

<script>
import * as echarts from "echarts"

export default {
  mounted() {
    setTimeout(() => {
      const chart = echarts.init(document.getElementById("line-chart"))

      chart.setOption({
        xAxis: {
          type: 'category',
          data: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre'],
        },
        yAxis: {
          type: 'value',
        },
				title: {
				text: "Liste de tes actions",
				left: "center",
				textStyle: {
					color: "#444",
					fontSize: 16,
				},
			},
			tooltip: {
				trigger: "item",
				formatter: "{b}: {c} €",
			},
			legend: {
				orient: "horizontal",
				bottom: "bottom",
				data: ["MRS", "UTO", "CRA", "DWRK"],
			},
        series: [
					{
          name: 'MRS',
          data: [12, 19, 3, 5, 2, 3, 7, 6, 4, 8],
          type: 'line',
					color: ['#F8687C'],
        },
        {
          name: 'UTO',
          data: [5, 12, 8, 10, 6, 7, 3, 4, 2, 1],
          type: 'line',
					color: ['#68F5AA'],
        },
        {
          name: 'CRA',
          data: [8, 4, 12, 6, 9, 10, 11, 6, 7, 8],
          type: 'line',
					color: ['#FFF482'],
        },
				{
          name: 'DWRK',
          data: [2, 6, 1, 6, 9, 6, 17, 18, 19, 20],
          type: 'line',
					color: ['#9E89F3'],
        },
        ],
      });
      chart.resize(); // Redimensionner le graphique en cas de changement de taille de l'élément DOM parent
    }, 0);
  },
};
</script>