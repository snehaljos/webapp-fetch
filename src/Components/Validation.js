function validate(erros, setErrors, target) {
  switch (target.name) {
    case "username":
      if (target.value === "") setErrors([...erros, "username req"]);
      break;
    case "password":
      if (target.value === "") setErrors([...erros, "password req"]);
      break;
    default:
      setErrors([]);
  }
}

export default validate;
