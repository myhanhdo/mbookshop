import { Grid } from '@material-ui/core';
import styled from 'styled-components';

export const GridContainer = styled(Grid)`
    width: 80%;
    margin: 30px auto;
    @media (max-width: 1100px){
        width: 90vw;
    };
    @media (max-width: 400px){
        margin: 10px auto;
    };
    
    & .genre{
        height: 90px;
        width: 230px;
        margin: 0 auto;
        border-radius: 15px;
        display: grid;
        place-items: center;
        transition: all .3s ease-in-out;
        & h3{
            color: #ffffff;
            text-transform: uppercase;
            transition: all .3s ease-in-out;
        };
        &:hover{
            cursor: pointer;
        };
        @media (max-width: 1300px){
            height: 90px;
            width: 200px;
        };
        @media (max-width: 1100px){
            height: 75px;
            width: 190px;
        };
        @media (max-width: 880px){
            height: 60px;
            width: 145px;
            & h3{
            font-size: 0.9rem;
        };
        };
    };
    & .thriller{
        background-color: #44010a;
        &:hover{
            & h3{
                color: #44010a;
                transform: scale(1.3);
            };
            background-color: inherit;
        };
    };
    & .romance{
        background-color: #D8412F;
        &:hover{
            & h3{
                color: #D8412F;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .young-adult{
        background-color: #F9A603;
        &:hover{
            & h3{
                color: #F9A603;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .science-fiction{
        background-color: #EA6500;
        &:hover{
            & h3{
                color: #EA6500;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .fantasy{
        background-color: #316d11;
        &:hover{
            & h3{
                color: #316d11;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .poetry{
        background-color: #324851;
        &:hover{
            & h3{
                color: #324851;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .biography{
        background-color: #573c27;
        &:hover{
            & h3{
                color: #573c27;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
    & .self-help{
        background-color: #626D71;
        &:hover{
            & h3{
                color: #626D71;
                transform: scale(1.3);
            };
            background-color: #ffffff;
        };
    };
`


