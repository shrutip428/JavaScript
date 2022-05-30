function validate(){
    debugger

    var fname = document.getElementById('fname').value;
    var res = /^[a-zA-Z]+$/.test(fname);
    if(!res){
        alert('Please enter valid first name');
        document.getElementById('fname').focus();
        return false;
    }

    var lname = document.getElementById('lname').value;
    var res1 = /^[a-zA-Z]+$/.test(lname);
    if(!res1){
        alert('Please enter valid last name');
        document.getElementById('lname').focus();
        return false;
    }

    var number = document.getElementById('number').value;
    var res2 = /^\d{10}$/g.test(number);
    if(!res2){
        alert('Please enter valid contact number');
        document.getElementById('number').focus();
        return false;
    }

    var email = document.getElementById('email').value;
    var res3 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email);
    if(!res3){
        alert('Please enter valid email address');
        document.getElementById('email').focus();
        return false;
    }
debugger
    var firstname = document.getElementById('fname').value;
    if(firstname.length == 0){
        alert('Please enter valid first name');
        document.getElementById('fname').focus();
        return false;
    }

    var lastname = document.getElementById('lname').value;
    if(lastname.length == 0){
        alert('Please enter valid last name');
        document.getElementById('lname').focus();
        return false;
    }

    var addressline1 = document.getElementById('addressline1').value;
    if(addressline1.length == 0){
        alert('Please enter valid address in line 1');
        document.getElementById('addressline1').focus();
        return false;
    }

    var addressline2 = document.getElementById('addressline2').value;
    if(addressline2.length == 0){
        alert('Please enter valid address in line 2');
        document.getElementById('addressline2').focus();
        return false;
    }

    var city = document.getElementById('city').value;
    if(city.length == 0){
        alert('Please enter valid city name');
        document.getElementById('city').focus();
        return false;
    }

    var state = document.getElementById('state').value;
    if(state.length == 0){
        alert('Please enter valid state name');
        document.getElementById('state').focus();
        return false;
    }

    var phone = document.getElementById('number').value;
    if(phone.length == 0){
        alert('Please enter valid contact number');
        document.getElementById('number').focus();
        return false;
    }

    var info = document.getElementById('info').value;
    if(info == "ps"){
        alert('Please enter valid information');
        document.getElementById('info').focus();
        return false;
    }

    var feedback = document.getElementById('feedback').value;
    if(feedback.length == 0){
        alert('Please enter valid feedback');
        document.getElementById('feedback').focus();
        return false;
    }
    var suggestion = document.getElementById('suggestion').value;
    if(suggestion.length ==0){
        alert('Please enter valid suggestion');
        document.getElementById('suggestion').focus();
        return false;
    }

    var checkbox1 = document.getElementById('checkbox1');
    if (!checkbox1.checked){
        alert("Please check checkbox") ;
        document.getElementById('checkbox1').focus();
        return false;
      }
debugger
    var genderM=document.getElementById('male');
    var genderF=document.getElementById('female');
    var gendero=document.getElementById('others');
    if(genderM.checked==false && genderF.checked==false && gendero.checked==false )
       {
            alert("You must select male, female or others");
            return false;
       }
}
//input data is printed in the table below:
var data= " ";
$("#btnsubmit").click(function(){
    var d1 = $("#fname").val();
    var d2 = $("#lname").val();
    var d3 = $("#addressline1").val();
    var d4 = $("#addressline2").val();
    var d5 = $("#city").val();
    var d6 = $("#state").val();
    var d7 = $("#number").val();
    var d8 = $("#email").val();
    var d9 = $("#info").val();
    var d10 = $("#feedback").val();
    var d11 = $("#suggestion").val();
    var d12 = $('input[name="gender"]:checked').val();

    data = data + "<tr><td>" + d1 + "</td><td>"+ d2 +"</td><td>" + d3 +"</td><td>" + d4 +"</td><td>" + d5 +"</td><td>" + d6 +"</td><td>" + d7 +"</td><td>" + d8 +"</td><td>" + d9 +"</td><td>" + d10 +"</td><td>" + d11 +"</td><td>" + d12 +"</td></tr>";
    ;

    $("#output").html(data);
});y