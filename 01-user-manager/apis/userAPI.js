import apiClient from "../utils/apiClients.js";

const urlFragment = "users";

export async function getUsers() {
    const response = await apiClient.get(urlFragment);
    return response.data;
}

export async function deleteUser(id) {
    const response = await apiClient.delete(`${urlFragment}/${id}`);
    return response.data;
}