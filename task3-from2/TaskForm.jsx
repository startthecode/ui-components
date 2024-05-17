import { Form } from "./Form";
import { Heading } from "./Heading";
import { Paper } from "./Paper";
import { Text } from "./Text";

export const TaskForm = () => {
  return (
    <Paper className="max-w-[700px] mx-auto">
      <Heading Component="h1" size="text-[30px]" bold={true}>
        Create Account
      </Heading>
      <Text size="text-lg" bold={false}>
        If you already have! login
      </Text>
      <Form />
    </Paper>
  );
};
