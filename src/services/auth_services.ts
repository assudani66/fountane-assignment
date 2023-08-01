import { toast } from 'react-hot-toast'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
const supabase = createClientComponentClient()
export default async function login({email,password}:{email:string,password:string}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        console.log(data)
        toast.success("Logged in sucessful")
        if (error) throw error
    } catch (error) {
        toast.error("Invalid password or email")
        console.log(error)
    }
}

export async function logout() {
    try {
        const { error } = await supabase.auth.signOut()
        toast.success("logged out")
        if (error) throw error
    } catch (error) {
        toast.error("error trying to logout")
        console.log(error)
    }
}