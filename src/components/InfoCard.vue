<template>
  <div class="d-flex flex-column ml-4">
    <v-card 
      v-for="item in stats" 
      :key="item.index" 
      min-width="250" 
      max-width="325" 
      class="mx-auto mb-5">
      <v-list-item class="duq-blue">
        <v-list-item-content class="off-white pb-0">
          <h3 class="text-center">{{item.title}}</h3>
          <div class="d-flex justify-space-around">
            <div class="pt-3" v-for="(type, index) in item.cases" :key=index>
              <p class="mb-0">{{type.type}}</p>
              <p>{{type.total}}</p>
            </div>
            <div class="pt-3">
              <p class="mb-0">Total</p>
              <p>{{item.total}}</p>
            </div>
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        {{item.description}}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  data: () => {
    return { 
      stats: [
        {
          title: "Current Total Active Cases",
          description: "The total number of active cases of COVID-19 infection at Duquesne University",
          total: 0,
          cases: [
            {
              type: "Student",
              total: 223
            },
            {
              type: "Employee",
              total: 131
            }
          ]
        },
        {
          title: "Total Cases to Date",
          description: "The number of COVID-19 cases that have been accounted for at Duquesne University",
          total: 0,
          cases: [
            {
              type: "Student",
              total: 3453
            },
            {
              type: "Employee",
              total: 1131
            },
          ],
        }
      ]
    }
  },
  methods: {
    updateTotals() {
      for (let each in this.stats) {
        this.stats[each].cases.forEach(el => this.stats[each].total += el.total)
      }
    }
  },
  mounted(){
    this.updateTotals();
  }

};
</script>
<style scoped>
  .duq-blue {
    background-color: #0F4D96;
  }
  .off-white {
    color: #eee;
  }
</style>