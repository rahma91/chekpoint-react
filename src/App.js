import "./App.css";
import { section } from "bootstrap";
      /*** kjhj */

function App() {
  return (
    <div className="App">
      <section>
 <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About US</a>
        </li>
             <li class="nav-item">
          <a class="nav-link" href="#">Contacts US</a>
        </li>
        
        {/* <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li> */}
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

      </section>

  

    <section>
     <ul class="list-group">
        <li class="list-group-item list-group-item-primary">Contacts US <p class="form-p">For all enquiries , please email us using the form below</p></li>
        {/* <p>For all enquiries , please email us using the form below</p> */}

      </ul>
     
    </section>



    <section class="contacts">
<div class="container">

   <div class="row">
    <div class="col-6 col-md-4" id="test"></div>
    <div class="col-6 col-md-4">
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address *</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
</div>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Subject *</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="" />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea *</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div class="mb-3">
          <button type="button" class="btn btn-secondary btn-lg" disabled>Submit</button>

</div>







    </div>
    {/* <div class="col-6 col-md-4"></div> */}
  </div>
</div>
  
    </section>
    
  

     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous" />
     <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js" integrity="sha384-q2kxQ16AaE6UbzuKqyBE9/u/KzioAlnx2maXQHiDX9d4/zp8Ok3f+M7DPm+Ib6IU" crossorigin="anonymous"></script>
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-pQQkAEnwaBkjpqZ8RU1fF1AKtTcHJwFl3pblpTlHXybJjHpMYo79HY3hIi4NKxyj" crossorigin="anonymous"></script>
          </div>
  );
}

export default App;
