import React, { useState } from "react"
import styled from "react-router-dom"
import { Link } from 'react-router-dom'


export const Banner = () => {
    return (
        <BannerWrapper>
                <h4>
                    We are currently in the beta programming for this site, for more information click <Link to="/beta">HERE!</Link>
                </h4>
        </BannerWrapper>    
    )
}

const BannerWrapper = styled.div`
    h4 {
    text-align: center;
    display: block;
    width: 100%;
    height: auto;
    margin:0px;
    color: var(--textColor);
    padding: var(--cardPadding);
    box-shadow: var(--elevation-5);
    background: linear-gradient(#e3cdfa, #c1a7c7);
    }
  `