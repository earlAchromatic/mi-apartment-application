<template>
  <header>
    <h1>Ionia.Apartments</h1>
    <small class="contact"
      >Get ahold of us at
      <a href="mailto:info@ionia.apartments">info@ionia.apartments</a></small
    >
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
        <li>
          <router-link class="maintenance" to="/Maintenance"
            >Maintenance Request</router-link
          >
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
    box-shadow: 2px 2px 6px #00000063
    z-index: 100
    top: 0
    display: flex
    flex-flow: row wrap
    h1
        width: 100%
        margin-bottom: 0
    nav
        width: 100%
        margin: auto
    .contact
        margin: auto
li
    list-style-type: none
    margin-right: 2rem
ul
    display: flex
    justify-content: center
.maintenance
  color: gray
</style>
