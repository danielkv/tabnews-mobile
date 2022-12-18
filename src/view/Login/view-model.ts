import { FormikConfig, useFormik } from 'formik'
import * as yup from 'yup'

import { ViewModelHook } from '@common/interfaces/app'

export interface LoginViewModelReturn {
    loading: boolean
    formErrors?: Partial<LoginForm>
    formValues: LoginForm
    onChange(fieldName: keyof LoginForm): (e: string) => void
    onSubmit(): void
}

export interface LoginForm {
    email: string
    password: string
}

const loginValidation = yup.object().shape({
    email: yup.string().email('Email inválido').required('Campo email é obrigatório'),
    password: yup.string().required('Campo senha é obrigatório'),
})

const loginInitalValues: LoginForm = {
    email: '',
    password: '',
}

export const useLoginViewModel: ViewModelHook<LoginViewModelReturn> = () => {
    const handleSubmit: FormikConfig<LoginForm>['onSubmit'] = async (result) => {
        console.log(result)
    }

    const {
        isSubmitting,
        errors,
        values,
        handleChange,
        handleSubmit: onSubmit,
    } = useFormik<LoginForm>({
        validationSchema: loginValidation,
        onSubmit: handleSubmit,
        initialValues: loginInitalValues,
    })

    const onChange: LoginViewModelReturn['onChange'] = (fieldName) => (e) => {
        handleChange(fieldName)(e)
    }

    return {
        loading: isSubmitting,
        formErrors: errors,
        formValues: values,
        onChange,
        onSubmit,
    }
}
