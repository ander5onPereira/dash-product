
import { ReactNode } from 'react'
import { DialogInterface } from '../components/dialog';

export interface displayDialogInterface {
    dialogId: string,
    content: ReactNode;
    onCloseCallback?: Function;
    close?: boolean;
    dialogProps?: DialogInterface;
}
