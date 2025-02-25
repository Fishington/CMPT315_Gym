import './Form.scss';

export default function Form({children, variant, legend, onSubmit}) {
    return (
        <form className={`form ${variant}`} onSubmit={onSubmit} noValidate>
            <fieldset className="form__fieldset">
                {legend ? <legend className="legend">{legend}</legend> : <></>}

                {children}
            </fieldset>
        </form>
    );
}