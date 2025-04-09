export interface CreateProductDto {
  name: string;
  value: number;
  description?: string;
  image?: string;
  order?: number;
  active?: boolean;
  restaurantId: string;
  categoryId: string;
  subcategoryId: string;
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}

export interface ProductResponseDto extends CreateProductDto {
  id: string;
  createdAt: string;
  updatedAt: string;
}
