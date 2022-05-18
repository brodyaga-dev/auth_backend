import { IsObject, IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsObject()
  product: {
    id: number;
  };
  @IsObject()
  user: {
    id: number;
  };

  @IsString()
  body: string;
}