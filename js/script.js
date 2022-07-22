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
          <div class="card">
          <img src=${phone.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${phone.brand}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <button>Details</button>
          </div>
        </div>
      </div>
          `;
      searchResult.appendChild(div);
    });
  };