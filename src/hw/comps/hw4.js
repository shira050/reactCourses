import React, { Component } from 'react'

export default class MoviesArr extends Component {

    state = { index: 0 };
    images = [
        "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_1280.jpg",
        "https://cdn.pixabay.com/photo/2017/05/23/22/33/birthday-2338813_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/03/05/20/09/bake-1238681_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/03/26/23/09/cake-pops-693645_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/08/11/13/58/apple-pie-5479993_1280.jpg",
        ""
    ]
    
    selectRef = React.createRef();
    
    changeImg = () => {
        let selectVal = this.selectRef.current.value;
        this.setState({ index: selectVal })
    }
    

 

    render() {

        return (
            <div>
                <h2>my cakes:</h2>
                

                <div >
                <h2  >Enter your favorite cake:</h2>
                <select onChange={this.changeImg} ref={this.selectRef}>
                    <option>choose an option</option>
                    <option value={0}>עוגת שכבות</option>
                    <option value={1}>עוגה וורודה</option>
                    <option value={2}>קאפקייס</option>
                    <option value={3}>כדורי שוקולד</option>
                    <option value={4}>שטרודל תפוחים</option>
                </select>
                <hr></hr>
                <img height="100px" src={this.images[this.state.index]}/>

            </div >
            </div>
        )
    }
}
