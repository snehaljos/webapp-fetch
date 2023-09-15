function validate(erros, setErrors, target) {
  let er={...erros};


  console.log(er);
  console.log("inva" + erros.username_err);
  console.log(!target.value);
  switch (target.name) {
    case "username":{
      if (!target.value){
        setErrors({...erros,username_err:"required"});
        
      }
      break;
    }
    case "password":{
      if (!target.value){
        setErrors({...erros, password_err: "password required" });
     
      }
      break;
    }
    default:
      setErrors([]);
  }
}

export default validate;
