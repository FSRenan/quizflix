const loginWithFacebook = async ({ firebase }) => {
  console.log('Chamou auth');
  const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(
    '1684751348317950',
    { permissions: ['public_profile'] }
  );

  if (type === 'success') {
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    firebase
      .auth()
      .signInWithCredential(credential)
      .catch(error => {
        console.log(error);
      });
    console.log('Autenticou firebase');
  }
};

export default loginWithFacebook;
