import { Component } from "react";

class ReactionsCounters extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emojis: this.props.emojis,
        };
    }

    vote(i) {
        let newEmojiVote = this.state.emojis;
        newEmojiVote[i].vote++;
        this.setState({
            emojis: newEmojiVote,
        });
    }

    render() {
        return (
            <>
                {this.state.emojis.map((element, index) => <div key={index}>
                    <button onClick={this.vote.bind(this, index)}>{element.emoji}</button>
                    <p>{element.vote}</p>
                </div>)}
            </>
        )
    }

}
export default ReactionsCounters;





