var s=prompt("Password: ");
const password = env.PASS;
if(s == password){
    alert("Securely opened");
}
else
{
    alert("Wrong password contact me.")
    window.location="contact.html";
}
