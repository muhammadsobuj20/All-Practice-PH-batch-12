document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    // console.log('btn-update-title');
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Update this title now";
  });

    document.getElementById('btn-login').addEventListener('click',function(){
    const userInfoEl=document.getElementById('user-info');
    userInfoEl.innerText='User info Successfully Update'
   })


//    handle input Text

// step no 1: set event listener
      document
        .getElementById("btn-update")
        .addEventListener("click", function () {
          //  console.log('update');

          // step no 1:get the text from the input field
          const inputName = document.getElementById("input-name");
          // console.log(inputName);
          const name = inputName.value;
          console.log(name);

          const nameP = document.getElementById("user-name");
          nameP.innerText = name;
        });