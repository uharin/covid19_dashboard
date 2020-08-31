<template>
  <v-app >
    <v-container class="wrapper">
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
  h1 {
      background-color: #D5454F;
      color: #fff;
    }
  .box {
    box-shadow: 
      0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .p-info {
    box-shadow: 
      0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .wrapper {
    width:980px;
    min-width:900px;
  }
</style>
