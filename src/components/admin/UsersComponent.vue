<template>
  <div class="relative h-full w-full">
    <div class="relative w-full overflow-x-hidden">
      <div
        class="main-grid bold fixed grid w-[80%] items-center justify-between bg-white p-4 text-2xl uppercase"
      >
        <input
          type="checkbox"
          name=""
          id=""
          class="h-8 w-8 text-white border-brand-light text-4xl"
        />
        <p
          v-for="(head, index) in headings"
          :key="index"
          class="flex items-center text-xl font-semibold"
        >
          <span class="block"> {{ head }}</span>
          <span class="material-icons block">arrow_drop_down</span>
        </p>
      </div>

      <div
        class="main-grid px-4 text-white"
        v-for="(user, index) in users"
        :key="index"
        :class="index % 2 === 0 ? 'bg-gray-600' : 'bg-gray-400'"
      >
        <table>
          <input
            type="checkbox"
            name=""
            id=""
            checked
            class="h-8 w-8 text-xl text-brand-dark"
          />
          <td>{{ user.first_name }} {{ user.last_name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone_number }}</td>
          <td>{{ user.designation }}</td>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const route = useRouter();
const users = ref([]);
const headings = ref(["name", "email", "location", "phone", "..."]);
onMounted(async () => {
  const { data } = await axios.get(import.meta.env.VITE_API_URL + "users");
  console.log(data.data[0]);
  if (data) users.value = data.data;
  console.log(route);
});
</script>

<style scoped>
.main-grid {
  grid-template-columns: 1fr 2fr 3fr 3fr 2fr 1fr;
}
.h3 {
  width: 100%;
}
#sort-bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

input[type="search"] {
  width: 100%;
  height: 40px;
  border: 1px solid #eaeaea;
  outline: none;
  padding: 0 10px;
}
.container {
  width: 100%;
  background-color: #f9f9f9;
  gap: 40px;
  display: flex;
  flex-direction: column;
}
.filter_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dedede;
  padding: 15px 20px;
}
.add_button {
  border: none;
  background-color: #000000;
  color: #ffffff;
  font-weight: 500;
  width: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
  width: 100%;
}

th,
td {
  text-align: left;
  padding: 16px;
  font-size: 14px;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}
.avatar {
  background-color: #2aaa0b;
  /* padding: 10px; */
  width: 100%;
  border-radius: 50%;
}
/*  */
</style>
