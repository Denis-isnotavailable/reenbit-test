
import { useDispatch, useSelector } from "react-redux";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";

import { authSet } from "redux/authSlice";
import { selectAuth } from "redux/selectors";
import { GoogleAuthStyled, LogOutStyled, NameBoxStyled } from "./GoogleAuth.styled";


const GoogleAuth = () => {
    const dispatch = useDispatch();
    const auth = useSelector(selectAuth);

    const handleLogOut = () => {
        dispatch(authSet({
            isAuth: false,
            userName: "",
            token: null
        }))
    }

    return (
        <>
            {auth.isAuth ?
                <>
                    <NameBoxStyled>Hello, {auth.userName}</NameBoxStyled>
                    <LogOutStyled type="button" onClick={handleLogOut}>LogOut</LogOutStyled>
                </>
                :
                <GoogleAuthStyled>
                    <LoginSocialGoogle
                        client_id={"177529147775-05t9k3q5s9btalddu59c20b1j1mtr0sc.apps.googleusercontent.com"}
                        scope="openid profile email"
                        discoveryDocs="claims_supported"
                        access_type="offline"
                        onResolve={({ provider, data }) => {
                            dispatch(authSet({
                                isAuth: true,
                                userName: data.name,
                                token: data.access_token
                            }))
                            // console.log(provider, data);
                        }}
                        onReject={(err) => {
                        console.log(err);
                        }}
                    >
                        <GoogleLoginButton />
                    </LoginSocialGoogle>
                </GoogleAuthStyled>}
        </>
               
    );
}

export default GoogleAuth;