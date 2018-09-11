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

  if (command === 'verify') {
    let inputName = $('#name').val();
    let outputStr = 'Employee not Found';
    for (let i = 0; i < employeeList.length; i++) {
      if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
        outputStr = `Employee Found`;
      }
    }
    render(outputStr);
  }

  //Lookup
  else if (command === 'lookup') {
    let inputName = $('#name').val();
    let outputStr = ' ';
    for (let i = 0; i < employeeList.length; i++) {
      if (inputName.toUpperCase() === employeeList[i].name.toUpperCase()) {
        outputStr += `<p>${employeeList[i].name}</p>`
        outputStr += `<p>${employeeList[i].officeNum}</p>`
        outputStr += `<p>${employeeList[i].phoneNum}</p>`;
        break;

      } else {
        outputStr = 'Employee not Found';
      }
    }
    render(outputStr);
  }

  //Contains: 
  else if (command === 'contains') {
    const inputName = $('#name').val();
    let outputStr = 'Employee not Found';
    for (let i = 0; i < employeeList.length; i++) {
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
    const employeeNumber = $('#office').val();
    const employeePhone = $('#phone').val();
    let outputStr = 'Employee not Found';
    for (let i = 0; i < employeeList.length; i++) {

      if (employeeName.toUpperCase() === employeeList[i].name.toUpperCase()) {
        employeeList[i].officeNum = employeeNumber; employeeList[i].phoneNum = employeePhone;
        outputStr += `<p>${employeeList[i].name}</p>`;
        outputStr += `<p>${employeeList[i].officeNum}</p>`;
        outputStr += `<p>${employeeList[i].phoneNum}</p>`;

      }
      render(outputStr);
    }
  }
  else if (command === 'add') {
    const name = $('#name').val();
    const officeNum = $('#office').val();
    const phoneNum = $('#phone').val();
    let outputStr = '';
    employeeList.push({ name, officeNum, phoneNum });

      outputStr += `<p>${name}</p>`;
      outputStr += `<p>${officeNum}</p>`;
      outputStr += `<p>${phoneNum}</p>`;
      render(outputStr);
    }
  


  else if (command === 'delete') {
    const name = $('#name').val();
    let outputStr = '';
    for (let i = 0; i < employeeList.length; i++) {
      if (name.toUpperCase() === employeeList[i].name.toUpperCase()) {
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
  for (let i = 0; i < employeeList.length; i++) {
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
const lookup = function () {
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
const contain = function () {
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
const render = function (outputStr) {
  $('#outputs').html(outputStr);
}

$('#submit').on('click', runInputs);

