<template>
    <div>I am R1</div>
</template>

<script lang="ts" setup>
    import { sleep } from '@/components/ReportService'

    await sleep(100)

    const sayHi = () => {
        alert('hello r1')
    }

    defineExpose({
        sayHi,
    })
</script>
