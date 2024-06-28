import { Field, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import css from "./SeatchBar.module.css";
import { FC } from "react";

interface PropsSeatchBar {
  onSubmit: (values: string) => void;
}

const SeatchBar: FC<PropsSeatchBar> = ({ onSubmit }) => {
  return (
    <header>
      <Formik
        initialValues={{ query: "" }}
        onSubmit={(values, actions) => {
          if (values.query === "") {
            toast.error("The search field is empty.");
            return;
          }
          onSubmit(values.query);
          actions.resetForm;
        }}
      >
        <Form
          className={css.form}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Field
            className={css.input}
            type="text"
            name="query"
            placeholder="Search images and photos"
            autoComplete="off"
            autoFocus
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <Toaster />
    </header>
  );
};

export default SeatchBar;
