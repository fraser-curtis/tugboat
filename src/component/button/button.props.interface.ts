export interface IButtonProps {
    /**
     * Button text.
     */
    text: string;

    /**
     * Action when the button is clicked.
     */
    onClick?: () => void;

    /**
     * Action when the button is submitted in a form.
     */
    onSubmit?: () => void;

    /**
     * Type of button.
     */
    type: "button" | "submit";

    /**
     * Any class names to be applied to the button.
     */
    className?: string;

    /**
     * Is the button in a loading state.
     */
    loading?: boolean;

    /**
     * Is the button disabled.
     */
    disabled?: boolean;
}
