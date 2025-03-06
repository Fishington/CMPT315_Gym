import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section';
import Card from '@/components/Card';
import Form from '@/components/Form';
import TextInput from '@/components/Form/TextInput';
import RadioInput from '@/components/Form/RadioInput';
import PageHeader from '@/components/Layout/PageHeader';
import ItemDetails from '@/components/ItemDetails';
import MultiColumnList from '@/components/MultiColumnList/index.js';
import Button from '@/components/Button/index.js';
import LoginIcon from '@/components/Icons/LoginIcon/index.js';
import ExerciseOrder from '@/features/workout/components/ExerciseOrder';
import useCreateRoutine from "./useCreateRoutine.jsx";
import OptionSelect from "@/components/Form/OptionSelect/index.js";
import ImageUpload from "@/components/Form/ImageUpload/ImageUpload.jsx";

function CreateRoutines() {
    const {
        errors,
        routine,
        setRoutine,
        itemDetails,
        handleCreateRoutine,
        handleImageUpload
    } = useCreateRoutine();

    return (
        <>
            <PageHeader pageTitle="Create Workout Routine" showBack={true}/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Card>
                            <Form variant="create-workout-routine__form">
                                <TextInput
                                    id="name"
                                    type="text"
                                    label="Routine Name:"
                                    value={routine.name}
                                    error={errors.name?.error}
                                    errorText={errors.name?.message}
                                    onChange={(e) =>
                                        setRoutine((prev) => (
                                            {...prev, name: e.target.value}
                                        ))}
                                />

                                <TextInput
                                    id="about"
                                    type="text"
                                    label="About Routine:"
                                    value={routine.about}
                                    error={errors.about?.error}
                                    errorText={errors.about?.message}
                                    onChange={(e) =>
                                        setRoutine((prev) => (
                                            {...prev, about: e.target.value}
                                        ))}
                                />

                                <OptionSelect
                                    id="goal"
                                    name="example"
                                    label="Routine Goal:"
                                    error={errors.goal?.error}
                                    errorText={errors.goal?.message}
                                    value={routine.goal}
                                    placeholder="Select a Target Muscle"
                                    onChange={(e) =>
                                        setRoutine((prev) => (
                                            {...prev, goal: e.target.value}
                                        ))}
                                    options={[
                                        'Cardio Endurance',
                                        'Core Stability',
                                        'Joint Health',
                                        'Muscle Building',
                                        'Rehabilitation',
                                        'Weight Loss',
                                    ]}
                                />

                                <RadioInput
                                    label={"Select Routine Difficulty:"}
                                    onChange={(value) =>
                                        setRoutine((prev) => (
                                            {...prev, level: value}
                                        ))}
                                    options={["Beginner", "Intermediate", "Advance"]}
                                    error={errors.difficulty?.error}
                                    errorText={errors.difficulty?.message}
                                    isRequired={true}
                                />

                                <OptionSelect
                                    id="targetMuscle"
                                    name="example"
                                    label="Target Muscles:"
                                    error={errors.targetMuscle?.error}
                                    errorText={errors.targetMuscle?.message}
                                    value={routine.targetMuscle}
                                    placeholder="Select a Target Muscle"
                                    onChange={(e) =>
                                        setRoutine((prev) => (
                                            {...prev, targetMuscle: e.target.value}
                                        ))}
                                    options={[
                                        'Full Body',
                                        'Chest & Shoulders',
                                        'Back & Arms',
                                        'Legs & Glutes',
                                        'Core'
                                    ]}
                                />

                                <ImageUpload
                                    label="Upload Routine Image:"
                                    imagePreview={routine.image}
                                    handleImageUpload={handleImageUpload}
                                    showOptional={true}
                                />

                                <section className="grid gap-1">
                                    <h2>Based on the Exercises:</h2>

                                    <MultiColumnList
                                        dataName="Equipment"
                                        data={routine.equipment}
                                        emptyString="Start adding exercises to your workout routine"
                                    />
                                </section>

                                <ItemDetails columns={3} details={itemDetails}/>

                                <Button
                                    color="blue"
                                    size="full-width"
                                    type="submit"
                                    onClick={handleCreateRoutine}
                                >
                                    <LoginIcon/>
                                    Create New Workout Routine
                                </Button>
                            </Form>
                        </Card>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="exercises">
                        <ExerciseOrder
                            routine={routine}
                            setRoutine={setRoutine}
                            create={true}
                        />
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default CreateRoutines;