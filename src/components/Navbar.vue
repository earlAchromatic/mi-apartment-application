<template>
  <header>
    <h1>439 West Washington St</h1>
    <nav>
      <ul>
        <li>
          <router-link to="/"> Go Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
        <li>
          <router-link to="/FAQ"> FAQ </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="sass" scoped>
header
    position: fixed
    width: 100%
    background: white
    box-shadow: 2px 2px 6px black
    z-index: 100
    top: 0
li
    list-style-type: none
    margin-left: 2rem
ul
    display: flex
    justify-content: center
</style>
