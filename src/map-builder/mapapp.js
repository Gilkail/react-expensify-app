const tiles = (mapSize)=>{
    const rowsNum = Array.from({length: mapSize[1]}, (v, i) => i)
    const cellsNum = Array.from({length: mapSize[0]}, (v, i) => i)
    const mapCells =  rowsNum.map((index)=> {
        return cellsNum.map((i)=>{
            return {
                x: i,
                y: index,
                type: 'Sea'
            }
        })
    })
    return mapCells
}

class World extends React.Component{
    constructor(props){
        super(props)

        // this.setMapProps = this.setMapProps.bind(this)
        this.handleChangeMap = this.handleChangeMap.bind(this)
        this.componentDidUpdate = this.componentDidUpdate.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this)

        this.state = {
            mapSize: [1, 1],
            mapProps: {}
        }
    }
    
    handleChangeMap(mapX, mapY){
        if(this.state.mapSize !== [mapX, mapY]){
            this.setState(()=>{
                return{
                    mapSize: [mapX, mapY]
                }
            })
        }
    }
    componentDidMount(){
        this.setState((prevState)=>{
            if(prevState.mapSize !== this.state.mapSize){
                return{
                    mapProps: {
                        mapTiles: tiles(this.state.mapSize)
                    }
                }
            }
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevState.mapSize !== this.state.mapSize){
            console.log('updated')
            this.setState(()=>{
                return{
                    mapProps: {
                        mapTiles: tiles(this.state.mapSize)
                    }
                }
            })
        }
    }
    // setMapProps(){
    //     this.setState(()=>{
    //         return{
    //             mapProps: {
    //                 mapTiles: tiles(this.state.mapSize)
    //             }
    //         }
    //     })
    // }

    render(){
        // console.log(this.state.mapProps)
        return(
            <div>
                <button onClick={(e)=>{
                    this.handleChangeMap(20, 20)
                }}>Test</button>
                <button onClick={this.setMapProps}>Set</button>
            </div>
            
        )
        
    }
}

// render(){
//     return(
//         <div>
//             <Header mapX={this.state.mapX} mapY={this.state.mapY} handleChangeMap={this.handleChangeMap}/>
//             <MapRender mapX={this.state.mapX} mapY={this.state.mapY} showPosition={this.showPosition}/>
//         </div>
//     )
// }

// class Header extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//           valueX: this.props.mapX,
//           valueY: this.props.mapY
//         };
  
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event) {
//         const targetName = event.target.name
//         this.setState({
//             [targetName]: event.target.value
//         })
//     }
  
//     handleSubmit(event) {
//       event.preventDefault();
//       this.props.handleChangeMap(event.target.elements.valueX.value, event.target.elements.valueY.value)
//     }
  
//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Name:
//             <input type="number" name="valueX" value={this.state.valueX} onChange={this.handleChange} />
//             <input type="number" name="valueY" value={this.state.valueY} onChange={this.handleChange} />
//           </label>
//           <input type="submit" value="Submit" />
//         </form>
//       );
//     }
//   }

// const MapRender = (props) => {

//         const rows = Array.from({length: props.mapY}, (v, i) => i)

//         return(
//             <div>
//             {
//                 rows.map((index)=> (
//                     <Maprow key={index} mapX={props.mapX} mapY={index}/>
//                 ))
//             }
//             </div>
//         )
// }

// const Maprow =  (props) => {
//     const tilesNum = Array.from({length: props.mapX}, (v, i) => i)

//     return(
//         <div className="row">
//             {
//                 tilesNum.map((index)=> (
//                     <Tile key={index} mapX={index} mapY={props.mapY}/>
//                 ))
//             }
//         </div>
//     )
// }

// const Tile = (props) => {
//     return (
//         <div className="tile" onClick={(e)=>{
//             console.log(props.mapX, props.mapY)
//         }}>{props.mapX}/{props.mapY}</div>
//     )
// }

ReactDOM.render(<World />, document.getElementById('app'))
