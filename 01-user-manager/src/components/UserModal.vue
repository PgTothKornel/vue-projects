<script setup>
import { ref } from 'vue'

import { useUserStore } from '../../store/user.js'; 

const { modifyUser } = useUserStore();


const ertek = ref("")

</script>

<template>
  <div class="modal fade" id="editUserModal" tabindex="-1" aria-labelledby="editUserModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="editUserModal">Változtatás megerősítése</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="ertek">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Mégse</button>
        <button type="button" class="btn btn-primary" @click="modifyUser(id, ertek)">Mentés</button>
      </div>
    </div>
  </div>
</div>
</template>

<style></style>