import "./Form.scss";
import Button from "@/components/Button";

export default function Form({children, buttonColor, legend, submitLabel, submitIcon, onSubmit}) {
    return (
        <form className={`form`} onSubmit={onSubmit} noValidate>
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