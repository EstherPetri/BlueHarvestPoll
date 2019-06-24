<template>
  <div id="app">
    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
    Miss Votes-A-Lot</h1>
    </div>
  </div>
</section>
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="box">
            <newPoll @inputData="updateMessage" @update="updateAnswers"/>
          </div></div>
          <div class="column">
            <div class="box">
            <AnswerPoll :pollName="pollName" :answers="answers" @votes="updateVotes"/>
          </div></div>
          <div class="column">
            <div class="box">
            <ViewPoll :pollName="pollName" :answers="answers" :votes="votes"/>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AnswerPoll from "./components/AnswerPoll.vue";
import ViewPoll from "./components/ViewPoll.vue";
import NewPoll from "./components/newPoll.vue";
import Navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    NewPoll,
    AnswerPoll,
    ViewPoll,
    Navbar
  },
  data: function() {
    return {
      pollName: "",
      answers: [],
      votes: []
    };
  },
  methods: {
    updateMessage(variable) {
      this.pollName = variable;
    },
    updateAnswers(variable) {
      this.answers = variable;
    },
    updateVotes(variable) {
      this.votes = variable;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  background: #f5f5f5;
}
.hero.is-primary{
  background: #e91063;
  margin-bottom: 50px;
  box-shadow: 1px 1px 5px #f2f2f2;
  .hero-body{
    padding: 2em 1em 1em;
  }
}

.box{
  min-height: 500px;
  margin-bottom: 20px;
}

@media screen and (max-width: 1024px){
  html, body{
    height: 200%;
  }
}
</style>
