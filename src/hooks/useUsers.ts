import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi, CreateUserData, UpdateUserData, UserFilters } from '@/apiRequest/users'
import { User } from '@/types/users'

// Query keys
export const userKeys = {
  all: ['users'] as const,
  lists: () => [...userKeys.all, 'list'] as const,
  list: (filters?: UserFilters) => [...userKeys.lists(), { filters }] as const,
  details: () => [...userKeys.all, 'detail'] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
  stats: () => [...userKeys.all, 'stats'] as const,
}

// Get all users
export const useUsers = (filters?: UserFilters) => {
  return useQuery({
    queryKey: userKeys.list(filters),
    queryFn: () => userApi.getUsers(filters),
  })
}

// Get single user
export const useUser = (id: string) => {
  return useQuery({
    queryKey: userKeys.detail(id),
    queryFn: () => userApi.getUserById(id),
    enabled: !!id,
  })
}

// Get current user profile
export const useCurrentUser = () => {
  return useQuery({
    queryKey: ['currentUser'],
    queryFn: userApi.getCurrentUserProfile,
  })
}

// Get user stats
export const useUserStats = () => {
  return useQuery({
    queryKey: userKeys.stats(),
    queryFn: userApi.getUserStats,
  })
}

// Create user mutation
export const useCreateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userData: CreateUserData) => userApi.createUser(userData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

// Update user mutation
export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateUserData }) =>
      userApi.updateUser(id, data),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(userKeys.detail(variables.id), data)
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

// Delete user mutation
export const useDeleteUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => userApi.deleteUser(id),
    onSuccess: (_, deletedId) => {
      queryClient.removeQueries({ queryKey: userKeys.detail(deletedId) })
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

// Bulk delete users mutation
export const useBulkDeleteUsers = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (userIds: string[]) => userApi.bulkDeleteUsers(userIds),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.lists() })
    },
  })
}

// Search users
export const useSearchUsers = (query: string, filters?: Omit<UserFilters, 'search'>) => {
  return useQuery({
    queryKey: ['users', 'search', query, filters],
    queryFn: () => userApi.searchUsers(query, filters),
    enabled: query.length > 0,
  })
}