<script setup>
import {onMounted, ref} from 'vue';
import { getUsers } from '../apis/userAPI';

const users = ref([]);

onMounted(async () => {
    users.value = await getUsers();
})
</script>

<template>
<table class="table table-striped"></table>
    <thead>
        <tr>
            <th>First name</th>
            <th>Last name</th>
            <th>Email Address</th>
            <th>-</th>
        </tr>
    </thead>

    <tbody>
        <tr v-for="user in users" :key="user.id">
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.emailAdress}}</td>

            <td>
               <button class="btn btn-primary">Edit</button> 
               <button class="btn btn-danger">Delete</button> 
            </td>
        </tr>
    </tbody>
</template>

<style scoped>
body {
    margin: 0 auto;
    padding: 2rem;
    max-width: 1280px;
}
</style>
