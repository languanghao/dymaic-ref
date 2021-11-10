<template>
    <div>I am R2</div>
</template>

<script lang="ts" setup>
    import { sleep } from '@/components/ReportService'

    await sleep(100)

    const sayHi = () => {
        alert('hello r2')
    }

    defineExpose({
        sayHi,
    })
</script>
