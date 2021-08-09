import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";

export default function AddItemForm({ saveBrandHandler }) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    const { title, content } = data;
    saveBrandHandler(title, content);
    console.log(title, content);
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        {/* include validation with required or other standard HTML validation rules */}
        <TextField
          {...register("title", { required: true })}
          id="title"
          label="title"
          fullWidth
        />

        {/* errors will return when field validation fails  */}
        {errors.title && <span>This field is required</span>}
      </div>

      <div>
        <TextField
          {...register("content", { required: true })}
          id="content"
          label="content"
          fullWidth
        />

        {errors.content && <span>This field is required</span>}
      </div>

      <Button
        style={{ float: "right" }}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Add Item
      </Button>
    </form>
  );
}
