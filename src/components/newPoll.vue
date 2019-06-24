<template>
  <div id="newPoll">
    <h2>Create your poll</h2>
    <input
      class="input is-medium"
      v-model="pollName"
      type="text"
      @keyup.enter="namePoll"
      placeholder="Type Your Question"
    >
    <button class="add-title" @click="namePoll">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 42 42"
        style="enable-background:new 0 0 42 42;"
        xml:space="preserve"
        width="10px"
        height="10px"
        class
      >
        <g>
          <path
            d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059  C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"
            data-original="#000000"
            class="active-path"
            data-old_color="#ffffff"
            fill="#ffffff"
          ></path>
        </g>
      </svg>
    </button>
    <span class="counter">Don't forget to add a question and at least 2 answer options</span>
    <ul>
      <li class="answer" v-for="(answer, index) of answers" v-bind:key="answer">
        {{answer}}
        <a class="delete" @click="deleteAnswer(index, 1)"></a>
      </li>
    </ul>

    <span v-if="answers.length<10">
      <input
        class="input is-small"
        v-model="newAnswer"
        tupdateMessageype="text"
        placeholder="Type an answer"
        @keyup.enter="createNew(newAnswer)"
      >

      <button class="inline" @click="createNew(newAnswer)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          viewBox="0 0 42 42"
          style="enable-background:new 0 0 42 42;"
          xml:space="preserve"
          width="10px"
          height="10px"
          class
        >
          <g>
            <path
              d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059  C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"
              data-original="#000000"
              class="active-path"
              data-old_color="#ffffff"
              fill="#ffffff"
            ></path>
          </g>
        </svg>
      </button>
    </span>

    <!-- <button>RESET</button> Should return to initial state outside of component -->

    <div class="counter">You created {{answers.length}}/10 options</div>
  </div>
</template>

<script>
export default {
  name: "newPoll",
  data() {
    return {
      pollName: "",
      newAnswer: "",
      answers: []
    };
  },
  methods: {
    namePoll: function() {
      this.$emit("inputData", this.pollName);
    },
    deleteAnswer(index) {
      this.answers.splice(index, 1);
      this.$emit("update", this.answers);
    },
    createNew(newAnswer) {
      if (this.newAnswer.length < 1 || this.newAnswer.length > 80) {
        alert("You do have to fill in something (but not longer than 80 chars)");
      } else {
        this.answers.push(newAnswer);
        this.newAnswer = "";
        this.$emit("update", this.answers);
      }
    }
  }
};
</script>

<style lang="scss">
.polltitle {
  font-size: 30px;
  display: block;
}

.is-medium.input,
input.input.is-small {
  width: 80%;
  height: 40px;
}

.answer {
  display: block;
  width: 75%;
}
.delete {
  float: right;
}
.counter {
  font-size: 10px;
  margin-top: 20px;
}

.pollanswers {
  width: 30em;
  a {
    float: right;
  }
}
</style>
