<template>
    <div>
    <h1>Contact Us</h1>
    <div class="box container-fluid">
      <div class="contact-us">
        <form class="callBox">
          <div class="row mb-3">
            <label for="inputName3" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputName3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="form-control" id="inputEmail3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputSubject3" class="col-sm-2 col-form-label">Subject</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="inputSubject3">
            </div>
          </div>
          <div class="row mb-3">
            <label for="inputMessage3" class="col-sm-2 col-form-label">Message</label>
            <div class="col-sm-10">
              <textarea class="form-control" id="inputMessage3" rows="8"></textarea>
            </div>
          </div>
          <button type="submit" class="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>


</template>

<script>
    export default {
        name: 'ContactView',
        components: {

        }
    }
</script>

<style >
body{
    background-color: rgb(238, 216, 248);
    
}

.box {
   
    width: 50%;
    height:70%;
    background-color: purple;
    border-radius: 3rem;
    box-shadow: 10px 6px 4px 4px white;
    
    
}

.col-sm-2{
    color: white;
}

.contact-us{
    width: 90%;
    margin-top: 3rem;
    
}

.submit{

  background: none;
 
  text-align: center;
  border: 3px solid white;
  padding: 14px 10px;
 
  outline: none;
  color: white;
  border-radius: 24px;
  transition: 0.25px;
  cursor: pointer ;
  text-decoration: solid;
}
.submit:hover{
    background: rgb(238, 216, 248);
    color: purple;

    
}

h1{
  background-color: white;
  width: fit-content;
  margin: 5rem;
  margin-left: 40%;
  padding: 1rem;
  color: purple;
 
}
</style>