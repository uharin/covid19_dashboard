<template>
  <v-app >
    <v-container class="d-flex flex-column mx-auto" style="maxWidth: 980px;">
      <CasePanel/>
      <TestingPanel/>
      <IsolationPanel/>
    </v-container>
  </v-app>
</template>

<script>
  import CasePanel from './components/panels/CasePanel';
  import TestingPanel from './components/panels/TestingPanel';
  import IsolationPanel from './components/panels/IsolationPanel';

  export default {
    name: "App",
    components: {
      CasePanel,
      IsolationPanel,
      TestingPanel
    },
    data() {
      return { 
      }
    }
  };
</script>

<style>

</style>
