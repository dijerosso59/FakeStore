<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

// Définition d'une variable réactive sidebarVisible en utilisant ref(), initialement définie comme étant fausse (invisible)
const sidebarVisible = ref(false);

// Fonction toggleSidebar appelée lors du basculement de la visibilité de la barre latérale
function toggleSidebar() {
  // Inversion de la valeur de sidebarVisible en utilisant la valeur actuelle (true -> false, false -> true)
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
