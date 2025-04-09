export interface CreateSubcategoryDto {
  name: string;
  order?: number;
  restaurantId: string;
  categoryId: string;
}

export interface UpdateSubcategoryDto extends Partial<CreateSubcategoryDto> {}

export interface SubcategoryResponseDto extends CreateSubcategoryDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}
