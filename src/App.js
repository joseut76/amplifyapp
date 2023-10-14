import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  return (
    <View className="App">
      <Card>
        <Image src={logo} className="App-logo" alt="logo" />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}
/*
In this code, we've used the withAuthenticator component. 
This component will scaffold out an entire user authentication 
flow allowing users to sign up, sign in, reset their password, 
and confirm sign-in for multifactor authentication (MFA). 
We have also added a Sign Out button to log users out.
*/
export default withAuthenticator(App);