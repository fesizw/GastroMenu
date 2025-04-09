export interface CreateCategoryDto {
  name: string;
  color: string;
  image?: string;
  order?: number;
  restaurantId: string;
}

export interface UpdateCategoryDto extends Partial<CreateCategoryDto> {}

export interface CategoryResponseDto extends CreateCategoryDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}
