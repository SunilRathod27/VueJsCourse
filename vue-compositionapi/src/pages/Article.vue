<template>
    <div>
        <div>Article Page</div>
        <div>Article id : {{ id }}</div>

        <div>
            <router-link to="/article/Demo"
                >Go to Demo article</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    setup() {},
};
</script>
