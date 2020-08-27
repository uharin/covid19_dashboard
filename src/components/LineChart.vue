<script>
	import { Line, mixins } from 'vue-chartjs'

	export default {
		extends: Line,
		mixins: [mixins.reactiveProp],
		props: ['options'],
		
		mounted () {
			// const dates = this.chartData.map(d => d.date).reverse();
			// const totals = this.chartData.map(d => d.total).reverse();
			this.renderChart(this.chartData, this.options);
		}
	}
</script>