interface IUserForm {
    name: string;
    age: number;
}
interface IUser extends IUserForm {
    id: number;
}
declare class UserService {
    private static readonly _userKey;
    private static _getAll;
    static create(data: IUserForm): void;
    static showHtml(): void;
    private static _setToStorage;
    private static _deleteById;
}
declare const form: HTMLFormElement;
interface IInput {
    name: HTMLInputElement;
    age: HTMLInputElement;
}
