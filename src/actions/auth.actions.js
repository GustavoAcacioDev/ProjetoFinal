import { auth, firestore, firebase } from 'firebase';
import { authConstants } from './constants';

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

export const EditarEmail = (email) => {
    return async dispatch => {
        const db = firestore()
        const user = auth().currentUser;
        console.log(user)

        if (user) {
            user.updateEmail(email).then((doc) => {
                const values = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
                const loggedInUser = {
                    firstName: values.firstName,
                    lastName: values.lastName,
                    cpf: values.cpf,
                    cep: values.cep,
                    especializacao: values.especializacao,
                    telefone: values.telefone,
                    horarioInicio: values.horarioInicio,
                    horarioTermino: values.horarioTermino,
                    uid: user.uid,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(loggedInUser));

                dispatch({
                    type: `${authConstants.USER_LOGIN}_SUCCESS`,
                    payload: { user: loggedInUser }
                });
            })
        }
    }
}

export const EditarNome = (user2) => {
    return async dispatch => {
        const db = firestore()
        const user = auth().currentUser;

        if (user) {
            db.collection('users').doc('tipoUsuario').collection('userAdmin')
                .doc(user.uid)
                .update({
                    firstName: user2.firstName,
                    lastName: user2.lastName
                }).then(() => {
                    const values = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
                    const loggedInUser = {
                        firstName: user2.firstName,
                        lastName: user2.lastName,
                        cpf: values.cpf,
                        cep: values.cep,
                        especializacao: values.especializacao,
                        telefone: values.telefone,
                        horarioInicio: values.horarioInicio,
                        horarioTermino: values.horarioTermino,
                        uid: user.uid,
                        email: user.email
                    }
                    localStorage.setItem('user', JSON.stringify(loggedInUser));

                    console.log(loggedInUser)
                    dispatch({
                        type: `${authConstants.USER_LOGIN}_SUCCESS`,
                        payload: { user: loggedInUser }
                    });
                })
        }
    }
}

export const changePassword = (newPassword) => {
    return async dispatch => {
        const db = firestore()
        const user = auth().currentUser;

        if (user) {
            user.updatePassword(newPassword).then(() => {
                console.log(newPassword)

                auth().signOut()
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
        }
    }
}

export const deleteChamado = (chamadoUid) => {
    return async dispatch => {
        const db = firestore();

        db.collection('Chamados').doc(chamadoUid)
            .delete()
            .then(() => {
                console.log('Chamado Deletado')
            }).catch((error) => {
                console.error("Error removing document: ", error);
            });

    }
}

export const sendEmailVerification = (email) => {
    return async dispatch => {
        const db = firestore()
        auth().sendPasswordResetEmail(email)
            .then(() => {
                var actionCodeSettings = {
                    url: 'https://www.example.com/?email=user@example.com',
                    iOS: {
                      bundleId: 'com.example.ios'
                    },
                    android: {
                      packageName: 'com.example.android',
                      installApp: true,
                      minimumVersion: '12'
                    },
                    handleCodeInApp: true
                  };
                  firebase.auth().sendPasswordResetEmail(
                      'user@example.com', actionCodeSettings)
                      .then(function() {
                        // Password reset email sent.
                        console.log('test')
                      })
                      .catch(function(error) {
                        // Error occurred. Inspect error.code.
                      });
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            })
    }
}
