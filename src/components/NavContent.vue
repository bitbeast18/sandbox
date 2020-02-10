<template>
    <div class="">
        <TimerTab></TimerTab>
        <div class="overflow-handle">
        <ProblemDesc class="flex-grow-1"></ProblemDesc>
        </div>
        <ProblemList></ProblemList>
    </div>
</template>

<script>

import TimerTab from '@/components/TimerTab';
import ProblemDesc from '@/components/ProblemDesc';
import ProblemList from '@/components/ProblemList';

export default {
    components: {
        TimerTab,
        ProblemDesc,
        ProblemList
    }
}
</script>

<style>
    .overflow-handle{
        overflow-y: scroll;
    }
</style>