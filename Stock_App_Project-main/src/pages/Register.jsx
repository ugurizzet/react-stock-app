import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import LockIcon from "@mui/icons-material/Lock";
import { Formik } from "formik";
import image from "../assets/result.svg";
import Grid from "@mui/material/Grid";
import RegisterForm, { registerSchema } from "../components/RegisterForm";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

import useAuthCalls from "../hooks/useAuthCalls";

const Register = () => {
  const { register } = useAuthCalls();

  return (
    <Container className="register"  maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          
          p: 2,
        }}
      >
        <Grid item xs={12} sx={{}} >
          <Typography variant="h3" className="text-danger fw-bold" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="40" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            className="text-danger fw-bold"
          >
            Register
          </Typography>

          <Formik
            initialValues={{
              username: "",
              first_name: "",
              last_name: "",
              email: "",
              password: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values, actions) => {
              register({ ...values, password2: values.password });
              actions.resetForm();
              actions.setSubmitting(false);
            }}
            component={(props) => <RegisterForm {...props} />}
          ></Formik>
          <Box sx={{ textAlign: "center", mt: 2, }}>
            <Link className="text-danger" to="/">Do you have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src="https://picsum.photos/200/300" alt=""  className="m-5 w-75 rounded " />
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;