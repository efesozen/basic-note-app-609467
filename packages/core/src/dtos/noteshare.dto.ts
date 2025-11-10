import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateNoteshareDto {
  @IsUUID()
  note_id!: string;

  @IsUUID()
  shared_with_user_id!: string;
}

export class UpdateNoteshareDto {
  @IsOptional()
  @IsUUID()
  note_id?: string | undefined;

  @IsOptional()
  @IsUUID()
  shared_with_user_id?: string | undefined;
}

export class NoteshareResponseDto {
  id!: string;
  note_id!: string;
  shared_with_user_id!: string;
  createdAt!: Date;
  updatedAt!: Date;
}
