let arr = [];
async function submit() {
 

// -------------------

  var Allo_tikki = document.getElementById("a");
  var Allo_chikan_tikki = document.getElementById("b");
  var Combo = document.getElementById("c");
  var Maharaja = document.getElementById("d");
  var Pizza = document.getElementById("e");

  if (Allo_tikki.checked) {
    arr.push(Allo_tikki.value);
    wait();
  }

  if (Allo_chikan_tikki.checked) {
    arr.push(Allo_chikan_tikki.value);
    wait();
  }

  if (Combo.checked) {
    arr.push(Combo.value);
    wait();
  }

  if (Maharaja.checked) {
    arr.push(Maharaja.value);
    wait();
  }

  if (Pizza.checked) {
    arr.push(Pizza.value);
    wait();
  }

  console.log(arr);

  // ------------------promise------------------------------------

  let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    
      resolve(arr);
    }, 2000);
  });

  var result = await promise;

  arr = [];

  console.log(result);
  Show_food(result);
}
// ---------------------------------------------------------------
function Show_food(result) {
  let container = document.getElementById("main");
  container.innerHTML = null;

    let title= document.createElement("h1");
    title.innerHTML="Enjoy Your Food"
    title.style.color="green"
    title.style.fontStyle="italic"
   
     container.append(title);
    
  result.map(function (el) {

  

    // -----------------------------
    let image = document.createElement("img");
    image.style.borderRadius = "10px";
    image.style.margin="10px";
    image.setAttribute("id", "image");

    if (el == 1) {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSP3BhxDbd6we6bRT47OLooBYlABmcIW9Hg&usqp=CAU"
      );
    } else if (el == 2) {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4rWlyxjTYLwCouitYYepPLRV9Oy1iVVDpuw&usqp=CAU"
      );
    } else if (el == 3) {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhK5Utf21O5IRF3uW4wNhCEkNGm6cMf_HCjw&usqp=CAU"
      );
    } else if (el == 4) {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRF7LLa3EJbIV8nzINeKA3XU1qlMdAaGt7ng&usqp=CAU"
      );
    } else if (el == 5) {
      image.setAttribute(
        "src",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5yEkdFeb2RcsT4PYgEcobP0DIHe5PY5S0Q&usqp=CAU"
      );
    }

    container.append(image);
  });
}

// -------------------




function wait(){
let container = document.getElementById("main"); 
  container.innerHTML = null;

  let image = document.createElement("img");
  image.src="https://media4.giphy.com/media/3ohs7YmgwHmCCvh0sg/200.webp?cid=ecf05e477a0mjpakutd9b4dc33vbarp2uiz7hc1ge29gs7by&rid=200.webp&ct=g";
  image.style.borderRadius="10px";
  image.style.width="30%"
      
  let title = document.createElement("h2");
  title.innerHTML = "Wait Your Food is Prepared...."
  title.style.color= "green"    
      
      
      container.append(image,title);

}


