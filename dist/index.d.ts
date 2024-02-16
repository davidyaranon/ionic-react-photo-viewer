import React from 'react';

interface IonPhotoViewerProps {
    children: any;
    title: string;
    icon?: string | undefined;
    src: string;
    showHeader?: boolean;
}

declare const IonPhotoViewer: React.FC<IonPhotoViewerProps>;

export { IonPhotoViewer as default };
