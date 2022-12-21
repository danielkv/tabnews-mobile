type Hook<ReturnType, Props> = Props extends undefined
    ? () => ReturnType
    : (props: Props) => ReturnType

export type ViewModelHook<ReturnType = void, Props = undefined> = Hook<ReturnType, Props>

export type ViewRouterHook<ReturnType = void, Props = undefined> = Hook<ReturnType, Props>

export interface ViewModelFormReturn<FormFields extends Record<string, any>> {
    loading: boolean
    formErrors?: Partial<FormFields>
    formValues: FormFields
    formDisabled: boolean
    onChange(fieldName: keyof FormFields): (e: string) => void
    onSubmit(): void
    onCancel?(): void
}
