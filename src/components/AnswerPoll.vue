<template>
  <div id="AnswerPoll">
    <h2>Answer the question</h2>
    <h3>{{pollName}}</h3>
    <span class="counter">Vote as much as you want!</span>
    <div v-if="answers.length>=2 && pollName.length>1">
      <ul>
      <li v-for="(answer, index) of answers" v-bind:key="answer">
        <label>
        <input type="checkbox" :checked="false" v-model="votes" :value="index">
        <span>{{answer}}</span></label>
      </li>
      </ul>
    </div>

    <button  v-bind:class="['vote-button', answers.length>1 && pollName.length>1?'show':'hide']"@click="vote()">VOTE</button>
  </div>
</template>
<script>
export default {
  name: "answerPoll",
  props: {
    pollName: String,
    answers: Array
  },
  data() {
    return {
      votes: [],
      voteList: [],
      answerLength: Number
    };
  },
  updated: function() {
    // Only reset array if new question is added
    if (this.answerLength !== this.answers.length) {
      this.voteList = new Array(this.answers.length).fill(0);
      // consequence is all answers get reset as well, accepted because otherwise need a match with previous answer array.
      // this brings in a lot of other problems (old question gets different questions votes) thus probably need a 3D array.
      // because of that decided whenever a poll gets updated, we'll start from blanq.
    }
    this.answerLength = this.answers.length;
  },
  methods: {
    vote: function() {
      for (let i = 0; i < this.votes.length; i++) {
        // In case of multiple answers in 1 'vote', used $set because of Vue/Array updating issue.
        this.$set(this.voteList, this.votes[i], this.voteList[this.votes[i]] + 1);
      }
      this.$emit("votes", this.voteList);
    }
  }
};
</script>

<style lang="scss">
#AnswerPoll li:hover{
  background-color: #e4ffdc;
  span:hover{
    cursor: pointer;
  }
}
</style>