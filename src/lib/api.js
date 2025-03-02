import axios from 'axios';

// Constants
// const TestVenueId = '67962ca0fedd939f3b29bde1';
// const VenueHeaderKey = 'x-memberra-venue-id';
// const localApiBaseUrl = 'http://localhost:3005';

const timeout = 10000;


// Axios instance
export const api = axios.create({
    baseURL: "https://backend.memberra.co" || localApiBaseUrl,
    timeout: timeout,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Request interceptor
// api.interceptors.request.use(
//     (config) => {
//         config.headers[VenueHeaderKey] = TestVenueId;
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

// Response interceptor
api.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error("API Error:", error);
        return Promise.reject(error);
    }
);

// USERS
export const getUsers = async () => {
    try {
        const url = "/users";
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error ", error);
        throw error;
    }
}

// PENDING USERS
export const getPendingUsers = async () => {
    try {
        const url = "/users/pending";
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export const inviteUser = async (data) => {
    try {
        const url = "/invite-member";
        const response = await api.post(url, data);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

export const getVenues = async () => {
    try {
        const url = "/venues";
        const response = await api.get(url);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}

// export const approvePendingUsers = async (data) => {
//     try {
//         const url = "/users/update-by-invite-code";
//         const response = await api.put(url, data);
//         return response.data;
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// }

// export const disapprovePendingUsers = async (data) => {
//     try {
//         const url = "/users/disapprove";
//         const response = await api.post(url, data);
//         return response.data;
//     } catch (error) {
//         console.error("Error", error);
//         throw error;
//     }
// }
