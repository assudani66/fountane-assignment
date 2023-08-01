import { createClient } from '@supabase/supabase-js'
import { toast } from 'react-hot-toast'
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function login({email,password}:{email:string,password:string}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        console.log(data)
        if (error) throw error
    } catch (error) {
        toast.error("Invalid password or email")
        console.log(error)
    }
}

export async function logout() {
    try {
        const { error } = await supabase.auth.signOut()
        if (error) throw error
    } catch (error) {
        toast.error("error trying to logout")
        console.log(error)
    }
}