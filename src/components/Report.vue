<template>
    <div>
        <button type="button" @click="handleClick">click</button>
    </div>
    <component :is="reportView" ref="rv" />
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    import { R1Report } from '@/components/R1Service'
    import { R2Report } from '@/components/R2Service'

    const processors = [new R1Report(), new R2Report()]
    const reportView = processors[new Date().getMilliseconds() % 2].component

    interface ReportEvent {
        sayHi: () => Promise<void>
    }

    const rv = ref<ReportEvent>()

    const handleClick = async () => {
        await rv.value?.sayHi()
    }
</script>
