import styled from 'styled-components';

export const SliderWrapper = styled.div`
    width: 80%;
    margin: 1.4rem auto 0;
`
  
export const Slider = styled.input`
    -webkit-appearance: none; 
    appearance: none;
    width: 100%;
    height: 25px;
    background: #eee; 
    outline: none; 
    opacity: 0.7; 
    -webkit-transition: .2s;
    transition: opacity .2s;

    :hover {
        opacity: 1;
    }

    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 25px; 
        height: 25px; 
        background: #d3d3d3; 
        cursor: pointer;
    }

    ::-moz-range-thumb {
        width: 25px; 
        height: 25px;
        background: #d3d3d3; 
        cursor: pointer;
    }
`