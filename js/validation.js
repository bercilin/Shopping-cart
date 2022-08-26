function fun(){
    var uname=document.forms["loginform"]["uname"].value;
    var upass=document.forms["loginform"]["upass"].value;

if (uname==null || uname==""){
    document.getElementById("errorbox").innerHTML="enter the user name";
    return false;

}
if(upass==null || upass==""){
    document.getElementById("errorbox").innerHTML="Enter the password";
    return false;

}
if (uname != '' && upass !=''){
    alert("login successfull");
}
}

function fun1(){
    var uname1=document.forms["registerform"]["uname1"].value;
    var mail=document.forms["registerform"]["mail"].value;
    var upass1=document.forms["registerform"]["upass1"].value;
    var upass2=document.forms["registerform"]["upass2"].value;

if (uname1==null || uname1==""){
    document.getElementById("errorbox").innerHTML="enter the user name";
    return false;

}
if (mail==null || mail==""){
    document.getElementById("errorbox").innerHTML="enter the mail id";
    return false;

}
if(upass1==null || upass1==""){
    document.getElementById("errorbox").innerHTML="Enter the password";
    return false;

}
if(upass2==null || upass2==""){
    document.getElementById("errorbox").innerHTML="Enter the password";
    return false;

}
if(upass1!=upass2){
    document.getElementById("errorbox").innerHTML="Password dosent match";
    return false;

}
if (uname1 != '' && upass1 !=''){
    alert("login successfull");
}
}

