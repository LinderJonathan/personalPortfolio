import '../App.css'
import '../components/ContainerBlock'

import type {containerBlockProps} from "../components/ContainerBlock"

type containerProps = {blocks: ({ id: string } & containerBlockProps)[]}

function Container({blocks}: containerProps) {
  return (
    <>
      <div className="Container">
        <h1 id="message" className="home-message">Hi, I'm Jonathan</h1>
      </div>
      // TODO: loop over blocks
    </>
  )
}

export default Container