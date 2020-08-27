<template>
  <v-container class="d-flex pa-2">
    <v-card 
      v-for="item in statistics" 
      :key="item.index" 
      min-width="250" 
      max-width="400" 
      class="mx-auto ml-5">
      <v-list-item class="dark-red">
        <v-list-item-content class="off-white">
          <v-list-item-title class="headline">{{item.title}}</v-list-item-title>
          <p class="display-3 text-center pt-3 font-weight-medium">{{item.total}}</p>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        {{item.description}}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "InfoCard",
  data: () => {
    return { 
      statistics: [{
        title: "Hospitalizations",
        total: 523,
        description: "The number of COVID19 cases that are currently hospitalized in the state of Pennsylvania"
        // total: hospitalizedCurrently,
      },
      {
        title: "Deaths",
        total: 1433,
        description: "The total number of fatalities in the state of Pennsylvania that were the result of COVID19 infection"
        // total: death
      },
      {
        title: "Cases",
        total: 613,
        description: "The number of COVID19 cases that are currently accounted for in the state of Pennsylvania"
        // positive: positive,
        // negative: negative
      }]
    }
  }
};
</script>
<style scoped>
  .dark-red {
    background-color: #b33939;
  }
  .off-white {
    color: #eee;
  }
</style>