<template>
  <div class>
    <TimerTab></TimerTab>
    <div class="overflow-handle flex-grow-1">
      <router-view name="question"></router-view>
    </div>
    <ProblemList></ProblemList>
  </div>
</template>

<script>
import TimerTab from "@/components/TimerTab";
import ProblemList from "@/components/ProblemList";

export default {
  components: {
    TimerTab,
    ProblemList
  }
};
</script>

<style>
.overflow-handle {
  overflow-y: scroll;
  height: calc(100vh - 205px);
}
</style>
