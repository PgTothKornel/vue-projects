import { deleteUser, getUsers } from "../apis/userAPI.js"
import { ref } from 'vue';
const users = ref([]);

export function useUserStore() {
    async function fetchUsers() {
        users.value = await getUsers();
    }

    async function removeUser(id) {
        await deleteUser(id);
        users.value = users.value.filter((x) => x.id != id)
    }

    return {
        users, fetchUsers, removeUser
    };
}
