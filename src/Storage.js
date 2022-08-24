import * as SecureStore from "expo-secure-store";

export async function Save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

export async function GetValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        return result;
    } else {
        throw new Error("Could not find value for key " + key);
    }
}

export async function DeleteValueFor(key) {
    await SecureStore.deleteItemAsync(key);
}
