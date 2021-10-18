import React from "react";
// Styles
import { Wrapper, Content } from "./MovieGridStyle";

const MovieGrid = ({ header, children }) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>
            {children}
        </Content>
    </Wrapper>
);

export default MovieGrid;
