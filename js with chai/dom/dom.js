// const title = window.document.getElementsByClassName('heading');

// console.log(title);



//----------convert html collection 

// const htmlcol = document.getElementsByClassName('heading');
// console.log(typeof(htmlcol));
// console.log(htmlcol);

//-----------------------parent childreen traversing
// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[0].innerText);

// for(let i = 0; i <= parent.children.length -1 ; i++){
//     console.log(parent.children[i].innerText);
// }

 
// console.log(parent.firstElementChild );

// const day  = document.querySelector('.day');
// console.log(day)
// console.log(day.parentElement)
// console.log(day.nextElementSibling.innerHTML)


// const div = document.createElement('div')
// console.log(div);
// div.className = 'Main'
// div.id = 'mainid'

//-------------------- created element 
// addlangage = (language) => { 
//     const li =  document.createElement('li');
//     li.innerHTML = `${language}`;
//     document.querySelector('.parentlang').appendChild(li);
// }


// addlangage("python");
// addlangage("typescript");

//-------------------- opti created element 


//  optilang = (langname) => {
//    const li = document.createElement('li');
//    li.appendChild(document.createTextNode(langname))
//    document.querySelector('.parentlang').appendChild(li);
//  }

//  optilang('name')


//  //-------------replace element
//  const secondlang = document.querySelector('li:nth-child(3)');
//  editlang = (secondlang , replacename) => 
//  {
//         const newli = document.createElement('li');
//         newli.appendChild(document.createTextNode(replacename));
//         secondlang.replaceWith(newli);
//  }

//  editlang(secondlang , "c");


//  //-----------------remove element
//  const lastchild = document.querySelector('li:last-child');
//    lastchild.remove();



