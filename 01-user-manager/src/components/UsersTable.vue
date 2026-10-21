<script setup>
import { useUserStore } from '../../store/user.js'; 
import UserModal from './UserModal.vue';

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
            <button type="button"
            class="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#editUserModal">Edit</button>
            <button class="btn btn-danger" @click="handleDeleteUser(user.id)">Delete</button>
          </td>
        </tr>
    </tbody>

  </table>

  <UserModal/>
</template>

<style>
</style>