import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = Error & Document;

@Schema()
export class Error {
  @Prop()
  message: string;
}

export const ErrorSchema = SchemaFactory.createForClass(Error);
