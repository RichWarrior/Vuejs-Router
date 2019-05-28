<template>
    <div>
        <h1>Hello Guy</h1>
        <p>{{this.$route.params.id}}</p>
    </div>
</template>

<script>
export default {
    name :'Profile'
}
</script>