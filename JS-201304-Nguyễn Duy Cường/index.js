let person = document.querySelector(".name");
let email = document.querySelector(".email");
let numberPhone = document.querySelector(".numberPhone");
let hometown = document.querySelector(".hometown");
let male = document.querySelector(".male");
let female = document.querySelector(".female");
let btn = document.querySelector(".btn");

let productList=[
];

btn.addEventListener("click", function() {
  let names = person.value;
  let emails = email.value;
  let numberPhones = numberPhone.value;
  let hometowns = hometown.value;
  let genders = male.checked ? "Male" : "Female";
let listProduct={
  Name :names,
  Email:emails,
  NumberPhone:numberPhones,
  Hometown:hometowns,
  Gender:genders
}
productList.push(listProduct);
document.querySelector(".name").value="";
document.querySelector(".email").value="";
document.querySelector(".numberPhone").value="";
document.querySelector(".hometown").value="";
document.querySelector(".male").value="";
document.querySelector(".female").value="";
renderList()
}
);
function renderList(){
    let renderProduct=`
    <tr>
    <th>#</th>
    <th>Họ và tên</th>
    <th>Email</th>
    <th>Điện Thoại</th>
    <th>Địa chỉ</th>
    <th>Gender</th>
    <th>Hành Động</th>
    <th><button onclick="alpha()">Sắp xếp (anpha b)</button></th>
</tr> 
  `;
    for(let i = 0 ; i<productList.length;i++){
      renderProduct+=`  
      <tr>
      <td>${i}</td>
      <td>${productList[i].Name}</td>
      <td>${productList[i].Email}</td>
      <td>${productList[i].NumberPhone}</td>
      <td>${productList[i].Hometown}</td>
      <td>${productList[i].Gender}</td>
      <td><button onclick="del(${i})">Delete</button> <button onclick="upd(${i})">Update</button></td>
      <td></td>
      </tr>`
    }
    document.getElementById("table").innerHTML=renderProduct;
}
function del(id){
  productList.splice(id,1);
  renderList()
}
function upd(id) {
  document.querySelector(".name").value = productList[id].Name;
  document.querySelector(".email").value = productList[id].Email;
  document.querySelector(".numberPhone").value = productList[id].NumberPhone;
  document.querySelector(".hometown").value = productList[id].Hometown;
  if (productList[id].Gender === "Male") {
    document.querySelector(".male").checked = true;
  } else {
    document.querySelector(".female").checked = true;
  }

  let updateBtn = document.createElement("button");
  updateBtn.textContent = "Update";
  updateBtn.addEventListener("click", function() {
    let newName = document.querySelector(".name").value;
    let newEmail = document.querySelector(".email").value;
    let newNumber = document.querySelector(".numberPhone").value;
    let newHometown = document.querySelector(".hometown").value;
    let newGender = document.querySelector(".male").checked ? "Male" : "Female";

    let updatedProduct = {
      Name: newName,
      Email: newEmail,
      NumberPhone: newNumber,
      Hometown: newHometown,
      Gender: newGender
    };

    productList[id] = updatedProduct;
    renderList();
  });

  document.querySelector(".btn").replaceWith(updateBtn);
}
function alpha(){
  productList.sort(function(a,b){
    return a.Name.localeCompare(b.Name);
  })
  renderList()
  }
  let searchs=document.getElementById("search");
function timkiem(){
  let valeSearch=searchs.value;
  let arrSearch=[];
  for(let i = 0; i<productList.length;i++){
    if(valeSearch==productList[i].Name){
      var renderSearch=`
      <tr>
      <td>${i}</td>
      <td>${productList[i].Name}</td>
      <td>${productList[i].Email}</td>
      <td>${productList[i].NumberPhone}</td>
      <td>${productList[i].Hometown}</td>
      <td>${productList[i].Gender}</td>
      </tr>
      `
      console.log(renderSearch);
    }
    document.getElementById("rendersearch").innerHTML=renderSearch;
  } 
  render()
}

