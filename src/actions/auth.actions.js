import { auth, firestore } from 'firebase';
import { authConstants} from './constants';

export const signupAtendente = (user) => {

    return async (dispatch) => {

        const db = firestore();

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST` });

        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);
                const currentUser = auth().currentUser;
                const name = `${user.firstName} ${user.lastName}`;
                currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        //if you are here means it is updated successfully
                        db.collection('users')
                            .doc('tipoUsuario').collection('userAdmin').doc(data.user.uid)
                            .set({
                                firstName: user.firstName,
                                lastName: user.lastName,
                                cpf: user.cpf,
                                cep: user.cep,
                                especializacao: user.especializacao,
                                telefone: user.telefone,
                                horarioInicio: user.horarioInicio,
                                horarioTermino: user.horarioTermino,
                                uid: data.user.uid,
                                createdAt: new Date(),
                                isOnline: true
                            })
                            .then(() => {
                                //succeful
                                const loggedInUser = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    cpf: user.cpf,
                                    cep: user.cep,
                                    especializacao: user.especializacao,
                                    telefone: user.telefone,
                                    horarioInicio: user.horarioInicio,
                                    horarioTermino: user.horarioTermino,
                                    uid: data.user.uid,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));
                                console.log('User logged in successfully...!');
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                                    payload: { error }
                                });
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            })


    }


}

export const signin = (user) => {
    return async dispatch => {

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST` });
        auth()
            .signInWithEmailAndPassword(user.email, user.password)
            .then((data) => {
                console.log(data.user);


                const db = firestore();
                db.collection('users').doc('tipoUsuario').collection('userAdmin')
                    .doc(data.user.uid)
                    .update({
                        isOnline: true
                    })
                    .then(() => {
                        const name = data.user.displayName.split(" ");
                        const firstName = name[0];
                        const lastName = name[1];


                        db.collection('users').doc('tipoUsuario').collection('userAdmin')
                            .doc(data.user.uid)
                            .get().then((doc) => {
                                const loggedInUser = {
                                    firstName: doc.data().firstName,
                                    lastName: doc.data().lastName,
                                    cpf: doc.data().cpf,
                                    cep: doc.data().cep,
                                    especializacao: doc.data().especializacao,
                                    telefone: doc.data().telefone,
                                    horarioInicio: doc.data().horarioInicio,
                                    horarioTermino: doc.data().horarioTermino,
                                    uid: data.user.uid,
                                    email: user.email
                                }
                                localStorage.setItem('user', JSON.stringify(loggedInUser));

                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                });
                            }).catch(error => { console.log(error) })

                    })
                    .catch(error => {
                        console.log(error)
                    })





            })
            .catch(error => {
                console.log(error);
                dispatch({
                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                    payload: { error }
                })
            })



    }
}


export const signupUser = (user) => {

    return async (dispatch) => {

        const db = firestore();

        dispatch({ type: `${authConstants.USER_LOGIN}_REQUEST` });

        auth()
            .createUserWithEmailAndPassword(user.email, user.password)
            .then(data => {
                console.log(data);
                const currentUser = auth().currentUser;
                const name = `${user.firstName} ${user.lastName}`;
                currentUser.updateProfile({
                    displayName: name
                })
                    .then(() => {
                        //if you are here means it is updated successfully
                        db.collection('users').doc('tipoUsuario').collection('userComum')
                            .doc(data.user.uid)
                            .set({
                                firstName: user.firstName,
                                lastName: user.lastName,
                                cpf: user.cpf,
                                uid: data.user.uid,
                                createdAt: new Date(),
                                isOnline: true
                            })
                            .then(() => {
                                //succeful
                                const loggedInUser = {
                                    firstName: user.firstName,
                                    lastName: user.lastName,
                                    cpf: user.cpf,
                                    uid: data.user.uid,
                                }
                                localStorage.setItem('userCliente', JSON.stringify(loggedInUser));
                                console.log('User logged in successfully...!');
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                                    payload: { user: loggedInUser }
                                })
                            })
                            .catch(error => {
                                console.log(error);
                                dispatch({
                                    type: `${authConstants.USER_LOGIN}_FAILURE`,
                                    payload: { error }
                                });
                            });
                    });
            })
            .catch(error => {
                console.log(error);
            })


    }


}



    

export const isLoggedInUser = () => {
    return async dispatch => {

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;


        if (user) {
            dispatch({
                type: `${authConstants.USER_LOGIN}_SUCCESS`,
                payload: { user }
            });
        } else {
            dispatch({
                type: `${authConstants.USER_LOGIN}_FAILURE`,
                payload: { error: 'Login again please' }
            });
        }


    }
}

export const logout = (uid) => {
    return async dispatch => {
        dispatch({ type: `${authConstants.USER_LOGOUT}_REQUEST` });
        //Now lets logout user

        const db = firestore();
        db.collection('users').doc('tipoUsuario').collection('userAdmin')
            .doc(uid)
            .update({
                isOnline: false
            })
            .then(() => {

                auth()
                    .signOut()
                    .then(() => {
                        //successfully
                        localStorage.clear();
                        dispatch({ type: `${authConstants.USER_LOGOUT}_SUCCESS` });
                    })
                    .catch(error => {
                        console.log(error);
                        dispatch({ type: `${authConstants.USER_LOGOUT}_FAILURE`, payload: { error } })
                    })

            })
            .catch(error => {
                console.log(error);
            })




    }
}

export const CriarAtendimento = (uid) => {
    return async dispatch => {
        const db = firestore()

        db.collection('Atendimento').doc(uid)
    }
}