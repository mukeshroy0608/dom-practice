let backgroundChange = document.getElementById("background-change");
function makeRed() {
    console.log(backgroundChange.style.backgroundColor="rgb(186, 226, 43)")
  }
  function makeGreen() {
    document.body.style.backgroundColor = "green";
  }

  let count= 0;
  function plusOne() {
    count++;
    const counter1 = document.getElementById("count");
    counter1.innerText = count;
  }
  const minusbtn= document.getElementById('minus-btn');
  minusbtn.addEventListener("click",function(){
    count--;
    document.getElementById("count").innerText=count;
  })

document.getElementById('yes').addEventListener('click',function(){
  document.getElementById('msg').innerText="Yes! I Will Merry YOU 💘 ";
});
document.getElementById('no').addEventListener('click',function(){
  document.getElementById('msg').innerText="No! I Not Will Merry YOU ";
});


document.getElementById("input-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;
  const mainContainer = document.getElementById("content-container");
  const tableContainer = document.createElement("tr");
  tableContainer.innerHTML = `
  <th scope="row">${count}</th>
  <td>${inputValue}</td>
  <td>
  <button class="btn btn-primary delete-btn">Delete</button>
  <button class="btn btn-secondary">Edit</button>
  </td>
  `;
  mainContainer.appendChild(tableContainer);
  document.getElementById("input-value").value = "";
  const deleteBtn = document.getElementsByClassName("delete-btn");
  for (let button of deleteBtn) {
    button.addEventListener("click", function (event) {
      event.target.parentNode.parentNode.style.display = "none";
    });
  }
});