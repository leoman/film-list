import styled from 'styled-components';

export const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
`;

export const MovieMessage = styled.div`
    width: 80%;
    margin: 20px auto;
`;