// setting up and configuration of appwrite SDK


import {Client,Account,Databases,Storage,Avatars} from 'appwrite' //are appwrite components 

// Client: The main Appwrite client that handles communication with the Appwrite server.
// Account: Handles user account-related operations, such as creating a user, logging in, and managing sessions.
// Databases: Provides functionality to interact with Appwrite's database service, allowing you to create, read, update, and delete documents.
// Storage: Manages file storage, allowing you to upload, download, and manage files.
// Avatars: Provides functionality to manage user avatars, including creating and retrieving avatar images.


export const appwriteConfig = {
    projectId:import.meta.env.VITE_APPWRITE_PROJECT_ID,
    url:import.meta.env.VITE_APPWRITE_URL,
    databaseId:import.meta.env.VITE_APPWRITE_DATABASE,
    storageId:import.meta.env.VITE_APPWRITE_STORAGE,
    userCollectionId:import.meta.env.VITE_APPWRITE_USER_COLLECTION_ID,
    postCollectionId:import.meta.env.VITE_APPWRITE_POST_COLLECTION_ID,
    savesCollectionId:import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
    
}

// create instance for each 
export const client = new Client()
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)
// the other services (account ,database,storage,avatars) contain the client as an argument for reference
export const account = new Account(client)
export const databases = new Databases(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)