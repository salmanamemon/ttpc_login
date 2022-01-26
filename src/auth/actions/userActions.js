// Axios
import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const loginUser = (credentials, navigate, setFieldError, setSubmitting) => {
    //Make Checks and get some data

    axios.post("http://localhost/api/login.php",
    credentials,
    {
        headers:{
            'content-type': 'multipart/form-data'
        }
    }
    ).then((response) => {
        const {data} = response;

        if(data.status === "FAILED") {
            const {message} = data;

            // check for specific error
            if(message.includes("credentials")){
                setFieldError("email", message);
                setFieldError("password", message);
            }
            else if(message.includes("password")){
                setFieldError("password", message);
            }

        }
        else if(data.status === "SUCCESS"){
            const userData = data.data[0];

            const token = userData.auth;

            sessionService.saveSession(token).then(() => {
                sessionService.saveUser(userData).then(() => {
                    navigate.push("/dashboard");
                }).catch(err => console.error(err))
            }).catch(err => console.error(err))
        }

        //complete Submission
        setSubmitting(false);

    }).catch(err => console.error(err))

}

// export const signupUser = (credentials, navigate, setFieldError, setSubmitting) => {

// }

// export const logoutUser = () => {

// }