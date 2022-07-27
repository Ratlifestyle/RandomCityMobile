import { StyleSheet, Text, View } from "react-native";
import Game from "./components/Game";
import SignInScreen from "./components/SignInScreen";
import * as SecureStore from "expo-secure-store";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignUpScreen from "./components/SignUpScreen";
import { signIn } from "./api/randomCityApi/authentification/SignInApi";
import { SignUp } from "./api/randomCityApi/authentification/SignUpApi";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import History from "./components/History";
import Success from "./components/Success";
import Options from "./components/Options";

export const AuthContext = React.createContext();
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App({ navigation }) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case "RESTORE_TOKEN":
                    return {
                        ...prevState,
                        userToken: action.token,
                        isLoading: false,
                    };
                case "SIGN_IN":
                    return {
                        ...prevState,
                        isSignout: false,
                        userToken: action.token,
                    };
                case "SIGN_OUT":
                    return {
                        ...prevState,
                        isSignout: true,
                        userToken: null,
                    };
            }
        },
        {
            isLoading: true,
            isSignout: false,
            userToken: null,
        }
    );

    React.useEffect(() => {
        // Fetch the token from storage then navigate to our appropriate place
        const bootstrapAsync = async () => {
            let userToken;

            try {
                userToken = await SecureStore.getItemAsync("userToken");
            } catch (e) {
                // Restoring token failed
            }

            // After restoring token, we may need to validate it in production apps

            // This will switch to the App screen or Auth screen and this loading
            // screen will be unmounted and thrown away.
            dispatch({ type: "RESTORE_TOKEN", token: userToken });
        };

        bootstrapAsync();
    }, []);

    const authContext = React.useMemo(
        () => ({
            signIn: async (data) => {
                // In a production app, we need to send some data (usually username, password) to server and get a token
                // We will also need to handle errors if sign in failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                signIn(data)
                    .then((response) => {
                        if (response.ok) {
                            console.log(response)
                            dispatch({
                                type: "SIGN_IN",
                                token: "dummy-auth-token",
                            });
                        } else {
                            throw new Error("Something went wrong");
                        }
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
            signOut: () => dispatch({ type: "SIGN_OUT" }),
            signUp: async (data) => {
                console.log(data);
                if (data.password == data.confirmPass) {
                    SignUp(data)
                        .then((response) => {
                            console.log(response)
                            if (response.status_code == 201) {
                                dispatch({
                                    type: "SIGN_IN",
                                    token: "dummy-auth-token",
                                });
                            } else {
                                throw new Error("something went wrong");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    data.setValidPass();
                }
                // In a production app, we need to send user data to server and get a token
                // We will also need to handle errors if sign up failed
                // After getting token, we need to persist the token using `SecureStore`
                // In the example, we'll use a dummy token

                //  dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
            },
        }),
        []
    );

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {state.userToken == null ? (
                    <Stack.Navigator>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </Stack.Navigator>
                ) : (
                    <Tab.Navigator>
                        <Tab.Screen name="Game" component={Game} />
                        <Tab.Screen name="History" component={History} />
                        <Tab.Screen name="Success" component={Success} />
                        <Tab.Screen name="Options" component={Options}/>
                    </Tab.Navigator>
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
}