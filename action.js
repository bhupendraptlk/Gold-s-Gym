function packageChangeToOne(){
document.getElementById("packageOne").style="display:block"
document.getElementById("packageSelectOne").style="padding: 8px;background-color: #FFD700"
document.getElementById("packageTwo").style="display:none"
document.getElementById("packageSelectTwo").style="background-color: #fff"
document.getElementById("packageThree").style="display:none";
document.getElementById("packageSelectThird").style="background-color: #fff"
}
function packageChangeToTwo(){
    document.getElementById("packageOne").style="display:none"
    document.getElementById("packageSelectOne").style="background-color: #fff"
    document.getElementById("packageTwo").style="display:block"
    document.getElementById("packageSelectTwo").style="padding: 8px;background-color: #FFD700"
    document.getElementById("packageThree").style="display:none";
    document.getElementById("packageSelectThird").style="background-color: #fff"
    }
function packageChangeToThree(){
    document.getElementById("packageOne").style="display:none"
    document.getElementById("packageSelectOne").style="background-color: #fff"
    document.getElementById("packageTwo").style="display:none"
    document.getElementById("packageSelectTwo").style="background-color: #fff"
    document.getElementById("packageThree").style="display:block";
    document.getElementById("packageSelectThird").style="padding: 8px;background-color: #FFD700"
}
function validateLogin(event){
    for(i=0;i<2;i++)
    {
        if(document.forms[0].elements[i].value=="")
        {
            alert("Please fill all the fields");
            event.preventDefault()
        }
    }
    var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(loginForm.username.value) == false) 
    {
        alert('Enter Valid Email Address');
        return false;
    }
    alert("Your account does not exist. Please Sign up first.")
}
function validation()
{ 
    for(i=0;i<7;i++)
    {
        if(document.forms[0].elements[i].value=="")
        {
            alert("Please fill all the fields");
            return false;
        }
    }
    if(((frm.mobile.value).length!=10)||(isNaN(frm.mobile.value)==true))
    {
        alert("Enter Valid Mobile Number.");
        return false;
    }
    if(isNaN(frm.pincode.value)==true){
        alert("Enter Valid PIN Code");
        return false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(frm.email.value) == false) 
    {
        alert('Enter Valid Email Address');
        return false;
    }
    alert("Your request has been submitted");
}