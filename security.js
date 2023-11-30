var s=prompt("Password: ");
const dnka="150106";
if(s == dnka){
    alert("Securely opened");
}
else if(s!= dnka)
{
    alert("Wrong password contact me.")
    window.location="contact.html";
}
else
{
    window.location="Mydetails.html"
}