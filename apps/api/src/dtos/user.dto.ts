export interface CreateUserDto {
  name: string;
  username: string;
  password: string;
  photo?: string;
  restaurantId: string;
  active?: boolean;
}

export interface UpdateUserDto extends Partial<CreateUserDto> {}

export interface UserResponseDto {
  id: string;
  name: string;
  username: string;
  photo?: string;
  active: boolean;
  restaurantId: string;
  createdAt: string;
  updatedAt: string;
}
