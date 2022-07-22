const searchPhone = () => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    console.log(searchText);
  
    searchField.value = "";
  
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}
      `;
  
    fetch(url)
      .then((res) => res.json())
      .then((data) => displaySearchResult(data.data));
  };
  
  const displaySearchResult = (phone) => {
    const searchResult = document.getElementById("search-result");
    console.log(searchResult);
    phone.forEach((phone) => {
      console.log(phone);
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
          <div class="card p-3 rounded">
          <img src=${phone.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button id="details-button" onclick="showDetails()" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Details
</button>
          </div>
        </div>
      </div>
          `;
      searchResult.appendChild(div);
    });
  };

  const showDetails = () => {
    const buttonDiv = document.getElementById('details-button')
    const div = document.createElement("div");
    div.classList.add('modal');
    div.innerHTML = `
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    `
buttonDiv.appendChild(div)
  }