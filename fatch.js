console.log('connected');

document.getElementById('btn').addEventListener('click',function(){


    console.log('clicked! Yeh')
    hi.style.backgroundColor='red';
    hi.style.textAlign='center';
})

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function featch(){

fetch('https://jsonplaceholder.typicode.com/todos/1')
    
      .then(Response=>Response.json())
      .then(json=>console.log(json));




}


// function featch1(){

//     fetch('https://jsonplaceholder.typicode.com/users')
        
//           .then(Response=>Response.json())
//           .then(json=>console.log(json));
    
    
    
    
//     }

// function featch1(){

//     fetch('https://jsonplaceholder.typicode.com/users')
        
//             //  .then(Response=>Response.json())
//             //    .then(json=>console.log(json));
//                 .then(Response=>Response.json())
//                 .then(json=>console.log(json))



// }
function featch1(){


    fetch('https://jsonplaceholder.typicode.com/users')

          .then(Response=>Response.json())
          .then(data=>getData(data))  
}

function getData(data){

    const ul=document.getElementById('ul-container');
      for( const user of data){

        // console.log(user.username);

        const li= document.createElement('li');
         
        li.innerText= user.name;
        ul.appendChild(li);

      


      }
       
       
}

function loadData5(){
       
  fetch('https://jsonplaceholder.typicode.com/users')
     

  .then(Response=>Response.json())
  .then(data=>Getvalue(data))

}
  
function Getvalue(data){

        console.log(data);
const ul= document.getElementById('ul_id');
        for (const user of data){
             
          const li= document.createElement('li');
          li.innerText= user.name;
          ul.appendChild(li);
          // console.log(user.name);
        }
}


//  post data:

// function  loadData6{

//   featch('https://jsonplaceholder.typicode.com/posts')

//         .then(Response=>Response.json())
//         .then(data=>console.log(data))
// }

  function loadData6(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(Response=> Response.json())
    .then(data => displayPosts(data)) 
    
  }

  function displayPosts(data){
    console.log(data);
    const para= document.getElementById('ptag');
    for( const user2 of data){
      // console.log(user2.title);
      const p= document.createElement('div');
      p.classList.add('user3');
        
      
      // p.innerText= user2.title;
      p.innerHTML=`
      <h4>user: ${user2.userId}</h4>
      <h3>post: ${user2.title}</h3>
      <p>postDescription: ${user2.body}</p>
      
      `
      para.appendChild(p);

    }
  }

  





