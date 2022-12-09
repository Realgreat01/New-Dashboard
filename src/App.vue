<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap');


#app {
  margin: 0;
  font-family: 'Inter', sans-serif;
  color: #404040;
}

* {
  margin: 0;
  max-width: 1440px;
  margin: 0 auto;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.active a {
    color: #1e9600;
    font-weight: 700 !important;
}

.active {
    background: linear-gradient(135deg, #f9f9f9 0%, #f9f9f9 100%);
    color: #2AAA0B !important;
}

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

; */
/* } */
</style>
