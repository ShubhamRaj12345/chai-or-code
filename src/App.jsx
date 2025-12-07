
import './App.css'
import Card from './components/Card'
import Example from './components/Example'
import Hero from './components/Hero'

function App() {


  return (
    <> 
    <Hero/>
    <Example/>
     <div className='border border-blue-400 p-4 bg-amber-600 rounded-2xl'>
        <h3 className='text-2xl '>This is a first App</h3>
    </div>
    <div className='flex gap-3'>
    <Card title="Buy Python Course" imageUrl={"https://png.pngtree.com/thumb_back/fw800/background/20240321/pngtree-whispers-of-nature-a-pink-rose-encircled-by-delicate-leaf-patterns-image_15651238.jpg"}/>
    <Card title="Buy Java Course" imageUrl={"https://png.pngtree.com/background/20230429/original/pngtree-rose-3d-flowers-rendering-generative-ai-art-picture-image_2499533.jpg"}/>
    <Card title="Buy Spring Boot Course" imageUrl={"https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb"}/>
    </div>
    </>
  )
}

export default App
