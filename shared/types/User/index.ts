export type UserType = {
    userAuth: {
        displayName: string,
        email: string;
        uid: string;
        photoURL: string
    },
    userFirestore: {
        phoneNumber: string;
        sex: string;
        birthDay: string;
        address: {
            state: string;
            district: string;
            street: string;
            number: string;
        };
    }

}
