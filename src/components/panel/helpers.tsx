import React from 'react';

export type PropsWithChildren<As extends React.ElementType = React.ElementType> = React.PropsWithChildren<Props<As>>;

export interface Props<As extends React.ElementType = React.ElementType>
    extends ClassNameOnlyProps {
    as?: As;
}

export interface ClassNameOnlyProps {
    className?: string;
}
