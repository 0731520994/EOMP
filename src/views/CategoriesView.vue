
<template>
  <div>
    <nav id="navbar-example2" class="navbar bg-body-tertiary px-3 mb-3">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a class="nav-link" @click="showSection('iphones')">Iphones</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="showSection('samsung')">Samsung</a>
        </li>
      </ul>
    </nav>
    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      class="scrollspy-example bg-body-tertiary p-3 rounded-2"
      tabindex="0">
      <h4 v-if="activeSection === 'iphones'" id="scrollspyHeading1">Iphones</h4>
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        v-if="activeSection === 'iphones'">
    
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Iphone 12</h5>
        <p class="card-text">R9000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Iphone 13</h5>
        <p class="card-text">15000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">Iphone 14</h5>
        <p class="card-text">R26000</p>
      </div>
    </div>
  </div>
</div>
<div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      class="scrollspy-example bg-body-tertiary p-3 rounded-2"
      tabindex="0">
   
      <h4 v-if="activeSection === 'samsung'" id="scrollspyHeading2">Samsung</h4>
      <div
        class="row row-cols-1 row-cols-md-3 g-4"
        v-if="activeSection === 'samsung'">
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">A03</h5>
        <p class="card-text">R9000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">S23</h5>
        <p class="card-text">15000</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="" class="card-img-top" alt="">
      <div class="card-body">
        <h5 class="card-title">A40</h5>
        <p class="card-text">R26000</p>
      </div>
    </div>
      </div>
    </div>
  </div>
</div>
</div>

</template>

<script>
export default {
  name: 'CategoriesView',
  data() {
    return {
      activeSection: 'iphones', // Set the initial active section
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },
  },
};
</script>

<style >
/* Your styles here */
</style>
