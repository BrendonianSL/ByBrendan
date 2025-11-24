import { PositionType } from '../_definitions/PositionType';

export default interface CardProps {
    title: string;
    subtitle: string;
    position: PositionType;
    articleLength: number;
}