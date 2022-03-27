<template>
  <div class="success">
    <Card>
      <template #header>
        <img src="../assets/maintenance.jpg" alt="" />
      </template>
      <template #title>
        <h2>Thank You for your Maintenance Request.</h2>
      </template>
      <template #content>
        <span
          >We will reach out to you shortly to set up a time to address the
          issue.</span
        >
        <span>Thank you for your patience.</span>
      </template>
    </Card>
  </div>
</template>

<style lang="sass" scoped>
.success
  margin-top: 9rem
  padding:1rem
p
  text-align: left
.p-card
    max-width: 45rem
    margin: 0 auto

.p-card-content
    p
        text-align: left
h2
    margin: 0
</style>
