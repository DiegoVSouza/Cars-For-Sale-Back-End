import { UserTokens } from "../../../../shared/infra/prisma/entities/UserTokens"

interface IUsersTokensRepository {
    create({ expires_date, user_id, refresh_token }: ICreateUserTokenDTO): Promise<UserTokens>
    findUserByIdAndRefreshToken(user_id: string, refresh_token: string): Promise<UserTokens>
    deleteById(id: string): Promise<void>
}
export { IUsersTokensRepository }