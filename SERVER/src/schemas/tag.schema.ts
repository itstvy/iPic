import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { TagModel } from 'src/models/tag.model';
import { Post } from './post.schema';

export type TagDocument = TagModel & Document;

@Schema(
    {
        timestamps : true
    }
)
export class tag {
  @Prop()
  name: string;
  
//   @Prop({
//      type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Posts' }],
//      default: Array
//   })
//   posts: Array<any>
}
export const TagSchema = SchemaFactory.createForClass(tag);