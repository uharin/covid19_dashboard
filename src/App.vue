<template>
  <v-app>
    <v-container fluid class="wrapper pa-0 ma-0 mx-auto">
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
  };
</script>

<style>
  h1 {
      background-color: #bdc3c7;
      color: #fff;
      text-shadow: 1px 1px #4d4c4ca4;
    }
  .box {
    box-shadow: 
      0px 3px 1px -2px rgba(0, 0, 0, 0.2), 
      0px 2px 2px 0px rgba(0, 0, 0, 0.14), 
      0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  }
  .wrapper {
    width:850px;
  }
  .off-white {
    color: #eee;
  }
</style>
