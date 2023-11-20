var s=prompt("Password: ");
const password = process.env.PASS;
if(s == password){
    alert("Securely opened");
}
else
{
    alert("Wrong password contact me.")
    window.location="contact.html";
}
