import { ValidationError, validate } from "class-validator";

export const AppValidationError = async (
    input: any
): Promise<ValidationError[] | false> => {
    const errors = await validate(input, {
        validationError: { target: true },
    });

    if (errors.length) {
        return errors;
    }

    return false;
};