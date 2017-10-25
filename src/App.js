import React,{ Component }from 'react';
import { BrowserRouter , Switch, Route} from  'react-router-dom'
import MenuBar from './components/MenuBar.jsx';
import VideoList from './components/videolist.jsx';
import VideoPlayer from './components/VideoPlayer.jsx';
import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputValue: "",
      videos: []
    }
  }

search(query){

  const url= `https://www.googleapis.com/youtube/v3/search?maxResults=10&part=snippet&q=${query}&key=AIzaSyBulBOAwowxf2jzcW_d0Rd3X_dECyU6wLE`
  
  const promise = axios.get(url)

  promise.then(response =>{
    
    const items = response.data.items
    
    const videos = items
      .filter((v => v.id.kind === "youtube#video"))
      .map(v => (
          {
            id: v.id.videoId,
            title: v.snippet.title,
            image: v.snippet.thumbnails.medium.url
          }
        ))


      this.setState({ videos: videos })
  }) 

  promise.catch(error => console.log("errror"))
}

  

render(){
  return (
      <div>
      <MenuBar onSearch={(value) => {this.search(value)}} />
      <BrowserRouter>
      <Switch>
      <Route exact path='/' 
      render={ () => <VideoList videos={this.state.videos} />}/>
      <Route path='/detail/:id' component={VideoPlayer}/>
      </Switch>
      </BrowserRouter>
      </div>
)}

}



export default App;
