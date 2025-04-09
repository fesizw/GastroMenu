export interface CreateRestaurantDto {
  name: string;
  logo?: string;
  address?: string;
  mail?: string;
  phone?: string;
  socials?: string[];
  carouselPhotos?: string[];
  description?: string;
  active?: boolean;
}

export interface UpdateRestaurantDto extends Partial<CreateRestaurantDto> {}

export interface RestaurantResponseDto
  extends Omit<
    CreateRestaurantDto,
    | "active"
    | "logo"
    | "address"
    | "mail"
    | "phone"
    | "socials"
    | "carouselPhotos"
    | "description"
  > {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  logo?: string | null;
  address?: string | null;
  mail?: string | null;
  phone?: string | null;
  socials?: string[] | null;
  carouselPhotos?: string[] | null;
  description?: string | null;
}
