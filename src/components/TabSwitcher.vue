<script setup lang="ts">
import { useStore } from 'vuex';

const store = useStore();

const setTab = (tab: string) => {
    store.state.currentTabComponent = tab;
};
</script>

<template>
    <div>
        <button @click="setTab('Posts')">Posts</button>
        <button @click="setTab('Users')">Users</button>
    </div>
</template>

<style scoped></style>
