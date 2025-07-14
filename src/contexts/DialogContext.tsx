'use client';
import React, { createContext, useState } from 'react';

import GenericDialog from '../components/dialog/genericDialog';

import { DialogConfirmProps } from '../components/dialog/confirm/types';
import DialogConfirmDialog from '../components/dialog/confirm';
import { displayDialogInterface } from './types';

interface Props {
  children: React.ReactNode;
}
const DialogContext = createContext({
  displayDialog: (props: displayDialogInterface) => {},
  removeDialog: (dialogId: string) => {},
  dialogConfirm: (props: DialogConfirmProps) => {},
  closeAllDialog: () => {},
});

export const externalDialogCall = {
  displayDialog: (dProps: displayDialogInterface) => {},
  removeDialog: (dialogId: string) => {},
  dialogConfirm: (props: DialogConfirmProps) => {},
  closeAllDialog: () => {},
};

export function DialogProvider(props: Props) {
  const { children } = props;
  const [dialogs, setDialogs] = useState<Array<any>>([]);

  function displayDialog(dProps: displayDialogInterface) {
    const dialogExists: displayDialogInterface = dialogs.find(
      (dialog: displayDialogInterface) => dialog.dialogId === dProps.dialogId
    );
    if (dialogExists) {
      setDialogs((current: any) => [
        ...[...current].filter(
          (dialog: displayDialogInterface) =>
            dialog.dialogId !== dProps.dialogId
        ),
        { ...dProps },
      ]);
    } else {
      setDialogs((current: any) => [...current, { ...dProps }]);
    }
  }
  function removeDialog(dialogId: string) {
    setDialogs((currentDialogs: any) => {
      const dialogToRemove: displayDialogInterface = currentDialogs.find(
        (dialog: displayDialogInterface) => dialog.dialogId === dialogId
      );
      if (dialogToRemove) {
        if (dialogToRemove?.onCloseCallback) {
          dialogToRemove.onCloseCallback();
        }
        if (dialogToRemove?.dialogProps?.onClose) {
          dialogToRemove?.dialogProps?.onClose();
        }
      }
      return currentDialogs.filter(
        (dialog: displayDialogInterface) => dialog.dialogId !== dialogId
      );
    });
  }

  function closeAllDialog() {
    setDialogs([]);
  }
  function displayConfirm(propsConfirm: DialogConfirmProps) {
    displayDialog({
      dialogId: 'CONFIRM-DIALOG',
      content: <DialogConfirmDialog {...propsConfirm} />,
    });
  }

  externalDialogCall.displayDialog = displayDialog;
  externalDialogCall.removeDialog = removeDialog;
  externalDialogCall.dialogConfirm = displayConfirm;

  return (
    <DialogContext.Provider
      value={{
        displayDialog,
        removeDialog,
        dialogConfirm: displayConfirm,
        closeAllDialog,
      }}
    >
      {children}
      {dialogs?.map((dialog: displayDialogInterface) => {
        return (
          <GenericDialog
            key={dialog.dialogId}
            {...dialog?.dialogProps}
            onClose={() => removeDialog(dialog.dialogId)}
          >
            {dialog.content}
          </GenericDialog>
        );
      })}
    </DialogContext.Provider>
  );
}

export default DialogContext;
