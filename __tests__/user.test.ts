import { RegisterUserInput } from 'src/resolvers/types'

import { db } from '@lib'
import * as resolvers from '@resolvers'
import { userResolveInfo } from '@utils/connect'

import { parent, ctx, getResolveInfo } from './mock'

const userTests = () => {
  const mockRegisterData = {
    email: 'test@gmail.com',
    username: 'testuser',
    password: 'Password123!!',
  }
  const resolveInfo = getResolveInfo(userResolveInfo)

  const registerUser = async (data: RegisterUserInput) =>
    await resolvers.Mutation.registerUser(
      parent,
      {
        data,
      },
      ctx,
      resolveInfo
    )

  // clear test data after each test
  afterEach(
    async () =>
      await db.mutation.deleteManyUsers({
        where: { username_contains: 'test' },
      })
  )

  it('A new user should be registered', async () => {
    await expect(registerUser(mockRegisterData)).resolves.toMatchSnapshot()
  })

  it('An error message should appear if usernames contain invalid characters', async () => {
    await expect(
      registerUser({ ...mockRegisterData, username: 'testuser!' })
    ).rejects.toThrowError(
      'Your username needs to be between 4 to 15 characters long, and cannot contain special characters!'
    )

    await expect(
      registerUser({
        ...mockRegisterData,
        username: 'testusertestusertestuser',
      })
    ).rejects.toThrowError(
      'Your username needs to be between 4 to 15 characters long, and cannot contain special characters!'
    )
  })

  it('An error message should appear if the Username exisits', async () => {
    // register the first time
    await registerUser(mockRegisterData)

    // register again with the same data
    await expect(registerUser(mockRegisterData)).rejects.toThrowError(
      'Username already taken!'
    )
  })

  it('An error message should appear if the Email exists', async () => {
    // register the first time
    await registerUser(mockRegisterData)

    // register again with the same data
    await expect(
      registerUser({ ...mockRegisterData, username: 'testusertwo' })
    ).rejects.toThrowError('Email already taken!')
  })
}

export default userTests
