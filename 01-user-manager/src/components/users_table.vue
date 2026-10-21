<script setup>
import { useUserStore } from '../../store/user.js'; 

const { users, removeUser } = useUserStore();


async function handleDeleteUser(id) {

const valasz = confirm("Biztos törlöd?")

if (valasz) {
  try { 
    await removeUser(id) 
  }
  catch (error) {
    console.error("Hibás törlés!", error)
  }
  }
}

</script>

<template>
<table class="table table-striped">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email address</th>
        <th>-</th>
      </tr>
    </thead>

    <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger" @click="handleDeleteUser(user.id)">Delete</button>
          </td>
        </tr>
    </tbody>

  </table>
</template>

<style>
</style>