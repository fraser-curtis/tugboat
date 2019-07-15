export interface IModalProps {
    /**
     * A method that is invoked when the user closes the modal.
     */
    onClose: () => void;

    /**
     * Extra classnames to be applied to the component.
     */
    className?: string;
}
