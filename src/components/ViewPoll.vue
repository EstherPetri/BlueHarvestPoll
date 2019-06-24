<template>
  <div class="row">
    <h2>These are the results</h2>
    <h3>{{pollName}}</h3>
    <div class="votes" v-for="(vote, index) in votes" v-bind:key="index">
      <span class="voterate">{{vote}}</span> {{answers[index]}}
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewPoll",
  props: {
    pollName: String,
    votes: Array,
    answers: Array,
  },
  methods: {
  sortVotes(a,b){
    votes=this.votes;
    return a - b;
    votes.sort(sortNumber);
    console.log(votes);
}
  }
};
</script>

<style>
.votes{
  margin-top: 20px;
}
.voterate{
  background: #ababab;
  color: white;
 padding: 5px 10px;
  border-radius: 50px;
}
</style>