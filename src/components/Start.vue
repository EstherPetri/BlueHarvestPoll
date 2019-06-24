<template>
  <div id="app">
    <h1>Sir Vote-a-Lote</h1>
    <CreatePoll/>
    <AnswerPoll/>
    <ViewPoll/>
  </div>
</template>

<script>
import CreatePoll from "./CreatePoll";
import AnswerPoll from "./AnswerPoll";
import ViewPoll from "./ViewPoll";


export default {
  components: {
    CreatePoll,
    AnswerPoll,
    ViewPoll,
  }
};
</script>
