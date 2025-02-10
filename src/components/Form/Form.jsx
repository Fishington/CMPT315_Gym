import Button from "@/components/Button";

import "./Form.scss";

export default function Form({children, variant, buttonColor, legend, submitLabel, submitIcon, onSubmit}) {
    return (
        <form className={`form ${variant}`} onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset">
                {legend ? <legend className="legend">{legend}</legend> : <></>}

                {children}
            </fieldset>

            <Button
                color={buttonColor}
                size="full-width"
                type="submit"
            >
                {submitIcon}
                {submitLabel}
            </Button>
        </form>
    );
}