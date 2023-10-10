function validate(erros, setErrors, target) {
  let er={...erros};


  switch (target.name) {
    case "username":{
      if (!target.value){
        setErrors({...erros,username_err:"required",haveError:true});
        
      }
      break;
    }
    case "password":{
      if (!target.value){
        setErrors({...erros, password_err: "password required",haveError:true });
     
      }
      break;
    }
    default:
      setErrors([]);
  }
}

export default validate;
