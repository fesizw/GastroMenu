// dtos/log.dto.ts
import { ActionType } from "../enums/action-type.enum";

export interface LogResponseDto {
  id: string;
  action: ActionType;
  targetCollection: string;
  targetId: string;
  timestamp: string;
  details: any;
  userId: string;
  createdAt: string;
}

export interface CreateLogDto extends Omit<LogResponseDto, "id" | "createdAt"> {
  userId: string;
}
