type Hook<ReturnType, Props> = Props extends undefined
    ? () => ReturnType
    : (props: Props) => ReturnType

export type ViewModelHook<ReturnType = void, Props = undefined> = Hook<ReturnType, Props>

export type ViewRouterHook<ReturnType = void, Props = undefined> = Hook<ReturnType, Props>
