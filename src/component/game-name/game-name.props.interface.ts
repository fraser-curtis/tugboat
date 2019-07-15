export interface IGameNameProps extends IGameNameStateProps, IGameNameDispatchProps {}

export interface IGameNameStateProps {
    /**
     * Is the name being created on the server.
     */
    loading: boolean;
}

export interface IGameNameDispatchProps {
    /**
     * Dispatch an action to create the user.
     */
    createUser: (name: string) => void;
}
