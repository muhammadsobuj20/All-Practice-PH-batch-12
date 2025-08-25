
   //step 1: set a event handler to the button
      document
        .getElementById("btn-post")
        .addEventListener("click", function () {
          //step 2: get  the  text in the comment textarea
          const commentTextBox = document.getElementById("comment-text-box");
          const newComment = commentTextBox.value;
            
          // step 3: get the parent node where to publish comment
          const commentContainer=document.getElementById('comment-container')

            // step 4: create a comment paragraph a set the inner text
            const commentElement=document.createElement('p')
            commentElement.classList.add('comment')
                commentElement.innerText= newComment

                // step 5: append the new paragraph tag to the parent node
                commentContainer.appendChild(commentElement)

               // step 6: clean the tex area
               commentTextBox.value=''
        });