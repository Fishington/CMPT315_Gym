import './ImageUpload.scss'

export default function ImageUpload({imagePreview, label, handleImageUpload, showOptional}) {
    return (
        <div className="grid gap-1">
            <label htmlFor="image">
                {label}
                {showOptional && <span className="image-upload__optional"> (Optional)</span>}
            </label>

            <div className="image-upload__form">
                {imagePreview ? (
                    <img
                        className="image-upload__image"
                        src={imagePreview}
                        alt="Routine preview"
                    />
                ) : (
                    <div className="image-upload__image-placeholder"></div>
                )}

                <label className='button button--blue button--medium' htmlFor="image">
                    SELECT FROM COMPUTER
                </label>

                <input
                    style={{display: "none"}}
                    id="image"
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(e)}
                />
            </div>
        </div>
    );
}