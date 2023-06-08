import React, { Component } from 'react'

export default class ImgArr extends Component {

    state = { counter: 0 };
    images = [
        "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/08/24/17/33/lake-5514576_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg"
    ]

    add1 = () => {

        this.setState({ counter: this.state.counter + 1 })

        if (this.state.counter == 4) {
            this.setState({ counter: 0 });
        }
    }

    render() {

        return (
            <div>
                <h2>my veiw:</h2>
                <img height="100px" src={this.images[this.state.counter]}/>
                <hr></hr>
                <button onClick={this.add1}>+</button>
            </div>
        )
    }
}
