import Greeting from '../components/Greeting.js'
import History from '../components/History.js'
import { useEffect, useState } from 'react'
import Input  from '../components/Input'
import  {supabase}  from '../utils/supabaseClient.js'


export default function GraditudeApp({user}) {
  /* user is data value, updater fucntion is setUser,
   default value of var is useState */
   /* like getter setter */
  const[gratitudes, setGratitudes] = useState([])
  const[loading, setLoading] = useState(true)
  const[hasSubmittedToday, setHasSubmittedToday] = useState(true)
  const[error, setError] =useState(null)

  /* writing a function to fetch data for useState */
  useEffect(() => {
    // run the fetchGratitudes()
    // adter teh initial render of the app
    // so we have access to the logged in user
    fetchGratitudes()
  }, [loading])

    // writing fetch function
    const fetchGratitudes = async() => {
    // get the graditudes data from supabase
    // set the value of gratitudes state to that data
        let {data: gratitudes, error } = await supabase
        .from('gratitudes')
        .select('entry, date_insert_ts')
 
        if (!error) {
            setGratitudes(gratitudes)
            let currentTime = new Date().getTime()
            let mostRecentRecordTime = new Date(gratitudes.slice(-1)[0].date_insert_ts).getTime()
            let hoursSinceLastSubmission = (currentTime - mostRecentRecordTime) / 3600000
            let didSubmitToday = hoursSinceLastSubmission < 24
            setHasSubmittedToday(didSubmitToday)

            setLoading(false)
            console.log(gratitudes.slice(-1))

        } else{
            //there was an error
            console.log(error)
            setLoading(false)
            setError(error)
        }
        console.log()
    }

    const addGratitude = async (entry) => {
        const { data, error } = await supabase
        .from('gratitudes')
        .insert([
            { id: user.id, entry: entry },
        ])
        setLoading(true)
        if (error) { 
            console.log(error)
            setError(error)
        }
        else {
    //deconstructs to every element in array
    // and updates entry and sends to db
    // and state client on
            setGratitudes([...gratitudes, {'entry': entry, 'date_insert_ts': null}])
            setLoading(false)
            //setHasSubmittedToday(true)
   
        }
    }   
    if (loading) {
        return <p>Loading...</p>
    }
    /*something went wrong while fetching the data */
    if(error) {
        return <p>{error}</p>
    }
    


  return (
    <div className="bg-gray-700 min-h-screen min-w-screen">
      <main className="container mx-auto max-w-prose px-4 mt-10">
        <Greeting 
          color="text-pink-300"
          user={user}
          gratitudes={gratitudes}
          hasSubmittedToday={hasSubmittedToday}
        ></Greeting>
        <div className="spacer" />
        {
          !hasSubmittedToday && <Input handleSubmit={addGratitude}/>
        }

      <div className="spacer"/>

        {gratitudes.length > 0 && (
          <History gratitudes={gratitudes}></History>
        )}
      </main>

      <style jsx>{`
        .spacer{
          height: 20px;
        }
      `}</style>

    </div>
  )
}