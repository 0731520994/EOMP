<template>
  <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <img src="https://i.postimg.cc/YqnDkQXk/Logotype_Boutique_Fashion_Neon.png" style="width:6rem; border-radius:100%">
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" :class="{ show: isNavbarOpen }" id="navbarSupportedContent">
        <ul class="navbar-nav ">
          <li class="nav-item justify-content-end" >
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/admin">Admin</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" to="/products">All</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" to="/categories">Categories</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/checkout">Checkout</router-link>
          </li>
          <li class="nav-item">
            <router-link id="linkName" class="nav-link active" aria-current="page" to="/contact">Contact</router-link>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
        </form>
        <button class="btn btn-outline-purple" type="button" @click="toggleLoginForm">
        Login
      </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isNavbarOpen: false,
      isMultiCollapseOpen: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    toggleMultiCollapse() {
      this.isMultiCollapseOpen = !this.isMultiCollapseOpen;
    }
  }
};
</script>

<style>
body{
  background-color: rgb(238, 216, 248);
}

.navbar-nav, .form{
background-color: white;
color:white;
width: fit-content;

}

.nav-link{
  color: white;
}

.nav-link:hover{
  background-color: purple;
  border-radius: 50%;
 
}

.btn {
  border:white;
  margin: white;
  outline: white;
  color:white;
  border: 3px solid purple;
}
</style>
