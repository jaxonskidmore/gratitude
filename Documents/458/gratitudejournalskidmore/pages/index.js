import Head from 'next/head'
import {supabase}  from '../utils/supabaseClient.js'
import GratitudeApp from '../components/GratitudeApp.js'
import { Auth } from '@supabase/ui'



export default function Home() {
  //gets the logged in user form auth.usercontext provider
  // if no user is logged in, user will be null
  // if someone is logged in, user will be an object with user info
  const{user} = Auth.useUser()
  /* user is data value, updater fucntion is setUser,
   default value of var is useState */
   /* like getter setter */

  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <Head>
        <title>Hello</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-prose px-4 mt-10">
        {
          user ? (<div>
              <GratitudeApp user={user}/>
              <button onClick ={async () => {
                  let {error} = await supabase.auth.signOut()
              }}
              className = "text-pink-300">
                Logout
              </button>
            </div>
            ): (
              <div className="bg-white">
                <Auth supabaseClient={supabase} socialLayout= "horizontal" socialButtonSize="xlarge"/>
              </div>
          )
        }
      </main>

      <style jsx>{`
        .spacer{
          height: 20px;
        }
      `}</style>

    </div>
  )
}