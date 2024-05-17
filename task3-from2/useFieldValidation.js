import { useForm } from "react-hook-form";
export const useFieldValidation = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let spaceTaxtValidation = (name) => ({
    required: `${name[0].toUpperCase() + name?.slice(1)} Can not be blank`,
    pattern: {
      message: `${name[0].toUpperCase() + name?.slice(1)} should be in pattern`,
      value: /^\S+@\S+$/i,
    },
  });

  let passwordValidation = (name) => ({
    required: `${name[0].toUpperCase() + name?.slice(1)} Can not be blank`,
    pattern: {
      message: `${name[0].toUpperCase() + name?.slice(1)} should be in pattern`,
      value: /^\S+@\S+$/i,
    },
  });

  let usernameValidation = (name) => ({
    required: `${name[0].toUpperCase() + name?.slice(1)} Can not be blank`,
    pattern: {
      message: `${name[0].toUpperCase() + name?.slice(1)} should be in pattern`,
      value: /^\S+@\S+$/i,
    },
  });

  let emailValidation = (name) => ({
    required: `${name[0].toUpperCase() + name?.slice(1)} Can not be blank`,
    pattern: {
      message: `${name[0].toUpperCase() + name?.slice(1)} should be in pattern`,
      value: /^\S+@\S+$/i,
    },
  });

  function validationCondition(name, type) {
    switch (type) {
      case "text":
        return spaceTaxtValidation(name);
      case "password":
        return passwordValidation(name);
      case "username":
        return usernameValidation(name);
      case "email":
        return emailValidation(name);
    }
  }

  return {
    setError,
    handleSubmit,
    errors,
    register: (name, type) => register(name, validationCondition(name, type)),
  };
};
