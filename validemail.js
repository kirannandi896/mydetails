function emailvalid(email)
{
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(email.value.match(pattern))
                    {
                        return true;
                    }
                    else
                    {
                        alert("You have entered an invalid email address!");
                        document.f1.email.focus();
                        return false;
          }
}