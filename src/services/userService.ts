import { userApi, CreateUserData, UpdateUserData, UserFilters } from '@/apiRequest/users'

// Re-export for backward compatibility
export const userService = userApi

// Or create a wrapper if you need additional logic
export class UserService {
  // Get all users with caching
  static async getUsers(filters?: UserFilters) {
    try {
      return await userApi.getUsers(filters)
    } catch (error) {
      console.error('Failed to fetch users:', error)
      throw error
    }
  }

  // Get user with error handling
  static async getUserById(id: string) {
    try {
      return await userApi.getUserById(id)
    } catch (error) {
      console.error(`Failed to fetch user ${id}:`, error)
      throw error
    }
  }

  // Create user with validation
  static async createUser(userData: CreateUserData) {
    try {
      // Add any additional validation here
      if (!userData.emailAddress || !userData.firstName || !userData.lastName) {
        throw new Error('Required fields are missing')
      }

      return await userApi.createUser(userData)
    } catch (error) {
      console.error('Failed to create user:', error)
      throw error
    }
  }

  // Update user with optimistic updates
  static async updateUser(id: string, userData: UpdateUserData) {
    try {
      return await userApi.updateUser(id, userData)
    } catch (error) {
      console.error(`Failed to update user ${id}:`, error)
      throw error
    }
  }

  // Delete user with confirmation
  static async deleteUser(id: string) {
    try {
      await userApi.deleteUser(id)
      return { success: true }
    } catch (error) {
      console.error(`Failed to delete user ${id}:`, error)
      throw error
    }
  }
}

// Export types
export type { CreateUserData, UpdateUserData, UserFilters }