// import {  
//   Ingredients, 
//   Instructions,
//   Notes,
//   RecipeName
// } from "./sections"
// import {Nav} from "./components/Nav"

import Nav from "./components/Nav"
import{ Ingredients, Instructions, Notes, RecipeName} from "./sections"




function App() {

  return(
    <main>
      <section>
        <Nav/>
      </section>
      <section>
        <RecipeName/>
      </section>
      <section>
        <Notes/>
      </section>
      <section>
        <Ingredients/>
      </section>
      <section>
        <Instructions/>
      </section>
    </main>
  )
}

export default App
