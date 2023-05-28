<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const sidebarVisible = ref(false);

function toggleSidebar() {
  sidebarVisible.value = !sidebarVisible.value;
}
</script>

<template>
  <header>
    <nav :class="{ active: sidebarVisible }">
      <div class="button">
        <button
          class="menu-toggle"
          aria-controls="primary-menu"
          aria-expanded="false"
          @click="toggleSidebar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div class="menu">
        <RouterLink to="/">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="125"
            height="125"
          />
        </RouterLink>

        <div>
          <ul>
            <li>
              <RouterLink to="/">Dashboard</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Products management</RouterLink>
            </li>
            <li>
              <RouterLink to="/">Employees management</RouterLink>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <RouterLink to="/">Logout</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
