export interface User {
    email: string;
    password: string;
    accessToken?: string;
    refreshToken?: string;
}