import { AuthBindings } from "@refinedev/core"

import { API_URL, dataProvider } from "./data"

export const authCredentials = {
    email: "admin@gmail.com",
    password: "admin123"
}

export const authProvider: AuthBindings = {
    login: async({email}) => {
        try {
            const {data} = await dataProvider.custom({
                url: API_URL,
                method: "post",
                headers: {},
                meta: {
                    variables: {email},
                    rawQuery: `
                    mutation Login($email: String!){
                        login(loginInput: {email: $email}) {
                            accessToken
                        }
                    }
                    `
                }
            });

            localStorage.setItem("access_token", data.login.accessToken)

            return {
                success: true,
                redirectTo: "/"
            };
        } catch (e) {
            const error = e as Error;
        
            return {
                success: false,
                error: {
                    message: "message" in error? error.message : "Login Failed",
                    name: "name" in error ?  error.name : "Invalid email or password"
                    
                }
            }
        
        }
    },


    logout : async () => {
        localStorage.removeItem("access_token");

        return {
            success: true,
            redirectTo: "/login"
        }
    },

    onError: async (error) => {
        if (error.statusCode === "UNAUTHENTICATED") {
            return {
                logout: true, 
                ...error,
            }
        }

        return {error};
    }

}
