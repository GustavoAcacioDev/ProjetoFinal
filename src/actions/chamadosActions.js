import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { problemConstants } from "./constants";

const firestore = () => {
    return (
        firebase.firestore()
    )
}

const auth = () => {
    return (
        firebase.auth()
    )
}

export const Chamados = (problemObject) => {

    return async (dispatch) => {

        const db = firestore();

        dispatch({ type: `${problemConstants.USER_PROBLEM}_REQUEST` });

        auth()

        const currentUser = auth().currentUser;
        db.collection('Chamados')
            .add({
                ...problemObject,
                user_uid_1: currentUser.uid
            })
            .then(() => {
                const chamado = {
                    ...problemObject,
                    user_uid_1: currentUser.uid
                }
                localStorage.setItem('chamados', JSON.stringify(chamado));

                dispatch({
                    type: `${problemConstants.USER_PROBLEM}_SUCCESS`,
                    payload: { user: problemObject }
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: `${problemConstants.USER_PROBLEM}_FAILURE`,
                    payload: { error }
                });
            })

            .catch(error => {
                console.log(error);
            })
    }
}