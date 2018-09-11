const employeeList = [
    {
      name: 'Jan',
      officeNum: 1,
      phoneNum: '223-222-2222'
    },
    {
      name: 'Juan',
      officeNum: 304,
      phoneNum: '489-789-8789'
    },
    {
      name: 'Margie',
      officeNum: 789,
      phoneNum: '789-789-7897'
    },
    {
      name: 'Sara',
      officeNum: 32,
      phoneNum: '222-789-4654'
    },
    {
      name: 'Tyrell',
      officeNum: 3,
      phoneNum: '566-621-0452'
    },
    {
      name: 'Tasha',
      officeNum: 213,
      phoneNum: '789-766-5675'
    },
    
    {
      name: 'Ty',
      officeNum: 211,
      phoneNum: '789-766-7865'
    },
    {
      name: 'Sarah',
      officeNum: 345,
      phoneNum: '222-789-5231'
    }
  ];

let command = '';

const runInputs = function (event) {
    event.preventDefault();
   
    
    // 2. verify
    
  if (command ==='verify'){
      let inputName = $('#name').val();
      let outputStr = 'Employee not Found';
      for (let i = 0; i < employeeList.length; i++){
        if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
           outputStr = `Employee Found`;
        } 
    } 
    render(outputStr);
    }

    //Lookup
    else if (command === 'lookup'){
      let inputName = $('#name').val();
      let outputStr = ' ';
      for (let i = 0; i < employeeList.length; i++){
        if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
          outputStr += `<p>${employeeList[i].name}</p>`
          outputStr +=  `<p>${employeeList[i].officeNum}</p>`
          outputStr += `<p>${employeeList[i].phoneNum}</p>`;
         break;
        
    } else {
      outputStr = 'Employee not Found';
    }
    }
    render(outputStr);
  }

  //Contains: 
  else if (command === 'contains'){
    const inputName = $('#name').val();
    let outputStr = 'Employee not Found';
    for (let i = 0; i < employeeList.length; i++){
      if (employeeList[i].name.toUpperCase().includes(inputName.toUpperCase())) {
        outputStr += `<p>${employeeList[i].name}</p>`
        outputStr += `<p>${employeeList[i].officeNum}</p>`
        outputStr += `<p>${employeeList[i].phoneNum}</p>`;
                      
      } 
      
  }    

  render(outputStr);  
  }
//Update:
  else if (command === 'update') {
  const employeeName = $('#name').val();
  const employeeNumber= $('#office').val();
  const employeePhone = $('#phone').val();
  let outputStr = 'Employee not Found';
  for (let i = 0; i < employeeList.length; i++){ 

    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase()) {
        employeeList[i].officeNum = employeeNumber; employeeList[i].phoneNum = employeePhone; 
        outputStr += `<p>${employeeList[i].name}</p>`;
        outputStr += `<p>${employeeList[i].officeNum}</p>`;
        outputStr += `<p>${employeeList[i].phoneNum}</p>`;
       
    }
    render(outputStr);
  }
}
else if (command === 'add'){
  const name = $('#name').val();
  const officeNum = $('#office').val();
  const phoneNum = $('#phone').val();
  let outputStr = '';
    employeeList.push({name, officeNum, phoneNum});
    
    for (let i = 0; i < employeeList.length; i++){
      outputStr += `<p>${employeeList[i].name}</p>`;
        outputStr += `<p>${employeeList[i].officeNum}</p>`;
        outputStr += `<p>${employeeList[i].phoneNum}</p>`;
        render(outputStr);
    }
} 


else if (command === 'delete'){
const name = $('#name').val();
let outputStr = '';
for (let i = 0; i < employeeList.length; i++){
  if (name.toUpperCase() === employeeList[i].name.toUpperCase()){
    employeeList.splice(i, 1);
    
    // for (let i = 0; i < employeeList.length; i++){
    //   outputStr += `<p>${employeeList[i].name}</p>`;
    //   outputStr += `<p>${employeeList[i].officeNum}</p>`;
    //   outputStr += `<p>${employeeList[i].phoneNum}</p>`;
      render('Employee Deleted');
    }

  }
}
}



  //When print is clicked:
  const print = function () {
    $('#results').empty();
    $('#outputs').empty();
    $('input').removeClass('show');
    $('button').removeClass('show');
      //let outputStr = '';
    for (let i = 0; i < employeeList.length; i++){
      $('#results').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
    //   outputStr += `<p>${employeeList[i].name}</p>`;
    //   outputStr += `<p>${employeeList[i].officeNum}</p>`;
    //   outputStr += `<p>${employeeList[i].phoneNum}</p>`;
    // }
    // render(outputStr);
    } 
  }
  $('#print').on('click', print);


  

//When verify is clicked:
const verify = function () {
  $('#results').empty();
  $('#outputs').empty();
  command = 'verify';
  $('#submit').text('Verify')
  $('#name').addClass('show');
  $('button').addClass('show');
  $('#phone').removeClass('show');
  $('#office').removeClass('show');

}
$('#verify').on('click', verify);



//When lookup is clicked:
const lookup = function (){
  $('#results').empty();
  $('#outputs').empty();
  command = 'lookup'
  $('#submit').text('Lookup')
  $('#name').addClass('show');
  $('button').addClass('show');
  $('#phone').removeClass('show');
  $('#office').removeClass('show');
}
$('#lookup').on('click', lookup);


//When contains is clicked:
const contain = function (){
  $('#results').empty();
  $('#outputs').empty();
  command = 'contains';
  $('#submit').text('Contains')
  $('#name').addClass('show');
  $('button').addClass('show');
  $('#phone').removeClass('show');
  $('#office').removeClass('show');
}
$('#contain').on('click', contain);



//When update is clicked:
const update = function () {
  $('#results').empty();
  $('#outputs').empty();
  command = 'update';
  $('#submit').text('Update')
  $('#name').addClass('show');
  $('#phone').addClass('show');
  $('#office').addClass('show');
  $('button').addClass('show');
}
$('#update').on('click', update);


//When add is clicked: 
const add = function () {
  $('#results').empty();
  $('#outputs').empty();
  command = 'add';
  $('#submit').text('Add')
  $('#name').addClass('show');
  $('#phone').addClass('show');
  $('#office').addClass('show');
  $('button').addClass('show');
}
$('#add').on('click', add);


//When delete is clicked:
const remove = function () {
  $('#results').empty();
  $('#outputs').empty();
  command = 'delete';
  $('#submit').text('Delete')
  $('#name').addClass('show');
  $('button').addClass('show');
  $('#phone').removeClass('show');
  $('#office').removeClass('show');
}
$('#delete').on('click', remove);


//render
const render = function (outputStr){
  $('#outputs').html(outputStr);
}

$('#submit').on('click', runInputs);

  /*
const print = function() {
    $('article').empty();
    for (let i = 0; i < employeeList.length; i++){
        console.log(employeeList[i]);
    $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
}
}
$('#print').on('click', print);


const verify = function (event){
  event.preventDefault();
 $('.verifybar').empty();
  $('.verifybar').html(`<input/>`);
  $('.verifyval').empty();
$('.verifyval').html('Verify');
}

//$('#verify').on('click', verifyClick);
$('#verify').on('click', verify);





// const verify = function() {
//     $('article').empty();
//     $('article').append(`<div class="searchbox"><input/><span id="veribtn">Verify</span></div>`);
// }
// $('#verify').on('click', verify);


let message = 'Employee Not Found'
const verifyBtn = function(event) {
  event.preventDefault();
  const inputName = $('input').val();
for (let i = 0; i < employeeList.length; i++){
  if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
    message = 'Employee Found'
  }
}
$('article').append(`<div>${message}</div>`);
}
$('.verifyval').on('click', verifyBtn);



const lookup = function (){

     $('lookupbar').empty();
  $('.lookupbar').html(`<input/>`);
 // $('.lookupval').empty();
$('.lookupval').html('Lookup');
}

$('#lookup').on('click', lookup);



const lookupBtn = function(event) {
  event.preventDefault();
 const inputName = $('input').val();

 for (let i = 0; i < employeeList.length; i++){
   if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
      $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);   
      break;
    } 
   } 
   $('article').append(`<div>${message}</div>`);
}
$('.lookup').on('click', lookupBtn);


//To add contain search...
const containBar = function (){
  $('.containbar').empty();
  $('.containbar').append(`<input/>`);
}

const containClick = function(){
  $('.containval').empty();
$('.containval').append('Contains');
}

$('#contain').on('click', containBar);
$('#contain').on('click', containClick);

// Add contain function:
const containBtn = function() {
  const inputName = $('input').val();
  for (let i = 0; i < employeeList.length; i++){
    if (employeeList[i].name.toUpperCase().includes(inputName.toUpperCase())) {
      $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);   
    } 
}   

$('article').append(`<div>${message}</div>`);
}
$('.containval').on('click', containBtn);

//To add update search...
const updateBar = function (){
  $('.updatebar').empty();
  $('.updatebar').append(`<form>
  Name:<input type="text" id="upname" name="Name"><br>
  Number:<input type="text" id="upnumber" name="Number"><br>
  Phone:<input type="text" id="upphone" name="Phone">
</form>`);
}

const updateClick = function(){
  $('.updateval').empty();
$('.updateval').append('Update');
}

$('#update').on('click', updateBar);
$('#update').on('click', updateClick);


const updateBtn = function() {
  const employeeName = $('#upname').val();
  const employeeNumber= $('#upnumber').val();
  const employeePhone = $('#upphone').val();
  for (let i = 0; i < employeeList.length; i++){ 

    if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase()) {
        employeeList[i].officeNum = employeeNumber; employeeList[i].phoneNum = employeePhone; 
    $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
    }
    // else if (employeeNumber = employeeList[i].officeNum) {
    //   employeeList[i].phoneNum = employeePhone; employeeList[i].name = employeeName;
    //   $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
    // }
    // else if (employeePhone = employeeList[i].phoneNum) {
    //   employeeList[i].name = employeeName; employeeList[i].officeNum = employeeNumber;
    //   $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
    // }
    }
}
$('.updateval').on('click', updateBtn);


//Add feature:
const addBar = function (){
  $('.addbar').empty();
  $('.addbar').append(`<form>
  Name:<input type="text" id="addname" name="Name"><br>
  Number:<input type="text" id="addnumber" name="Number"><br>
  Phone:<input type="text" id="addphone" name="Phone">
</form>`);
}

const addClick = function(){
  $('.addval').empty();
$('.addval').append('Add');
}

$('#add').on('click', addBar);
$('#add').on('click', addClick);


const addBtn = function() {
  const name = $('#addname').val();
  const officeNum= $('#addnumber').val();
  const phoneNum = $('#addphone').val();
    employeeList.push({name, officeNum, phoneNum});
    for (let i = 0; i < employeeList.length; i++){
      console.log(employeeList[i]);
      $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
    }
  }
$('.addval').on('click', addBtn);

//Delete
const deleteBar = function (){
  $('.deletebar').empty();
  $('.deletebar').append(`<input/>`);
}

const deleteClick = function(){
  $('.deleteval').empty();
$('.deleteval').append('Delete');
}

$('#delete').on('click', deleteBar);
$('#delete').on('click', deleteClick);

const deleteBtn = function() {
  const inputName = $('input').val();
  for (let i = 0; i < employeeList.length; i++){
    if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()){
      employeeList.splice(i, 1);
      
      for (let i = 0; i < employeeList.length; i++){
        $('article').append(`<div>${employeeList[i].name}</div><div>${employeeList[i].officeNum}</div><div>${employeeList[i].phoneNum}</div>`);
      }
    }
}
}
$('.deleteval').on('click', deleteBtn);

*/