<template>
 <div>
 <div class="Container-fluid">
  <div class="front">
    <h1>Latest Spring Collection</h1>
        <p>Save up to 50%</p>
      <img src="https://i.postimg.cc/4x1xzk73/slider-img.png" id ="kid" class="d-block w-10" style="height: 30rem" alt="Kids Profile"/>
          </div>
        </div>
     
 
 
 
 
 <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="carousel-text">
          </div>
          <img src="" id ="" class="d-block w-100" style="height: 12rem" alt="Testimonial 1"/>
        </div>
        <div class="carousel-item">
          <div class="carousel-text">
          </div>
          <img src="" class="d-block w-100" style="height: 12rem"  alt="Testimonial 2" />
        </div>
        <div class="carousel-item">
          <div class="carousel-text">
          </div>
          <img src="" class="d-block w-100" style="height: 12rem" alt="Testimonial 3"/>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>


    <div class="row row-cols-1 row-cols-md-3 g-5">
      <div class="col">
        <div class="card h-50" >
          <img src="https://i.postimg.cc/GpYrqFVp/banner-img.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Shades</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-50">
          <img src="https://i.postimg.cc/QdSWTtr8/versace-pour-homme-dylan-blue-eau-de-toilette.webp" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a short card.</p>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-50">
          <img src="https://i.postimg.cc/fL3kGRdK/img-2.png" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
          </div>
        </div>
      </div>
 </div>

</div>
    
           
</template>

<script>
export default {
        name: 'HomeView',
        components: {
  
  }
      }

function validate(event) {
  event.preventDefault(); // Prevent the default form submission

  var usernameInput = document.getElementById('username').value;
  var passwordInput = document.getElementById('password').value;
  
  if (usernameInput.value.trim() === '') {
    alert('Please enter your username.');
    return;
  }

  if (passwordInput.value === '') {
    alert('Please enter your password.');
    return;
  }
  alert('Form validated successfully!');
}

</script>

<style >
.box{
  width:300px;
  padding:30px;
  top:5px;
  left: 50%;
  transform: translate(-5%, 5%);
  background: blue;
  text-align: center;
}

.box h1{
  color: pink;
  font-weight: 700;
}

.box input [type="text"],.input[type="password"] {
  border: 0;
  background: none;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 3px solid pink;
  padding: 14px 10px;
  width: 220px;
  outline: none;
  color: white;
  border-radius: 25px;
  transition: 0.25px;

}

.box input [type="text"]:focus,.box[type="password"]focus{
  width:300px;
  padding:30px;
  top:5px;
  left: 50%;
  transform: translate(-5%, 5%);
  background: blue;
  text-align: center;
}

.box{
  color: pink;
  font-weight: 700;
}

.box input [type="text"]:focus,.box[type="password"]{
  border: 0;
  background: none;
  display: block;
  text-align: center;
  border: 3px solid blue;
  padding: 14px 10px;
  width: 220px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25px
}

.box input [type="text"]:focus,.box[type="password"]:focus{
  width: 270px;
  border-color: pink;
}

.box input[type="submit"]{
  border: o;
  background: none;
  display: block;
  text-align: center;
  border: 3px solid blue;
  padding: 14px 10px;
  width: 220px;
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25px;
  cursor: pointer
}

.box input[type="submit"]:hover{
  background: black
}

#kid {

  margin-left: 60%; 

}


.carousel {
  background-color: purple;
  color: purple;
}


.card-img-top{
  width: 30px;

}

</style>