import Role from "./role";

export default class RoleTrack {

    role: Role;
    isExpend = false;

    constructor(role: Role) {
        this.role = role;
    }
}
