import Dialog, { DialogInterface } from '..'

interface Props extends DialogInterface {
    onClose: () => void,
}

export default function GenericDialog({ children, onClose, ...nProps }: Props) {
    return (
        <Dialog
            height="100"
            onClose={() => onClose()}
            displayClose
            {...nProps}
        >
            {children}
        </Dialog>
    )
}
