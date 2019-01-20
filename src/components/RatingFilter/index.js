import React, { PureComponent } from 'react';
import { SliderWrapper, Slider } from './styles';

class RangeFilter extends PureComponent {

    handleChange = (event) => {
        this.props.changeRating(event.target.value);
    }

    render () {

        return(
            <SliderWrapper>
                Ratings Filter
                    <Slider 
                        type="range" 
                        min="0" max="10" 
                        value={this.props.rating} 
                        onChange={this.handleChange}
                        step=".5"/>
            </SliderWrapper>
        );
    }
}

export default RangeFilter