import { Button } from "./Button";
import { Input } from "./Input";
import { useFieldValidation } from "./useFieldValidation";

export const Form = () => {
  let { setError, handleSubmit, errors, register } = useFieldValidation();

  return (
    <form className="mt-10" onSubmit={handleSubmit((e) => console.log(e))}>
      <Input
        label="Name"
        error={errors.name?.message}
        {...register("name", "text")}
      />
      <Input
        label="Username"
        error={errors.username?.message}
        {...register("username", "text")}
      />
      <Input
        label="Password"
        error={errors.password?.message}
        {...register("password", "password")}
      />
      <Button>Submit</Button>
    </form>
  );
};
