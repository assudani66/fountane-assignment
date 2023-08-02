import { toast } from 'react-hot-toast'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

const supabase = createClientComponentClient()
export default async function login({email,password,router}:{email:string;password:string;router:any}) {
    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email:email,
            password:password
        })
        if(data.session!==null){
            toast.success("Logged in sucessful")
            router.push("/movies")
        }
        if (error) throw error
    } catch (error) {
        toast.error("Invalid password or email")
        console.log(error)
    }
}

export async function logout(router:any) {
    try {
        const { error } = await supabase.auth.signOut()
        toast.success("logged out")
        router.push("/")
        if (error) throw error
    } catch (error) {
        toast.error("error trying to logout")
        console.log(error)
    }
}