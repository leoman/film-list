import styled from 'styled-components';

export const GenreFilterWrapper = styled.div`
    justify-content: space-evenly;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: 0 auto;
`;

export const GenreButton = styled.div`
    font-family: 'Open Sans', sans-serif;
    margin: 5px 10px;
    padding: 5px 10px;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 10px;

    background: ${props => props.isFiltered ? '#ccc' : '#FFF'};
    color:  ${props => props.isFiltered ? '#fff' : '#000'};
`