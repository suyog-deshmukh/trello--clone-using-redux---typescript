import React from 'react';
import {CardContainer} from './styles'



interface CardProps {
    text: string;
    index: number;
    columnId?: string;
    isPreview?: boolean;
    id?: string


}

export const Card = ({text}: CardProps) => {
    return <CardContainer>{text}</CardContainer>
}