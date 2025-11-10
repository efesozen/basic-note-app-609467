import { IsOptional, IsString, MinLength, IsBoolean, IsNumber, IsEnum, IsDate, IsUUID } from 'class-validator';

export class CreateNoteDto {
  @IsUUID()
  user_id!: string;

  @IsString()
  @MinLength(1)
  title!: string;

  @IsString()
  @MinLength(1)
  content!: string;

  @IsOptional()
  tags?: Record<string, unknown>;

  @IsBoolean()
  is_shared!: boolean;
}

export class UpdateNoteDto {
  @IsOptional()
  @IsUUID()
  user_id?: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(1)
  title?: string | undefined;

  @IsOptional()
  @IsString()
  @MinLength(1)
  content?: string | undefined;

  @IsOptional()
  @IsOptional()
  tags?: Record<string, unknown> | undefined;

  @IsOptional()
  @IsBoolean()
  is_shared?: boolean | undefined;
}

export class NoteResponseDto {
  id!: string;
  user_id!: string;
  title!: string;
  content!: string;
  tags?: Record<string, unknown>;
  is_shared!: boolean;
  createdAt!: Date;
  updatedAt!: Date;
}
