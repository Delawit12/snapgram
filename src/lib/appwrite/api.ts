import { INewUser } from "@/types";
import { account, appwriteConfig, avatars, databases } from "./config";
import { ID } from "appwrite";
//  to create a new user account by using appwrite backend service 
export async function createUserAccount(user:INewUser){
    try {
            const newAccount = await account.create( 
                ID.unique(),
                user.email,
                user.password,
                user.name
            )

            if(!newAccount) throw new Error ('Account not created')

                const avatarUrl = avatars.getInitials(user.name)

                const newUser = await saveUserToDB({accountid:newAccount.$id,
                    name:newAccount.name,
                    email:newAccount.email,
                    username:user.username, // which come from the form not from the created account 
                    imageUrl:avatarUrl
                })
            


            return newUser
    } catch (error) {
        console.log(error)
        return error
    }
}

export async function saveUserToDB(user:{
                    accountid:string,
                    name:string,
                    email:string,
                    username?:string, // which come from the form not from the created account 
                    imageUrl:URL
}){
    try {
        const newUser=await databases.createDocument(
            appwriteConfig.databaseId,appwriteConfig.userCollectionId,
            ID.unique(),
            user
        )
        return newUser

    } catch (error) {
        console.log(error)
        return error
        
    }
}
