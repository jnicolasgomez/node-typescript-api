import admin from "firebase-admin"
import { UserRecord } from "firebase-admin/lib/auth/user-record";
import { Auth } from "../interfaces/auth.interface";

const registerService = async (auth: Auth): Promise<UserRecord> => {
    const userResponse = await admin.auth().createUser({
        email: auth.email,
        password: auth.password,
        emailVerified: false,
        disabled: false
    });
    return userResponse;
}

const verifySessionToken = async (jwt: string) => {
    const decodedIdToken = await admin.auth().verifyIdToken(jwt);

    return decodedIdToken;
}

export {registerService, verifySessionToken}